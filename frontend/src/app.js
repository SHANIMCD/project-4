import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import '../src/style.scss'

// import ClassIndex from './components/gyms/classes/classIndex'
// import Navbar from './components/common/Navbar'
// import SecureRoute from './components/common/SecureRoute'
import SearchBox from './components/common/SearchBox'
import GymsIndex from './components/gyms/GymsIndex'
import GymIndividual from './components/gyms/GymIndividual'
import HomePage from './components/common/Homepage'
import FrameworkTestPage from './components/common/FrameworkTestPage'
import Login from './components/auth/Login'
// import LoggedIn from './components/auth/LoggedIn'
import AddGymForm from './components/gyms/AddGymForm'


const App = () => (

  
  <BrowserRouter>
    <main>
      
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <SecureRoute path="/loggedin" component={LoggedIn} /> */}
        <Route path="/gyms/new" component={AddGymForm} />
        <Route path="/gyms/:id" component={GymIndividual} />
        <Route path="/searchtestpage" component={SearchBox} />
        <Route path="/gyms/" component={GymsIndex} />
        <Route path="/test" component={FrameworkTestPage} />
        <Route path="/login" component={Login} />
      </Switch>
    </main>
  </BrowserRouter>
    


  


)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)





  