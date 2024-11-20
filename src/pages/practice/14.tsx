import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import { useState, ChangeEvent } from 'react';


type Todo = {
  label: string;
  isCompleted: boolean;
}

const Page: NextPage = () => {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const handleChangeTodo = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  const handleAddTodo = () => {
    if (!todo) {
      return;
    }
    setTodoList((prevState) => [...prevState, { label: todo, isCompleted: false }]);
    setTodo('');
  };

  const handleCompleteTodo = (index: number) => {
    setTodoList((prevState) => prevState.map((prevTodo, i) => i === index ? { ...prevTodo, isCompleted: !prevTodo.isCompleted } : prevTodo))
  };

  const handleDeleteTask = (index: number) => {
    setTodoList((prevTodoList) => prevTodoList.filter((prevTodo, i) => i !== index))
  };
  return (
    <div className="mx-auto mt-10 flex max-w-4xl justify-center">
      <div className=''>
        <div>
          {/* input form */}
          <input
            className='border outline-none rounded-md px-3 py-2'
            type="text"
            onChange={handleChangeTodo}
            value={todo}
            placeholder='add ToDO!'
          />
          <Button label='追加' variant='primary' onClick={handleAddTodo} className='mt-4' />
        </div>
        <div>
          {/* ToDoList */}
          <ul className='mt-4'>
            {
              todoList.map((todo, index) => (
                <li key={index} className={`${todo.isCompleted ? 'line-through' : ''} flex border-b border-gray-100 justify-between items-center`}>
                  <span>{todo.label}</span>
                  <div className='flex gap-x-2'>
                    <Button
                      onClick={() => handleCompleteTodo(index)}
                      label='complete'
                      variant='secondary'
                    />
                    <Button onClick={() => handleDeleteTask(index)} label='delete' variant='error-secondary' />
                  </div>
                </li>
              ))
            }

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
