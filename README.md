# 📝 My To-Do List App

Welcome to **My To-Do List App** — a simple, responsive, and beginner-friendly task management application built with **HTML, CSS, and JavaScript**.

The project was created to demonstrate the practical use of **JavaScript DOM manipulation, event handling, local storage, responsive design, and basic CRUD-style task operations** in a browser-based application.

The main focus of the project is to create a clean and user-friendly interface while keeping the implementation simple and easy to understand.

---

## 🌐 Live Demo

🚀 **View the live To-Do List App:**

```text
https://benbash.github.io/Codveda-Internship/
```

---

## 🖥️ About the Project

**My To-Do List App** is a browser-based task management application that allows users to create and manage their daily tasks.

Unlike applications that depend on a backend server or database, this project uses the browser's **Local Storage API** to save tasks. This means that tasks remain available even when the page is refreshed or the browser is reopened.

The application provides the following functionality:

* ➕ **Add Tasks** — Create new tasks using the task input form
* ✅ **Complete Tasks** — Mark tasks as completed using a checkbox
* 🗑️ **Delete Tasks** — Remove tasks from the list
* 💾 **Save Tasks** — Store tasks in the browser's local storage
* 🔄 **Persistent Data** — Retrieve saved tasks when the application loads
* 📊 **Task Counter** — Display the current number of tasks
* 📱 **Responsive Design** — Adapt the interface to different screen sizes

---

## 🧰 Technologies Used

* **HTML5** — Used to structure the application using semantic HTML elements
* **CSS3** — Used for styling, layout, spacing, and visual design
* **JavaScript** — Used to implement the application's functionality
* **DOM Manipulation** — Used to dynamically create, update, and remove tasks
* **Local Storage** — Used to persist tasks in the browser
* **CSS Flexbox** — Used for layout and alignment
* **Media Queries** — Used to make the application responsive
* **Git & GitHub** — Used for version control and project management
* **GitHub Pages** — Used for deployment and hosting

---

## ✨ Features

* ✅ Add new tasks
* ✅ Mark tasks as completed
* ✅ Delete tasks
* ✅ Store tasks in browser local storage
* ✅ Retrieve tasks after refreshing the page
* ✅ Display the number of tasks
* ✅ Empty-state message when there are no tasks
* ✅ Responsive design for desktop, tablet, and mobile devices
* ✅ Simple and clean user interface
* ✅ Beginner-friendly JavaScript implementation
* ✅ Keyboard-friendly task input
* ✅ Accessible button labels
* ✅ Separate HTML, CSS, and JavaScript files

---

## 📋 How the Application Works

The application follows a simple process:

### 1. Adding a Task

The user enters a task into the input field and clicks **Add Task**.

JavaScript creates a task object containing:

```javascript
{
    id: Date.now(),
    title: "Learn JavaScript",
    completed: false
}
```

The new task is then added to the tasks array and saved to Local Storage.

---

### 2. Completing a Task

Each task has a checkbox.

When the checkbox is selected:

* The task's `completed` value changes to `true`
* The completed styling is applied
* The updated task list is saved to Local Storage

When the checkbox is unchecked, the task is marked as incomplete again.

---

### 3. Deleting a Task

Each task has a delete button.

When the delete button is clicked, JavaScript removes the selected task from the tasks array and updates Local Storage.

---

### 4. Saving Tasks

The application uses:

```javascript
localStorage.setItem("tasks", JSON.stringify(tasks));
```

to save the task list in the browser.

When the application loads, the saved tasks are retrieved using:

```javascript
JSON.parse(localStorage.getItem("tasks")) || [];
```

This allows tasks to remain available after refreshing the page.

---

## 💾 Local Storage Implementation

Local Storage was selected because this project is a client-side application and does not require a backend server or database.

The application stores the tasks under the key:

```text
tasks
```

The data is stored as JSON because Local Storage stores information as strings.

For example:

```json
[
    {
        "id": 1755555555555,
        "title": "Complete my assignment",
        "completed": false
    }
]
```

This provides a simple way to persist the user's tasks directly in the browser.

---

## 📂 Project Structure

```text
todo-list/
│
├── index.html
├── style.css
├── script.js
│
└── README.md
```

### File Description

**`index.html`**

Contains the structure of the To-Do List application, including:

* Application heading
* Task input
* Add Task button
* Task list
* Task counter
* Empty-state message

**`style.css`**

