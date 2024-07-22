import React from 'react';
import { Todo } from '../model';

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TaskCard = ({todo, todos, setTodos}:Props) => {
  return (
    <form className='TaskCard__single'>
      <span className="TaskCard__single--text">
        {todo.todo}
      </span>
    </form>
  )
};

export default TaskCard;