import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import pages
import Landing from './pages/Landing';
import Personal from './pages/Personal';
import Education from './pages/Education';
import Professional from './pages/Professional';
import Complete from './pages/Complete';
import Error from './pages/Error';

// import components
// import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route path='/personal'>
          <Personal />
        </Route>
        <Route path='/education'>
          <Education />
        </Route>
        <Route path='/professional'>
          <Professional />
        </Route>
        <Route path='/complete'>
          <Complete />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
