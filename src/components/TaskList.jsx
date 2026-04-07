import React from 'react';
import TaskItem from './TaskItem';

export default function TaskList({ tasks, onEdit, onDelete }) {
  if (tasks.length === 0) {
    return <p className="govuk-body">No tasks yet.</p>;
  }
  return (
    <ul className="govuk-list govuk-list--bullet govuk-!-padding-0">
      {tasks.map(task => (
        <TaskItem key={task.taskId} task={task} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </ul>
  );
}
