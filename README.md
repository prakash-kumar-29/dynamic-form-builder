# Dynamic Form Builder

A React-based dynamic form builder application that allows users to create, manage, and customize forms with drag-and-drop functionality.

**Live Demo**: [Dynamic Form Builder](https://dynamic-form-builder-web.vercel.app)

## Project Overview

This application provides an interactive interface for building and managing forms dynamically. It features a modern UI with support for various form field types, mobile responsiveness, and state management using Redux.

## Features

- **Dynamic Form Creation** - Build and customize forms on the fly
- **Multiple Field Types** - Support for text, checkbox, radio buttons, dropdowns, file inputs, and more
- **Template Fields** - Pre-built form templates for quick setup
- **Mobile Preview** - Real-time mobile view of your forms
- **Form Management** - Save, edit, and manage multiple forms
- **Redux State Management** - Centralized state for consistent data flow
- **Responsive Design** - Works seamlessly on desktop and mobile devices

## Tech Stack

- **React 18** - UI library
- **Redux** - State management
- **React Router DOM** - Client-side routing
- **React Icons** - Icon library
- **Sass** - CSS preprocessing
- **clsx** - Utility for constructing className strings

## Project Structure

```
src/
├── components/       # UI and form components
│   ├── UI/           # Reusable UI elements (Button, Dropdown, etc.)
│   └── common/       # Shared utility components
├── pages/            # Main page components
├── redux/            # State management (actions, reducers, store)
└── utils/            # Helper functions and templates
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd dynamic-form
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📜 Available Scripts

| Command         | Description                      |
| --------------- | -------------------------------- |
| `npm start`     | Runs the app in development mode |
| `npm run build` | Builds the app for production    |

## 🏗️ Build

```bash
npm run build
```

Builds the app for production to the `build` folder. The build is optimized and minified for best performance.
