import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from '@apollo/client'

import { onError } from '@apollo/link-error'
import { getDataFromTree } from '@apollo/client/react/ssr'

import withApollo from 'next-with-apollo'
// import paginationField from './paginationField'

function createClient({ headers, initialState }) {
  return new ApolloClient({
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
          graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
          );
        if (networkError)
          console.log(
            `[Network error]: ${networkError}. Backend is unreachable. Is it running?`
          )
      }),
      new HttpLink({
        uri: "http://localhost:4020/api", //process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
        fetchOptions: {
          credentials: 'include',
        },
        // pass the headers along from this request. This enables SSR with logged in state
        headers: { ...headers }, // , authorization: "asdf"
      }),
    ]),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            // TODO
            // allPosts: paginationField(),
          },
        },
      },
    }).restore(initialState || {}),
  });
}

export default withApollo(createClient, { getDataFromTree });