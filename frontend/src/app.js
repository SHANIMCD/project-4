import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import '../src/style.scss'

import ClassIndex from './components/gyms/classes/classIndex'

import SearchBox from './components/common/SearchBox'
import GymsIndex from './components/gyms/GymsIndex'
import GymIndividual from './components/gyms/GymIndividual'
import HomePage from './components/common/Homepage'
import FrameworkTestPage from './components/common/FrameworkTestPage'

const App = () => (

  <main>
    <BrowserRouter>
      <Switch>
        <Route path="/gyms/:id" component={GymIndividual} />
        <Route path="/searchtestpage" component={SearchBox} />
        <Route path="/gyms/class" component={ClassIndex} />
        <Route path="/gyms/" component={GymsIndex} />
        <Route path="/test" component={FrameworkTestPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
    


  </main>


)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)





  