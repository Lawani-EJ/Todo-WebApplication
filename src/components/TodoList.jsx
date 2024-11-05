// import React from 'react'

const TodoList = () => {
  return (
    <div>
      <h2>TODO</h2>
      <div>
                <input
                    type="text"
                    placeholder="Enter a task"
                    required
                    aria-label="Task text" />
                <button className="add-button" aria-label="Add task" >
                    Add
                </button>
            </div>
            <ol id="todo-list">
                <p>existing tasks will be shown here</p>
            </ol>
        </div>
  )
}

export default TodoList
