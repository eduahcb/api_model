import App from './app'
import Connection from './config/connection'

const startServer = async () => {
  const connection = new Connection()

  // start connection
  await connection.create()

  // start server
  const app = new App().init()

  const port = 3000

  app.listen(port, () => {
    console.log(`server is running on port ${port}`)
  })
}

startServer()
