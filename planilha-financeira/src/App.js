import { useEffect, useState } from 'react';
import styles from './App.module.css';
import Footer from "./components/Footer";
import Form from './components/Form';
import Header from "./components/Header";
import Table from "./components/Table";
import { FormContextProvider } from './Hooks/FormContext';

function App() {

  const [receitaTableRow, setReceitaTableRow] = useState([])
  const [despesaTableRow, setDespesaTableRow] = useState([])

  const [submited, setSubmited] = useState(false)

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/TurinoS/planilha-financeira-api/receitas', {
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
    }, [setReceitaTableRow, submited])


  useEffect(() => {
    fetch('https://my-json-server.typicode.com/TurinoS/planilha-financeira-api/despesas', {
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
    }, [setDespesaTableRow, submited])

  const removeRow = (funcaoDaTabela, id) =>  {
    fetch(`https://my-json-server.typicode.com/TurinoS/planilha-financeira-api/${funcaoDaTabela}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    
    if(funcaoDaTabela === 'Despesas') {
      const novaListaTransacoes = despesaTableRow.filter(transacao => transacao.id !== id);
      setDespesaTableRow(novaListaTransacoes);
    } else if(funcaoDaTabela === 'Receitas') {
      const novaListaTransacoes = receitaTableRow.filter(transacao => transacao.id !== id);
      setReceitaTableRow(novaListaTransacoes);
    }
  }

  return (
    <main>
      <Header />
      <FormContextProvider>
      <Form submited={submited} setSubmited={setSubmited} />

      <section className={styles.tables} >
        <Table submited={submited} funcaoDaTabela='Receitas' data={receitaTableRow} removeRow={removeRow} />
        <Table submited={submited} funcaoDaTabela='Despesas' data={despesaTableRow} removeRow={removeRow} />
      </section>
      </FormContextProvider>
      <Footer />
    </main>
  );
}

export default App;
