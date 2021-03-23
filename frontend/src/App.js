import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//components
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Genero from './components/Genero/Genero'
import Serie from './components/Serie/Serie'
import InfoSerie from './components/Serie/InfoSerie'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/generos" exact component={Genero} />
          <Route path="/series" exact component={Serie} />
          <Route path="/series/:id" exact component={InfoSerie} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
