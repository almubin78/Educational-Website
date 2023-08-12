import { RouterProvider } from 'react-router-dom';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import router from './components/router/router';

function App() {
  return (
    <div className="">
        <RouterProvider  router={router}>

        </RouterProvider>
    </div>
  );
}

export default App;
