import React from 'react';
 
class ListTodo extends React.Component {


clickChange ({event}) {
  event.setState()
}

  render() {
    return(
      <div>
        <h1>TO DO LIST</h1>
        <input type="text" placeholder="tarefa" />
        <button type="button">
          Adiciona tarefa
        </button>
      </div>
    )
  }
}

export default ListTodo;