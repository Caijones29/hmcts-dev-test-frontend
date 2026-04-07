import React, { useState } from 'react';
import TaskForm from '../components/TaskForm';
import { createTask } from '../service/taskService.js';

export default function NewTaskPage() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAddTask = async (task) => {
    setLoading(true);
    setError(null);
    try {
      await createTask(task);
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="govuk-width-container">
      <h2 className="govuk-heading-l">Create New Task</h2>
      {success && <div className="govuk-notification-banner govuk-notification-banner--success"><div className="govuk-notification-banner__content">Task created successfully!</div></div>}
      {error && <div className="govuk-error-summary"><p>{error}</p></div>}
      {loading && <p className="govuk-body">Saving...</p>}
      <TaskForm onSubmit={handleAddTask} />
    </main>
  );
}
