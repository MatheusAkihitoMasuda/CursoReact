import * as React from 'react';
import styles from './TaskForm.module.css';

export interface Props {
    btnText: string
}

export function TaskForm ({btnText}: Props) {
  return (
    <form className={styles.form}>
         <div className={styles.input_container}> 
            <label htmlFor="title">Título</label>
            <input type="text" name="title" placeholder='Título da tarefa'/>
         </div>
         <div className={styles.input_container}>
            <label htmlFor="difficulty">Dificuldade:</label>
            <input name="difficulty" placeholder='Dificuldade da tarefa'></input>
         </div>
         <input type="submit" value={btnText}/>
    </form>

  );
}

export default TaskForm;
