# TaskFlow Vanilla: Pure JavaScript DOM & LocalStorage Task Manager

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-Semantic-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![TailwindCSS](https://img.shields.io/badge/Styling-Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Storage](https://img.shields.io/badge/Storage-HTML5_localStorage-blue?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)]()

**TaskFlow Vanilla** is an interactive, zero-dependency task and workflow management application engineered in **pure vanilla JavaScript (ES6+)**, **HTML5**, and **Tailwind CSS**. Built to master first-principles browser programming, it demonstrates direct DOM manipulation, event delegation, and browser persistence without relying on third-party frameworks or virtual DOM libraries.

---

## Architectural Highlights

| Dimension | Technical Implementation |
| :--- | :--- |
| **Runtime & Language** | Pure ECMAScript 6+ running natively in any modern browser engine |
| **DOM Engine** | Imperative DOM construction (`createElement`, `appendChild`, `classList`) with optimized tree injection |
| **Persistence Layer** | Synchronous browser `localStorage` serialization (`JSON.stringify` / `JSON.parse`) |
| **State Filtering** | Multi-view filtering (`All`, `In Progress`, `Completed`) with dynamic style toggling |
| **Interactive Modals** | Form-driven creation, inline attribute editing, and destructive delete confirmation modals |
| **Dependencies** | Zero external runtime JavaScript libraries — pure native web standards |

---

## Core Mechanics

### 1. Direct Imperative DOM Generation
Rather than relying on templating engines, the interface constructs nodes programmatically, wiring event listeners and styling directly to each task node:

```javascript
function createElement(task) {
    const divContainer = document.createElement("div");
    divContainer.classList.add("flex", "flex-col");

    // Dynamic styling based on task status
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("titleDiv", "w-4/5", task.status === "Completed" ? "hover:text-green-500" : "hover:text-blue-500");
    titleDiv.appendChild(document.createTextNode(task.title));

    // Inline action controls (Check, Delete, Edit)
    const checkDiv = document.createElement("div");
    checkDiv.setAttribute("onclick", "checkStatus(this)");
    // ...
}
```

### 2. State & Storage Synchronization
All state transitions (adding a task, toggling completion, inline edits, or deletions) trigger an atomic persistence cycle:

```javascript
function saveTasksToStorage() {
    localStorage.setItem("Tasks", JSON.stringify(Tasks));
}
```

---

## Features

- **Full Task Lifecycle**: Create, edit descriptions, toggle completion states, and delete tasks.
- **Defensive Confirmation**: Modal confirmation dialog before permanent deletion to prevent accidental data loss.
- **Real-Time Status Tabs**: Filter by `All`, `In Progress`, or `Completed` tasks with immediate view synchronization.
- **Offline First**: All tasks persist across browser restarts in local storage.

---

## Getting Started

### Prerequisites
A modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari). No installation or build steps required.

### 1. Clone the Repository

```bash
git clone https://github.com/iliass-wakkar/ToDo-list-JS-Study.git
cd ToDo-list-JS-Study
```

### 2. Run Directly

Open `index.html` in your favorite browser:

```bash
# On Windows
start index.html

# Or run a local HTTP server
python -m http.server 3000
```

---

## Author & Engineering Credits

- **Iliass Wakkar** — Full-Stack & Systems Engineer • [Portfolio](https://www.wakkar.net) • [GitHub](https://github.com/iliass-wakkar) • [LinkedIn](https://www.linkedin.com/in/iliass-wakkar-940233335/)

---

## License

This project is licensed under the MIT License.
