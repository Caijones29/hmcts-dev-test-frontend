const API_URL = 'http://localhost:4000/tasks';

export async function getTasks() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Unable to fetch tasks');
  return res.json();
}

export async function createTask(task) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
  if (!res.ok) throw new Error('Error creating task');
  return res.json();
}

export async function updateTask(task) {
  const res = await fetch(`${API_URL}/${task.taskId}`, {
    method: 'PATCH', // Use PATCH as per backend
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
  if (!res.ok) throw new Error('Failed to update task');
  if (res.status === 204) return task;
  return res.json();
}

export async function deleteTask(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  });
  if (!res.ok) throw new Error('Failed to delete task');
  return true;
}
