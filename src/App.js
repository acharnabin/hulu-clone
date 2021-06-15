import React from 'react'
import { Route,Switch } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Nav from './Components/Nav'
import MovieList from './Components/MovieList'
import Home from './Components/Home'
const App = () => {
 

  return (
    <div className="app">
      <Header/>
      <Nav/>
      
      {
        <Switch>
        
          <Route path='/category/:id' component={MovieList} />
          <Route exact path='/' component={Home} />
        </Switch>
        
      }
    </div>
  )
}

export default App
