import { useRef } from 'react';

const NewTodo = () => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const addTodoHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = textInputRef.current!.value;

        console.log(enteredText);
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
