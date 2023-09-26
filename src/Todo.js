import { useState } from 'react';
import './Todo.css'

const Todo = () => {
    const [task, setTask] = useState('');
    const [todos, setTodos] = useState([]);
    const [editingIndex, setEditingIndex] = useState(-1);
    const [progress, setProgress] = useState([]);
    
    const handleAdd = () => {
        if (task) {
            setTodos([...todos, task]);
            setProgress([...progress, 'Not Started']);
            setTask('');
        }
    };

    const handleDelete = (index) => {
        setTodos(todos.filter((todo, i) => i !== index));
        setProgress(progress.filter((p, i) => i !== index));
        if (index === editingIndex) {
            setEditingIndex(-1);
        }
    };

    const handleEdit = (index, newTask) => {
        setTodos(todos.map((todo, i) => (i === index ? newTask : todo)));
        setEditingIndex(-1);
    };

    const handleSave = (index, newTask) => {
        handleEdit(index, newTask);
    };

    const handleCancel = () => {
        setEditingIndex(-1);
    };

    const handleProgressChange = (index, newProgress) => {
        setProgress(progress.map((p, i) => (i === index ? newProgress : p)));
    };

    return (
        <div className='container'>
            <h2>Todo List</h2>

            <div className='ip'>
                <input placeholder='Enter your task' value={task} onChange={(e) => setTask(e.target.value)} />
                <button onClick={handleAdd}>Add Task</button>
            </div>
            <div className='tb'>
                <table>
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            <th>Progress</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((todo, index) => (
                            <tr key={index} className={`row ${progress[index]} random-color`}>
                                <td>
                                    {editingIndex === index ? (
                                        <input type='text' value={todo} onChange={(e) => setTodos(todos.map((t, i) => i === index ? e.target.value : t))} />) : (
                                        todo
                                    )}
                                </td>
                                <td>
                                    {editingIndex === index ? (
                                        <div>
                                            <button onClick={() => handleSave(index, todos[index])}>Save</button>
                                            <button onClick={handleCancel}>Cancel</button>
                                        </div>
                                    ) : (
                                        <button onClick={() => setEditingIndex(index)}>Edit</button>
                                    )}
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(index)}>Delete</button>
                                </td>
                                <td>
                                    <select value={progress[index]} onChange={(e) => handleProgressChange(index, e.target.value)}>
                                        <option value='Not Started'>Not Started</option>
                                        <option value='In Progress'>In Progress</option>
                                        <option value='Completed'>Completed</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Todo
