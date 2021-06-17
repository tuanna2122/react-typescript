import { useRef, useContext } from 'react';

import { TodosContext } from '../store/todos-context';
import styles from './NewTodo.module.css';

const NewTodo: React.FC = () => {
    const todosContext = useContext(TodosContext);
    const textInputRef = useRef<HTMLInputElement>(null);

    const addTodoHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = textInputRef.current!.value;

        todosContext.addTodo(enteredText);
    }

    return (
        <form onSubmit={addTodoHandler} className={styles.form}>
            <label htmlFor='text'>Text</label>
            <input id='text' ref={textInputRef} />
            <button>Add Todo</button>
        </form>
    );
}

export default NewTodo;
