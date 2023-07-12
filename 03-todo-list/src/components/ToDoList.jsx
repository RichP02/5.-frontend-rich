import { useState } from 'react'

const ToDoList = () => {
  // 1: Los estados de React sirven para guardar informacion que se va a utilizar en el componente.
  // Esta informacion tienen la particularidad de que se actualiza automaticamente la vista cuando cambia.

  const [inputValue, setInputValue] = useState('')

  return (
    <>
      <h1>Lista de Taredas</h1>
      {/* 2: Una forma comun de trabajar con inputs en Reacts, es usar el evento onChange para guardar informacion en el estado apenas es teclado. La informaicon de un input la tendra event.target.value */}
      <input
        type='text'
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />

      <button>Agregar</button>
      <ul>
        <li>Item 1<button>Eliminar</button></li>
        <li>Item 2<button>Eliminar</button></li>
        <li>Item 3<button>Eliminar</button></li>
      </ul>
    </>
  )
}

export default ToDoList
