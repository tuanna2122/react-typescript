import React, { useContext } from 'react';

import TodoItem from './TodoItem';
import { TodosContext } from '../store/todos-context';
import styles from './Todos.module.css';

const Todos: React.FC = () => {
    const todosContext = useContext(TodosContext);

    return (
        <ul className={styles.todos}>
            {todosContext.items.map(item => (
                <TodoItem
                    key={item.id}
                    text={item.text}
                    onRemoveTodo={todosContext.removeTodo.bind(null, item.id)} />
            ))}
        </ul>
    );
}

export default Todos;
