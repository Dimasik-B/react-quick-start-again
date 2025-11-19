import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const header = "Какое-то значение";
const firstName = "Дима";
const lastName = "Б.";
const items = ["Элемент 1", "Элемент 2", "Элемент 3", "Элемент 4", "Элемент 5", "Элемент 6"]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1>{header}</h1>
    <h1>{firstName} {lastName}</h1>
    <ul>
      <li>{items[0]}</li>
      <li>{items[1]}</li>
      <li>{items[2]}</li>
      <li>{items[3]}</li>
      <li>{items[4]}</li>
      <li>{items[5]}</li>
    </ul>
    <p>&copy; Авторские права мои {new Date().getFullYear()}</p>
  </div>

);

