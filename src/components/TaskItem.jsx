import React from 'react';

function formatDueDate(dueDate) {
  if (!dueDate) return '';
  const d = new Date(dueDate);
  if (isNaN(d)) return dueDate;
  return d.toLocaleString();
}

export default function TaskItem({ task, onEdit, onDelete }) {
  return (
    <li className="govuk-!-margin-bottom-6 govuk-!-padding-4 govuk-!-background-grey-lighter" style={{ listStyle: 'none', border: '1px solid #b1b4b6', borderRadius: 4 }}>
      <h2 className="govuk-heading-m govuk-!-margin-bottom-2">{task.title}</h2>
      <dl className="govuk-summary-list govuk-!-margin-bottom-2">
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">Description</dt>
          <dd className="govuk-summary-list__value">{task.description || <span className="govuk-hint">No description</span>}</dd>
        </div>
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">Status</dt>
          <dd className="govuk-summary-list__value">{task.status}</dd>
        </div>
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">Due</dt>
          <dd className="govuk-summary-list__value">{formatDueDate(task.dueDate)}</dd>
        </div>
      </dl>
      <div className="govuk-button-group govuk-!-margin-top-2">
        <button
          className="govuk-button govuk-button--secondary"
          type="button"
          onClick={() => onEdit(task)}
        >
          Edit
        </button>
        <button
          className="govuk-button govuk-button--warning"
          type="button"
          onClick={() => onDelete(task.taskId)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
