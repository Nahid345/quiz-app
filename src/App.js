
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Satatistic from './components/Sataistic/Satatistic';
import SingleQuiz from './components/SingleQuiz/SingleQuiz';
import Tutorials from './components/Tutorials/Tutorials';
import Main from './Layout/Main';

function App() {
  const router =createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/tutorials',
          element:<Tutorials></Tutorials>
        },
      {
        path:'/quiz/:id',
        loader: async({params})=>{
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
        },

        element: <SingleQuiz></SingleQuiz>
      },{
        path:'/statistic',
        element: <Satatistic></Satatistic>
      }

      
      ]
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
