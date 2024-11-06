import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import Homework02 from './components/homework/Homework02';
// import funkcji komponenta
// import Lesson02 from './lessons/lesson02/Lesson02';
import Lesson04 from './lessons/lesson04/Lesson04';
import Homework04 from './components/homework/Homework04';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // pusty teg jest potrzebny aby połączyć kilka komponentów w jeden
<> 
    {/* <Lesson01 /> */}
{/* wywołanie komponenta react */}
{/* samozakrywający się tag z nazwą funkcji komponenta,  для возврата нескольких компонентов без добавления лишней обертки в DOM. */}

    {/* <Lesson02/> */}
    {/* <Homework02 /> */}
    {/* <Homework03 /> */}
    <Lesson04/>
    <Homework04 />

</>
);
// pusty tag <> to fragment react
//używamy go aby zwrócić kilka komponentów-dzieci do rodzica
