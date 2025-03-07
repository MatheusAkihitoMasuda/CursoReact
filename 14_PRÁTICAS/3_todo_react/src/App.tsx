import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import styles from './App.module.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm btnText="Criar tarefa"/>
          <TaskList />
        </div>
        <div>
          <h2>Suas tarefas:</h2>  
          <p>Lista</p> 
        </div>     
      </main>
      <Footer />
    </div>
  );
}

export default App;
