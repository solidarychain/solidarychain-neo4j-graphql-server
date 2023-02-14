import { createServer } from 'http'
import { HTTP_SERVER_PORT } from './app'
import { yoga } from './yoga'

const server = createServer(yoga)
server.listen(HTTP_SERVER_PORT, () => {
  console.log(`Listening on http://localhost:${HTTP_SERVER_PORT}/graphql`)
})
