import { useState } from "react";

export default function DynamicInputs() {
  const [inputs, setInputs] = useState([]); // array con los valores de cada input
  const [items, setItems] = useState([]);   // array final con los ítems ya confirmados

  // Agregar un nuevo input vacío
  function handleAddInput() {
    setInputs([...inputs, ""]);
  }

  // Actualizar el valor de un input específico
  function handleChangeInput(index, value) {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  }

  // Confirmar los valores y pasarlos a items
  function handleSubmit(e) {
    e.preventDefault();
    setItems([...items, ...inputs]);
    setInputs([]); // limpiar inputs después de submit
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {inputs.map((input, index) => (
          <input
            key={index}
            type="text"
            value={input}
            onChange={(e) => handleChangeInput(index, e.target.value)}
            placeholder={`Item ${index + 1}`}
          />
        ))}

        <div>
          <button type="button" onClick={handleAddInput}>
            Add
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>

      <h3>Items confirmados:</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index+1}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