Contains the visual design and responsive layout of the application.

**`script.js`**

Contains the application's functionality, including:

* Adding tasks
* Displaying tasks
* Updating task completion status
* Deleting tasks
* Saving tasks to Local Storage
* Loading saved tasks

**`README.md`**

Contains the project documentation and information about the application.

---

## 🚀 Getting Started

To run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/benbash/Codveda-Internship/tree/level-2-task-2
```

### 2. Navigate into the project folder

```bash
cd todo-list
```

### 3. Open the project

Open `index.html` directly in your browser, or use **Live Server** in Visual Studio Code for a better development experience.

No Node.js, Express server, database, or additional dependencies are required.

---

## 📱 Responsive Design

The application was designed to provide a consistent and user-friendly experience across different screen sizes.

The layout adapts to:

* 💻 Desktop computers
* 💻 Laptops
* 📟 Tablets
* 📱 Mobile phones

CSS media queries are used to adjust the layout of the task form and application container on smaller screens.

For example, on mobile devices, the task input and **Add Task** button are displayed vertically to make them easier to use.

---

## 🎨 CSS Implementation

CSS was used to create a simple and professional interface while keeping the styling beginner-friendly.

The application uses:

* CSS Flexbox
* Responsive spacing
* Rounded corners
* Button hover effects
* Task completion styling
* Responsive typography
* Media queries
* Box shadows

Flexbox is used in areas such as the task form and task items.

For example:

```css
.task-form {
    display: flex;
    gap: 10px;
}
```

This allows the input field and button to remain properly aligned.

---

## 🧠 JavaScript Implementation

JavaScript is responsible for making the application interactive.

The main functions include:

### `saveTasks()`

Saves the current tasks to Local Storage.

### `displayTasks()`

Displays the tasks dynamically on the webpage.

### `deleteTask()`

Removes a selected task from the task list.

### Form Submit Event

Handles the creation of new tasks.

### Checkbox Change Event

Updates whether a task is completed or incomplete.

These features demonstrate basic JavaScript concepts such as:

* Variables
* Arrays
* Objects
* Functions
* Event listeners
* Conditional statements
* Array methods
* DOM manipulation
* Local Storage

---

## 🎯 Purpose

The main goal of this project was to:

* Understand how JavaScript works with HTML
* Practice DOM manipulation
* Learn how to handle user events
* Understand how arrays and objects can be used to manage data
* Learn how to use Local Storage
* Practice creating responsive interfaces
* Improve HTML and CSS skills
* Build a functional browser-based application
* Understand how client-side applications work

This project also demonstrates my ability to take fundamental web development concepts and combine them into a functional and user-friendly application.

---

## 📚 What I Learned

Through this project, I gained practical experience with:

* Creating a structured HTML document
* Styling web applications with CSS
* Using CSS Flexbox
* Creating responsive layouts
* Working with JavaScript arrays and objects
* Manipulating the DOM
* Creating and responding to user events
* Creating dynamic HTML elements with JavaScript
* Using `localStorage`
* Converting JavaScript objects to JSON
* Converting JSON back to JavaScript objects
* Updating and deleting data
* Organizing a project into separate files
* Testing applications across different screen sizes
* Deploying a static website using GitHub Pages

---

## 🔒 Data Storage

This application does not use a backend server or external database.

All task information is stored locally in the user's browser using **Local Storage**.

This means:

* Tasks are stored only on the user's device/browser
* Tasks are not uploaded to a server
* Clearing browser storage will remove the saved tasks
* Tasks are not automatically available on another device or browser

This approach is suitable for a simple client-side To-Do List application.

---

## 📬 Contact

If you have any questions, feedback, or suggestions about this project, feel free to connect with me through my professional profiles.

You can also explore my other web development projects through my portfolio.

---

## ⭐ Acknowledgements

This project was created as part of my continuous learning and practical web development journey and as part of the web development task assigned to me during my internship at **Codveda Technologies**.

The project provided an opportunity to practice the fundamentals of HTML, CSS, and JavaScript by building a functional application from scratch.

If you find the project useful or interesting, feel free to ⭐ **star the repository** and explore the code.

---

## 📄 License

This project was created for **educational and portfolio purposes**.

The source code is available for learning and demonstration purposes.

---

## 👨‍💻 Author

**Bash Benshak Haruna**

Web Developer | Backend Developer | MERN Stack Developer

GitHub: `https://github.com/benbash`

---
