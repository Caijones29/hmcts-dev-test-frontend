import React, { useState, useEffect } from 'react';

export const statusOptions = [
  { value: 'TODO', label: 'To Do' },
  { value: 'IN_PROGRESS', label: 'In Progress' },
  { value: 'DONE', label: 'Done' },
];

export default function TaskForm({ onSubmit, editingTask, onCancel }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('TODO');
  const [dueDate, setDueDate] = useState(''); // yyyy-MM-ddTHH:mm

  useEffect(() => {
    if (editingTask) {
      if (title !== (editingTask.title || '')) setTitle(editingTask.title || '');
      if (description !== (editingTask.description || '')) setDescription(editingTask.description || '');
      if (status !== (editingTask.status || 'TODO')) setStatus(editingTask.status || 'TODO');
      if (dueDate !== (editingTask.dueDate ? editingTask.dueDate.slice(0, 16) : '')) setDueDate(editingTask.dueDate ? editingTask.dueDate.slice(0, 16) : '');
    } else {
      if (title !== '') setTitle('');
      if (description !== '') setDescription('');
      if (status !== 'TODO') setStatus('TODO');
      if (dueDate !== '') setDueDate('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !status || !dueDate) return;
    const payload = {
      title: title.trim(),
      description: description.trim(),
      status,
      dueDate: dueDate + ':00', // ensure seconds for LocalDateTime
    };
    if (editingTask && editingTask.taskId !== undefined && editingTask.taskId !== null) {
      payload.taskId = editingTask.taskId;
    }
    console.log('TaskForm handleSubmit payload:', payload);
    onSubmit(payload);
    setTitle('');
    setDescription('');
    setStatus('TODO');
    setDueDate('');
  };

  return (
    <form className="govuk-form-group govuk-!-padding-6 govuk-!-margin-bottom-6 govuk-!-background-grey-lighter" onSubmit={handleSubmit} style={{ borderRadius: 8, border: '1px solid #b1b4b6', maxWidth: 800 }}>
      <div className="govuk-!-margin-bottom-5">
        <label className="govuk-label govuk-label--m" htmlFor="task-title">Task Title</label>
        <input
          className="govuk-input"
          id="task-title"
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="govuk-!-margin-bottom-5">
        <label className="govuk-label govuk-label--m" htmlFor="task-desc">Description</label>
        <textarea
          className="govuk-textarea"
          id="task-desc"
          value={description}
          onChange={e => setDescription(e.target.value)}
          rows={3}
        />
      </div>
      <div className="govuk-!-margin-bottom-5">
        <label className="govuk-label govuk-label--m" htmlFor="task-status">Status</label>
        <select
          className="govuk-select"
          id="task-status"
          value={status}
          onChange={e => setStatus(e.target.value)}
          required
        >
          {statusOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
      <div className="govuk-!-margin-bottom-6">
        <label className="govuk-label govuk-label--m" htmlFor="task-due-date">Due Date</label>
        <input
          className="govuk-input"
          id="task-due-date"
          type="datetime-local"
          value={dueDate}
          onChange={e => setDueDate(e.target.value)}
          required
          min={new Date().toISOString().slice(0, 16)}
        />
      </div>
      <div className="govuk-button-group govuk-!-margin-top-4">
        <button className="govuk-button" type="submit">
          {editingTask ? 'Update Task' : 'Add Task'}
        </button>
        {editingTask && (
          <button className="govuk-button govuk-button--secondary" type="button" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
