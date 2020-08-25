import React, {useState, useEffect} from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import News from './pages/News';
import Videos from './pages/Videos';
import Resources from './pages/Resources';
import Error from './pages/Error';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

  return (
    <>
      <Navigation/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/news">
          <News isLoading={isLoading}/>
        </Route>
        <Route exact path="/videos" component={Videos}/>
        <Route exact path="/resources" component={Resources}/>
        <Route path="/" component={Error}/>
      </Switch>
    </>
  );
}

export default withRouter(App);
