import '../styles/App.css';
import {createBrowserRouter,RouterProvider} from'react-router-dom';


//Import files

import Home from"./home";
import Quiz from"./quiz";
import  Result from"./result";



//React Routes

const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/quiz',
    element:<Quiz/>
  },
  {
    path:'/result',
    element:<Result/>
  }
])
function App() {
  return (
    <div className="App">
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
