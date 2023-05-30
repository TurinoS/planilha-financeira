import styles from './App.module.css';
import Footer from "./components/Footer";
import Form from './components/Form';
import Header from "./components/Header";
import Table from "./components/Table";


function App() {
  return (
    <main>
      <Header />

      <Form />

      <section className={styles.tables} >
        <Table funcaoDaTabela='Receita' />
        <Table funcaoDaTabela='Despesa' />
      </section>

      <Footer />
    </main>
  );
}

export default App;
