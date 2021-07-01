import { Router } from 'express'

import { authorRoutes } from './components/author'

const router = () => {
  const routes = new Router()

  routes.use('/author', authorRoutes())

  return routes
}

export default router
