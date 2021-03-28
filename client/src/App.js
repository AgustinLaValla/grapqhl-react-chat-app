import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql/apolloSetup';
import Chat from './pages/Chat/Chat';
import Login from './pages/Login/Login';
import './App.css';

const UserContext = React.createContext();

function App() {
  const [user, setUser] = React.useState('');
  return (
    <Router>
      <Switch>
        <ApolloProvider client={client}>
          <UserContext.Provider value={{ user, setUser }}>
            <div className="app">
              <Switch>
                <Route exact path="/" component={Chat} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </div>
          </UserContext.Provider>
        </ApolloProvider>
      </Switch>
    </Router>
  );
}


export default App;

export const useUserProvider = () => React.useContext(UserContext);