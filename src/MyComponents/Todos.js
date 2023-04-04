import React from 'react'
import { TodoItem } from "./TodoItem";
import "./todos.css"
export const Todos = (props) => {
  return (
    <>
      <div className="todosList">
        <div className="container">
          <div className="row">
            <div className="col col-lg-12">
              <h3 className="heading" >Todos List</h3>
              <div className="cardsArea style-9 scrollbar">
                {props.todos.length === 0 ? "No Todos to display" :
                  props.todos.map((todo) => {
                    return (
                      <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
