import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import { Provider } from 'react-redux';
import store from './Utils/Store';
import { RouterProvider, createBrowserRouter ,BrowserRouter} from 'react-router-dom';
import Maincontainer from './Components/Maincontainer';
import VideoContainer from './Components/VideoContainer';
import WatchPage from './Components/WatchPage';
import SearchResults from './Components/SearchResults';


export const appRouter=createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<Maincontainer/>
    },
    {
      path:"watch",
      element:<WatchPage/>
    },
    {
      path:"search",
      element:<SearchResults/>
    }
  ]

  
}])


function App() {

  
  return (
    
    <Provider store={store}>
    <div className="App">
      
     <Header/>
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
