import { useEffect, useState } from 'react';
import styles from './App.module.css';
import Footer from "./components/Footer";
import Form from './components/Form';
import Header from "./components/Header";
import Table from "./components/Table";


function App() {

  const [receitaTableRow, setReceitaTableRow] = useState([])
  const [despesaTableRow, setDespesaTableRow] = useState([])

  useEffect(() => {
      fetch('http://localhost:5000/receitas', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
      })
      .then((resp) => resp.json())
      .then((data) => {
          setReceitaTableRow(data)
      })
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
      fetch('http://localhost:5000/despesas', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
      })
      .then((resp) => resp.json())
      .then((data) => {
          setDespesaTableRow(data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <main>
      <Header />

      <Form />

      <section className={styles.tables} >
        <Table funcaoDaTabela='Receita' data={receitaTableRow} />
        <Table funcaoDaTabela='Despesa' data={despesaTableRow} />
      </section>

      <Footer />
    </main>
  );
}

export default App;
