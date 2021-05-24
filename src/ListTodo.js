import React from 'react';
 
class ListTodo extends React.Component {
  render() {
    return(
      <div>
        <h1>TO DO LIST</h1>
        <input type="text" placeholder="tarefa" />
        <buton type="button">
          Adiciona tarefa
        </buton>
      </div>
    )
  }
}

export default ListTodo;