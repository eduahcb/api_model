import { Router } from 'express'

import AuthorController from './author.controller'
import authorRequestValidation from './author.validator'

const router = () => {
  const authorController = new AuthorController()

  const routes = new Router()

  routes.post('/', authorRequestValidation, authorController.create)

  return routes
}

export default router
