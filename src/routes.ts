import { Router } from 'express'
import UserController from './controllers/UserController'

const routes = Router()

// user routes
routes.get('/users', UserController.index)
routes.post('/users', UserController.store)
routes.get('/users/:id/show', UserController.show)
routes.post('/users/:id/update', UserController.update)
routes.post('/users/:id/delete', UserController.destroy)

export default routes
