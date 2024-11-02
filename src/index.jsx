import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import './index.css';
import Homework02 from './components/homework/Homework02';
// import funkcji komponenta
import Lesson02 from './lessons/lesson_02/Lesson02';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // pusty teg jest potrzebny aby połączyć kilka komponentów w jeden
<> 
    <App />
{/* wywołanie komponenta react */}
{/* samozakrywający się tag z nazwą funkcji komponenta,  для возврата нескольких компонентов без добавления лишней обертки в DOM. */}

    <Lesson02/>
    <Homework02 />
</>
);
// pusty tag <> to fragment react
//używamy go aby zwrócić kilka komponentów-dzieci do rodzica
