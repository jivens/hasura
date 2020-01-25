import React from "react";

import Header from "./Header";
import TodoPrivateWrapper from "./Todo/TodoPrivateWrapper";
import TodoPublicWrapper from "./Todo/TodoPublicWrapper";
//import OnlineUsersWrapper from "./OnlineUsers/OnlineUsersWrapper";

import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';

import { useAuth0 } from "./Auth/react-auth0-spa";


const createApolloClient = (authToken) => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://annotaurus-lex-backend.herokuapp.com/v1/graphql',
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    }),
    cache: new InMemoryCache(),
  });
 };

const App = ({ idToken }) => {
  const { loading, logout } = useAuth0();
  if (loading) {
    return <div>Loading...</div>;
  }
  const client = createApolloClient(idToken);
  return (
    <ApolloProvider client={client}>
      <div>
        <Header logoutHandler={logout} />
        <div className="row container-fluid p-left-right-0 m-left-right-0">
          <div className="row col-md-12 p-left-right-0 m-left-right-0">
            <div className="col-md-4 sliderMenu p-30">
              <TodoPrivateWrapper />
            </div>
            <div className="col-md-8 sliderMenu p-30 bg-gray border-right">
              <TodoPublicWrapper />
            </div>
          </div>
        </div>
      </div>
    </ApolloProvider>
  );
};

/* <div className="col-md-3 p-left-right-0">
<div className="col-md-12 sliderMenu p-30 bg-gray">
  <OnlineUsersWrapper />
</div>
</div> */

export default App;
