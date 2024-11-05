// App.js
import React from 'react';

// function App() {
//   return (
//     <div>
//       <Welcome name="Ania" />
//       <Welcome name="Jan" />
//     </div>
//   );
// }

// export default App;


// App.js
import Button from './Button';

function App() {
  const sayHello = () => {
    alert("Cześć!");
  };

  return (
    <div>
      <Button handleClick={sayHello} />
    </div>
  );
}
export default App;