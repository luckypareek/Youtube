import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import { Provider } from 'react-redux';
import store from './Utils/Store';
import { RouterProvider, createBrowserRouter ,BrowserRouter} from 'react-router-dom';
//import Maincontainer from './Components/Maincontainer';
import VideoContainer from './Components/VideoContainer';
// import WatchPage from './Components/WatchPage';
// import SearchResults from './Components/SearchResults';
import { Suspense, lazy } from 'react';

const Maincontainer = lazy(()=>import("./Components/Maincontainer"))
const WatchPage = lazy(()=>import("./Components/WatchPage"))
const SearchResults=lazy(()=>import("./Components/SearchResults"))

export const appRouter=createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<Suspense> <Maincontainer/></Suspense>
    },
    {
      path:"watch",
      element:<Suspense><WatchPage/></Suspense>
    },
    {
      path:"search",
      element:<Suspense><SearchResults/></Suspense>
    },
    
  ]

  
}])


function App() {

  
  return (
    
    <Provider store={store}>
    <div className="App">
      
     
     <RouterProvider router={appRouter}/> 
    
     
     

     {/* -Header
     -Body
       -sidebar
           -menu
        -main component
          - button list
          -video container
             -video cards */}
    </div>
    </Provider>
  
  );
}

export default App;
