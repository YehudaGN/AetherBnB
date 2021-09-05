
import React from 'react';
import { AuthRoute } from '../util/route_util';
import LogInModalContainer from './session_form/login_modal_container';
import SignUpModalContainer from './session_form/signup_modal_container';


const App = () => (
  <div>
      <li>Hi there</li>
        <AuthRoute exact path="/login" component={LogInModalContainer} />
        <AuthRoute exact path="/signup" component={SignUpModalContainer} />
  </div>
);

export default App;