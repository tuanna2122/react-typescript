import { useRef } from 'react';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const addTodoHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = textInputRef.current!.value;

        props.onAddTodo(enteredText);
    }

    return (
        <form onSubmit={addTodoHandler}>
            <label htmlFor='text'>Text</label>
            <input id='text' ref={textInputRef} />
            <button>Add Todo</button>
        </form>
    );
}

export default NewTodo;
