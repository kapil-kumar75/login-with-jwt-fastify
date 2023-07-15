import fastify from 'fastify'
import {userRegisterController, login} from '../controllers/userController.js'

const routes = async (fastify, options) => {
  fastify.post('/register', userRegisterController)
  fastify.post('/login', login)
}

export default routes
