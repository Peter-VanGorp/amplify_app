import Amplify, { Auth, API } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import React, { Component } from 'react';
import awsconfig from './aws-exports';
import '@aws-amplify/ui/dist/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      Your app here
    </div>
  );
}

export default withAuthenticator(App, true);