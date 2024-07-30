import { BrowserRouter, Route, Switch } from 'eact-router-dom';
import App from './app';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        {/* Add more routes here */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;