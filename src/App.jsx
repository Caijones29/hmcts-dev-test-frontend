import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import '../public/css/govuk-frontend.min.css';
import NewTaskPage from './pages/NewTaskPage';
import ViewTasksPage from './pages/ViewTasksPage';

export default function App() {
  return (
    <Router>
      <main className="govuk-width-container">
        <h1 className="govuk-heading-xl govuk-!-padding-top-6">Task Manager</h1>
        <nav className="govuk-!-margin-bottom-6">
          <Link className="govuk-link govuk-!-margin-right-4" to="/tasks">View &amp; Manage Tasks</Link>
          <Link className="govuk-link" to="/new">Create New Task</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ViewTasksPage />} />
          <Route path="/tasks" element={<ViewTasksPage />} />
          <Route path="/new" element={<NewTaskPage />} />
        </Routes>
      </main>
    </Router>
  );
}