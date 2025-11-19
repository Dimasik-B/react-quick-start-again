import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const header = "Какое-то значение";
const firstName = "Дима";
const lastName = "Б.";
const items = ["Элемент 1", "Элемент 2", "Элемент 3", "Элемент 4", "Элемент 5", "Элемент 6"]
const getRandom = () => {
  return Math.floor(Math.random() * 10);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1>{header}</h1>
    <h1>{firstName} {lastName}</h1>
    <ul>
      {
        // items.map(item => (<li>{item}</li>))
        Array.from({ length: 5 }, (_, index) => <li>Item [{getRandom() % 2 === 0 ? 'EVEN' : 'ODD'}]</li>)
      }
    </ul>
    <p>&copy; Авторские права мои {new Date().getFullYear()}</p>
  </div>

);

