import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import '../src/style.scss'

import ClassIndex from './components/gyms/classes/classIndex'
import Navbar from './components/common/Navbar'
import SearchBox from './components/common/SearchBox'
import GymsIndex from './components/gyms/GymsIndex'
import GymIndividual from './components/gyms/GymIndividual'
import HomePage from './components/common/Homepage'
import FrameworkTestPage from './components/common/FrameworkTestPage'
import Login from './components/auth/Login'

const App = () => (

  
  <BrowserRouter>
    <main>
      
      <Switch>
        <Route path="/gyms/:id" component={GymIndividual} />
        <Route path="/searchtestpage" component={SearchBox} />
        <Route path="/gyms/class" component={ClassIndex} />
        <Route path="/gyms/" component={GymsIndex} />
        <Route path="/test" component={FrameworkTestPage} />
        <Route path="/login" component={Login} />
        <Route path="/" component={HomePage} />

      </Switch>
    </main>
  </BrowserRouter>
    


  


)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)





  