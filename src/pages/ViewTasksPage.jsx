import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import { getTasks, updateTask as apiUpdateTask, deleteTask as apiDeleteTask } from '../service/taskService.js';

export default function ViewTasksPage() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getTasks()
      .then(setTasks)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const startEditTask = (task) => setEditingTask(task);

  const updateTask = async (updatedTask) => {
    if (!updatedTask.taskId) {
      setError('Cannot update: Task ID is missing.');
      setEditingTask(null);
      return;
    }
    try {
      setLoading(true);
      const savedTask = await apiUpdateTask(updatedTask);
      setTasks(tasks => tasks.map((task) => (task.taskId === savedTask.taskId ? savedTask : task)));
      setEditingTask(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      setLoading(true);
      await apiDeleteTask(taskId);
      setTasks(tasks => tasks.filter((task) => task.taskId !== taskId));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="govuk-width-container">
      <h2 className="govuk-heading-l">View & Manage Tasks</h2>
      {error && <div className="govuk-error-summary"><p>{error}</p></div>}
      {loading && <p className="govuk-body">Loading...</p>}
      {editingTask && (
        <TaskForm
          onSubmit={updateTask}
          editingTask={editingTask}
          onCancel={() => setEditingTask(null)}
        />
      )}
      {!editingTask && (
        <TaskList
            tasks={tasks}
            onEdit={startEditTask}
            onDelete={deleteTask}
        />
      )}
    </main>
  );
}
