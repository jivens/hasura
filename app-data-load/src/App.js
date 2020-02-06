import React, { useState, useEffect } from 'react';

import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';

import AddTaskAndDatums from './data-load';
import './App.css';

function App() {

  const createApolloClient = (authToken) => {
    console.log(authToken)
    return new ApolloClient({
      link: new HttpLink({
        uri: 'https://annotaurus-lex-backend.herokuapp.com/v1/graphql',
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      }),
      cache: new InMemoryCache(),
    })
   }

   const idToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1VTXhSa0l4T1RWQ1FVSTVRelkwTmtZNFJUUTBPVFUwTmtJd01USTJOamc0TmpWRk9EQTNOdyJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6ImF1dGgwfDVlMTM5ZThlOWUyNDI4MGViNDg0MmMxNiJ9LCJuaWNrbmFtZSI6ImpvaG4ud2FnbmVyLml2ZW5zIiwibmFtZSI6ImpvaG4ud2FnbmVyLml2ZW5zQGdtYWlsLmNvbSIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci81MTM1MjVhNTEyYzZmODJkMmI2NjlhNzY5YmMwYzIxYz9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRmpvLnBuZyIsInVwZGF0ZWRfYXQiOiIyMDIwLTAyLTA2VDAxOjUzOjUwLjgwM1oiLCJlbWFpbCI6ImpvaG4ud2FnbmVyLml2ZW5zQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiaXNzIjoiaHR0cHM6Ly9hbm5vdGF1cnVzLWxleC5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NWUxMzllOGU5ZTI0MjgwZWI0ODQyYzE2IiwiYXVkIjoiYlFTelRCR1NTdzJsZ0xzeWNDZTdvSTViZWltT21rT2IiLCJpYXQiOjE1ODA5NTQwMzIsImV4cCI6MTU4MDk5MDAzMiwibm9uY2UiOiIzVn5lVWNaWGI4aWRMSkN-bWQzfnpKSzBGekt4R01iYmcyaThSNFJGLklrIn0.XnZg2GqB56wabmNFQtkKXzdxqH8m9UArSYOXZGhzFOUY0XupquBFUwkn0pJH7Am-PcOfxpyv16l4XOj-HTVL7GOAwi_3sGU74AjrdAXfuSJtGeRTjO5TSqewc_0cMZIsXXOwkg8r6w4lyK3kF4ELXoSzjcv2eqTM9aKdH2EtGVvvJd9dyETPxMxWtrWfJJ8fvytzAKZaI0NfOt8HyVPUwMjXYeyXDy880BU3Fv--oKltlK0My7u5OAzgXNy2YCrrP46v7nEESWn0oUhQCD1k_9isAaDF6gxSSraqKwxF7EtPPkWlE2S2tCTEnFA1YWpO0iVCwZDvhbEkTXa2pbVPlA"

   const client = createApolloClient(idToken);

   return (
     <ApolloProvider client={client}>
       <div>    
        <AddTaskAndDatums />
       </div>
     </ApolloProvider>
   )

}

export default App;
