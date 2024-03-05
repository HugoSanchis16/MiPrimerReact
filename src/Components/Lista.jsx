import React, { useState } from "react";

const Lista = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="d-flex flex-column align-items-center p-5">
      <div className="input-group mb-3 w-50">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="form-control"
          placeholder="Ingrese el nombre del invitado"
        />
        <button onClick={handleAddTodo} className="btn btn-primary">
          Añadir
        </button>
      </div>
      <ul className="list-group w-50">
        {todos.map((todo, index) => (
          <li key={index} className="list-group-item">{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Lista;
