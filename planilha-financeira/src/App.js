import { useState } from 'react';
import styles from './App.module.css';
import Footer from "./components/Footer";
import Form from './components/Form';
import Header from "./components/Header";
import Table from "./components/Table";
import TableRenderReceitas from './components/TableRenderReceitas';
import TableRenderDespesas from './components/TableRenderDespesas';

function App() {

  const [receitaTableRow, setReceitaTableRow] = useState([])
  const [despesaTableRow, setDespesaTableRow] = useState([])

  TableRenderReceitas(setReceitaTableRow);
  TableRenderDespesas(setDespesaTableRow);

  const removeRow = (funcaoDaTabela, id) =>  {
    fetch(`http://localhost:5000/${funcaoDaTabela}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
}

  return (
    <main>
      <Header />

      <Form />

      <section className={styles.tables} >
        <Table funcaoDaTabela='Receitas' data={receitaTableRow} removeRow={removeRow} />
        <Table funcaoDaTabela='Despesas' data={despesaTableRow} removeRow={removeRow}/>
      </section>

      <Footer />
    </main>
  );
}

export default App;
