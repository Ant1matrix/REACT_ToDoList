import React, {useState} from 'react';
import { Todo } from '../model';
import {AiFillEdit, AiFillDelete} from 'react-icons/ai';
import {MdDone} from 'react-icons/md';
import './styles.css';

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};


const TaskCard = ({todo, todos, setTodos}:Props) => {

  const [edit, setEdit] = useState<boolean>(false);
  const [editText, setEditText] = useState(todo.todo);

  const handleDone = (id:number) => {
    setTodos(
      todos.map((todo)=> 
      todo.id === id?{...todo,isDone:!todo.isDone}:todo
    )
  );
  };

  const handleDelete = (id:number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <form className="TaskCard__single">
      {edit ? (
        <input value={editText} onChange={(e) => setEditText(e.target.value)} className='editText__box'/>
      ) : todo.isDone ? (
        <s className="TaskCard__single--text">{todo.todo}</s>
      ) : (
        <span className="TaskCard__single--text">{todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default TaskCard;