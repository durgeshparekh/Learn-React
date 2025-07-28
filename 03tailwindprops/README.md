# 📝 React Todo App with Tailwind CSS

A modern, responsive todo application built with React and styled with Tailwind CSS. This app demonstrates proper React component structure, state management, and beautiful UI design.

## ✨ Features

- **Add Todos**: Create new todos with priority levels (High, Medium, Low)
- **Edit Todos**: Click the edit button to modify existing todos
- **Complete Todos**: Mark todos as completed with a checkbox
- **Delete Todos**: Remove todos you no longer need
- **Filter Todos**: View All, Active, or Completed todos
- **Priority System**: Visual priority indicators with color coding
- **Local Storage**: Your todos persist between browser sessions
- **Statistics**: Track your productivity with completion statistics
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Beautiful UI**: Modern gradient design with smooth animations

## 🛠️ Tech Stack

- **React 19.1.0** - Modern React with latest features
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **Local Storage** - Persistent data storage

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── TodoForm.jsx    # Form for adding new todos
│   ├── TodoItem.jsx    # Individual todo item component
│   ├── TodoList.jsx    # List container for todos
│   ├── TodoFilter.jsx  # Filter buttons (All/Active/Completed)
│   └── TodoStats.jsx   # Statistics display component
├── hooks/              # Custom React hooks
│   └── useTodos.js     # Todo management logic
├── utils/              # Utility functions
│   └── todoUtils.js    # Helper functions for todos
├── App.jsx             # Main application component
├── App.css             # Custom CSS styles
├── index.css           # Global styles with Tailwind imports
└── main.jsx            # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:

   ```bash
   cd 03tailwindprops
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## 🎨 Design Features

- **Gradient Background**: Beautiful blue-to-purple gradient
- **Glass Morphism**: Semi-transparent containers with backdrop blur
- **Smooth Animations**: Hover effects and transitions
- **Color-Coded Priorities**:
  - 🔴 High Priority (Red)
  - 🟡 Medium Priority (Yellow)
  - 🟢 Low Priority (Green)
- **Responsive Layout**: Adapts to different screen sizes
- **Dark/Light Contrast**: Easy-to-read text on all backgrounds

## 💡 Usage

1. **Adding a Todo**: Type your task in the input field, select a priority, and click "Add Todo"
2. **Completing a Todo**: Click the checkbox next to any todo to mark it as complete
3. **Editing a Todo**: Click the edit icon to modify the todo text
4. **Deleting a Todo**: Click the trash icon to remove a todo
5. **Filtering**: Use the filter buttons to view specific sets of todos
6. **Bulk Actions**: Use "Mark All Complete" or "Clear Completed" for quick management

## 🔧 Customization

The app is highly customizable. You can:

- Modify colors in `tailwind.config.js`
- Add new priority levels in the components
- Extend the TodoItem component with more fields
- Add search functionality
- Implement categories or tags

## 📱 Responsive Design

The app is fully responsive and works great on:

- 📱 Mobile phones (320px+)
- 📱 Tablets (768px+)
- 💻 Laptops (1024px+)
- 🖥️ Desktop computers (1280px+)

## 🤝 Contributing

Feel free to contribute to this project by:

1. Forking the repository
2. Creating a feature branch
3. Making your changes
4. Submitting a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS approach
- Heroicons for the beautiful SVG icons+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
