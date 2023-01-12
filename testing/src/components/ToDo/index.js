import React, { useState } from "react";

const defaultItems = [
  {
    name: "Item A",
  },
  {
    name: "Item B",
  },
  {
    name: "Item C",
  },
];

function Todo() {
  const [text, setTetx] = useState("");
  const [items, setItems] = useState(defaultItems);

  const addItems = () => {
    setItems((prev) => [...prev, { name: text }]);
    setTetx("");
  };
  return (
    <div>
      <label>
        Text
        <input value={text} onChange={(e) => setTetx(e.target.value)} />
      </label>
      <button onClick={addItems}>Add</button>

      <br />
      <br />
      {items.map((item, key) => (
        <div key={key}>{item.name}</div>
      ))}
    </div>
  );
}

export default Todo;
