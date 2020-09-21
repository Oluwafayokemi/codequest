import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, Header, Events, Event, About, Contact } from './components'

const App = () => {
  return (
    <Router>
      <Switch>
        <React.Fragment>
          <Route path='/' component={Header} />
          <Route exact path='/'>
            <>
              <Home />
              <Events />
              <About />
              <Contact />
            </>
          </Route>
          <Route exact path='/events' component={Events} />
          <Route exact path='/event' component={Event} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
        </React.Fragment>
      </Switch>
    </Router>
  )
}

export default App
