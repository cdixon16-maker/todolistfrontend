import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateTodo from "./Components/create-todo.component";
import EditTodo from "./Components/edit.todo.component";
import TodosList from "./Components/todos-list.component";
import logo from "./Images/beach.jpeg";
class App extends Component {
  render() {
  return (
    <Router>
      <div className="container">


      <nav className="navbar navbar-expand-lg navbar-light bg-light my-auto justify-content-center">
        <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank" rel="noopener noreferrer">
          <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
        </a>
        <Link to="/" className="navbar-brand">Dixon Todo App</Link>
        <div className="Collapse nav-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Todos</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create Todo</Link>
              </li>
            </ul>
        </div>
      </nav>
      <Route path="/" exact component={TodosList} />
      <Route path="/edit/:id" component={EditTodo} />
      <Route path="/create" component={CreateTodo} />
      </div>
      </Router>
    );
  }
}

export default App;
