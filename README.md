# Todo App

A simple and elegant Todo application built with React and JavaScript. This app allows users to add, view, and manage their tasks efficiently.

## Features

- Add new todo items
- View the list of todo items
- Mark todo items as done
- Remove todo items

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/) (which includes npm)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/todo-app.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd todo-app
    ```

3. **Install the dependencies:**

    ```bash
    npm install
    ```

### Running the App

To start the development server, run:

```bash
npm start
```

The app will be available at http://localhost:3000 in your web browser.

### Usage
## Adding a Todo
- Enter a task in the input field and click the "Add" button.
- The task will be added to the list of todos.
  
## Marking a Todo as Done
- Click the checkbox next to the task to mark it as done.
- The task will be visually differentiated to indicate completion.
  
## Removing a Todo
- Click the delete icon next to the task to remove it from the list.
  
## Code Structure

- `src/`
  - `components/`
    - `Form.jsx`: Contains the form component for adding new todos.
    - `TodoList.jsx`: Displays the list of todos.
    - `TodoItem.jsx`: Represents an individual todo item.
    - `footer.jsx`: represents the footer of the application
    - `Header.jsx`: the header of the application
    - `Todo.jsx`: the entire todolist
    - `.module.css`: css styles for components of the same name
  - `App.jsx`: Main component that renders Form and TodoList.
  - `main.jsx`: Entry point of the application.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any bug fixes or enhancements.


