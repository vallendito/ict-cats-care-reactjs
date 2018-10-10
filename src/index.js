import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import './sass/main.scss';

import Home from './Home/Home';
import Adopt from './Adopt/Adopt';
import ItemDetail from './Adopt/components/ItemDetails';
class App extends Component {
  render() {
    return (
      // <BrowserRouter>
      //   <div>
      //   {/* <Adopt /> */}
      //     <Route exact path="/" component={Home} />
      //     <Route path="/adopt/:id_hewan" component={Adopt} />
      //   </div>
      // </BrowserRouter>
      
        <Home /> 
        // <Adopt /> 
        
      
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));