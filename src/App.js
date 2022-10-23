
import './App.css';
import { router } from './component/Routes/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import {RouterProvider} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';

function App() {
  return (
    <div className="">

      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
