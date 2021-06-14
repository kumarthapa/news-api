import React from 'react'
import NewsListing from './components/NewsListing'
import {NewsProvider} from './context/NewsProvider'
import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login'
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
//import Loader from "./components/Loader"
function App() {
  return (
   <>
   <Router>
   <NewsProvider>
   <Switch>
   <PrivateRoute path="/news" component={NewsListing}/>
   <Route path="/" component={Login}/>
   </Switch>
   </NewsProvider>
   </Router>
   </>
  );
}
export default App;
  //   <div style={{margin:'0px',padding:'50px 0', boxSizing:'border-box',backgroundColor:'#8080801a'}}>
  //   <NewsListing/>
  //  </div>