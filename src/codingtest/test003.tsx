// Todo 추가 문제

import { useState } from "react";

function TodoForm({ onAdd }: { onAdd: (text: string) => void }) {
  const [inputData, setInputData] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputData(e.target.value);
  };

  const handleSubmit = () => {
    if (!inputData.trim()) {
      alert("내용을 입력해주세요!");
      return;
    }
    onAdd(inputData); // 상위로 텍스트만 전달
    setInputData("");
  };

  /*
  const [todos, setTodos] = useState<{ id: number; text: string }[]>([]);
  
  const addTodo = () => {
    if (inputData.trim()) {
      const newTodo = {
        id: Date.now(),
        text: inputData,
      };
      setTodos([...todos, newTodo]);
      setInputData("");
    } else if (!inputData.trim()) {
      alert("내용을 입력해주세요!");
    }
  };
  */

  /*
  //   const deleteTodo = (index: number) => {
  //     console.log(index);
  //     setTodos((prev) => prev.filter((_, i) => i !== index));
  const deleteTodo = (id: number) => {
    console.log(id);
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    // ( _, i ) => i !== index 는 삭제하고 싶은 index만 빼고 나머지 todo들만 남겨서 새 배열로 만드는 함수
  };
  */

  return (
    <div>
      <input value={inputData} onChange={handleChange} />
      <button onClick={handleSubmit}>add</button>

      {/* 
      <p>{todos.length}개의 할일</p>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>삭제</button>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

function Result({
  todos,
  onDelete,
}: {
  todos: { id: number; text: string }[];
  onDelete: (id: number) => void;
}) {
  return (
    <>
      <p>{todos.length}개의 할일</p>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => onDelete(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </>
  );
}

function Soultion003() {
  // const [addData, setAddData] = useState(null);

  const [todos, setTodos] = useState<{ id: number; text: string }[]>([]);

  const handleAdd = (text: string) => {
    const newTodo = { id: Date.now(), text };
    setTodos((prev) => [...prev, newTodo]);
  };

  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <TodoForm onAdd={handleAdd} />
      <Result todos={todos} onDelete={handleDelete} />
    </>
  );
}

export default Soultion003;
