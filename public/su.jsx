// import React, { useState } from 'react';

// const TodoList = () => {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleAddTodo = () => {
//     if (inputValue.trim() !== '') {
//       setTodos([...todos, { id: Date.now(), text: inputValue }]);
//       setInputValue('');
//     }
//   };

//   const handleDeleteTodo = (todoId) => {
//     setTodos(todos.filter((todo) => todo.id !== todoId));
//   };

//   const handleEditTodo = (todoId, newText) => {
//     setTodos(
//       todos.map((todo) => {
//         if (todo.id === todoId) {
//           return { ...todo, text: newText };
//         }
//         return todo;
//       })
//     );
//   };



//   return (
//     <div>
//       <h2>Todo List</h2>
//       <input type="text" value={inputValue} onChange={handleInputChange} />
//       <button onClick={handleAddTodo}>Add Todo</button>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             <input type="text" value={todo.text} onChange={(e) => handleEditTodo(todo.id, e.target.value)} />
           
//             <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoList;

// // import { useState } from 'react';

// // const Todo = () => {
// //   const [task, setTask] = useState('');
// //   const [todos, setTodos] = useState([]);

// //   const handleAdd = () => {
// //     if (task.trim() !== '') {
// //       setTodos([...todos, task]);
// //       setTask('');
// //     }
// //   };

// //   const handleDelete = (index) => {
// //     setTodos(todos.filter((todo, i) => i !== index));
// //   };

// //   const handleEdit = (index, newTask) => {
// //     setTodos(todos.map((todo, i) => (i === index ? newTask : todo)));
// //   };

// //   return (
// //     <div>
// //       <h2>Todo List</h2>

// //       <div>
// //         <input placeholder='Enter your task' value={task} onChange={(e) => setTask(e.target.value)} />
// //         <button onClick={handleAdd}>Add Task</button>
// //       </div>

// //       <table>
// //         <thead>
// //           <tr>
// //             <th>Task</th>
// //             <th>Edit</th>
// //             <th>Delete</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {todos.map((todo, index) => (
// //             <tr key={index}>
// //               <td>{todo}</td>
// //               <td>
// //                 <input type='text' onChange={(e) => handleEdit(index, e.target.value)} />
// //               </td>
// //               <td>
// //                 <button onClick={() => handleDelete(index)}>Delete</button>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default Todo;
