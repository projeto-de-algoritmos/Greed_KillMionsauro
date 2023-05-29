import { RouterProvider } from 'react-router-dom';
import Router from './Routes';
import './App.css';


function App() {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
