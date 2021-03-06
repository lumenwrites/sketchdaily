// Integrating ApolloServer with Express (so that I can use cookie-parser)
// https://www.apollographql.com/docs/apollo-server/integrations/middleware/#applying-middleware
import express from 'express'
import cookieParser from 'cookie-parser'
import { ApolloServer } from 'apollo-server-express'
import { createContext } from './apollo/context'
import { schema } from './nexus/nexusSchema'

import 'dotenv/config'
const { PORT, CLIENT_URL } = process.env


const app = express();
app.use(cookieParser())

const server = new ApolloServer({
  schema,
  context: createContext,
})

server.applyMiddleware({
  app,
  cors: {
    origin: true,
    credentials: true
  },
})

app.listen({ port: PORT }, () => {
  console.log(`Server running at http://localhost:${PORT}${server.graphqlPath}`);
})
