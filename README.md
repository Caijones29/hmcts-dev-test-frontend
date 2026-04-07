# HMCTS Dev Test Frontend

Part 2 of the HMCTS Developer Challenge

This is a a GOV.UK-styled React + Vite application for managing tasks. This project has a basic UI to connect to the Java SpringBoot backend made in part 1 of the challenge, allowing users to create, view, update, and delete tasks.

## Features
- Create, view, update, and delete tasks
- GOV.UK Design System components and styles
- React Router for navigation
- API integration with the backend (Other part of this challenge available [here](https://github.com/Caijones29/hmcts-developer-challenge-backend))

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Backend API
This app expects a backend API (Spring Boot, see `/tasks` endpoints) running at `http://localhost:4000`. Adjust the API URL in `src/services/taskService.js` if needed.

## Folder Structure
```
hmcts-dev-test-frontend/
├── public/                # Static assets (GOV.UK CSS, images, fonts)
├── src/
│   ├── components/        # Reusable UI components (TaskForm, TaskList, TaskItem)
│   ├── pages/             # Route-level pages (NewTaskPage, ViewTasksPage)
│   ├── services/          # API and business logic (taskService.js)
│   ├── assets/            # App-specific images
│   ├── App.jsx            # Main app with routing
│   ├── main.jsx           # Entry point
│   └── ...
├── package.json
├── vite.config.js
└── README.md
```

## Usage
- **View & Manage Tasks:** `/tasks` (default route)
- **Create New Task:** `/new`
- Use the navigation links at the top to switch between pages.

## Customization
- Update GOV.UK styles in `public/css/govuk-frontend.min.css` as needed.
- Adjust API endpoints in `src/services/taskService.js` for your backend.
- Add more pages or components in their respective folders.

## Useful Links
- [GOV.UK Design System](https://design-system.service.gov.uk/)
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)

---

## Future Enhancements

- User login + authentication and authorization
- Task pagination and filtering
- Improved error handling, validation and notifications
- Unit and integration tests