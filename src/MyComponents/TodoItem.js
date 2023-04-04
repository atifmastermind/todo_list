import React from 'react'
export const TodoItem = ({ todo, onDelete }) => {
  return (
    <>
      <div className="card mb-4">
        <h5 className="card-header">{todo.title}</h5>
        <div className="card-body">
          <p className="card-text">{todo.desc}</p>
        </div>
        <div className="card-footer">
          <button className="btn btn-sm" onClick={() => { onDelete(todo) }}><i class="fa fa-trash" aria-hidden="true"></i> Delete
          </button>
        </div>
      </div>
    </>
  )
}
