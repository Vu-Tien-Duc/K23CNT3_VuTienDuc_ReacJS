import React from 'react';
import VtdTodoList from './components/VtdTodoList'; // Importing the Todo list
import VtdThemeToggle from './components/VtdThemeToggle'; // Importing the Theme Toggle
import VtdThemeContext from './context/VtdThemeContext'; // Importing the Theme Context

function App() {
  return (
    <VtdThemeContext>
      <div>
        <h1>Mini Project: Quản lý công việc (To-Do List) với Hooks trong ReactJS</h1>
        <h4>
          Dự án này giúp bạn thực hành sử dụng{' '}
          <span className="highlight">useState</span>,{' '}
          <span className="highlight">useEffect</span>,{' '}
          <span className="highlight">useReducer</span>,{' '}
          <span className="highlight">useContext</span>,{' '}
          <span className="highlight">useRef</span> để tạo 1 ứng dụng quản lý công việc (To-Do List) đơn giản
        </h4>
        <hr />
        <h1>Quản lý công việc</h1>
        <VtdThemeToggle /> {/* Theme toggle button */}
        <VtdTodoList /> {/* Todo list */}
      </div>
    </VtdThemeContext>
  );
}

export default App;
