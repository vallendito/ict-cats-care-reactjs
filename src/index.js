import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import './sass/main.scss';

import Home from './Home/Home';
import Adopt from './Adopt/Adopt';
import Details from './Adopt/components/Details';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        
        <div>

          <Route exact path="/" component={Home} />
          <Route path="/adopt" component={Adopt} />
          <Route path="/detail/:id_hewan" component={Details} />

        </div>

      </BrowserRouter>
      
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));