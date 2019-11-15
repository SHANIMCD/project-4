import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import GymsIndex from './components/gyms/GymsIndex'
import HomePage from './components/common/Homepage'
import FrameworkTestPage from './components/common/FrameworkTestPage'

const App = () => (

  <main>
    <BrowserRouter>
      <Switch>
        <Route path="/gyms" component={GymsIndex} />
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





  