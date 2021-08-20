import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import userProfile from './pages/userprofile';
import roverProfile from './pages/rover';
import feed from './pages/feed';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={roverProfile} />
          <Route exact path='/userprofile' component={userProfile} />
          <Route exact path='/feed' component={feed} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
