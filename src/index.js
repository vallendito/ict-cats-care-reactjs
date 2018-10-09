import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import './sass/main.scss';

import Home from './Home/Home';
import Adopt from './Adopt/Adopt';
class App extends Component {
  render() {
    return (
      // <BrowserRouter>
      //   <div>
      //   <Adopt />
      //     {/* <Route exact path="/" component={Home} />
      //     <Route path="/adopt" component={Adopt} /> */}
      //   </div>
      // </BrowserRouter>
      <div>
      <Home />
        {/* <Adopt /> */}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));