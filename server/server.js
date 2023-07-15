import Fastify from 'fastify'
import cors from '@fastify/cors'
import connectDB from './db/connection.js'
import userRouters from './routers/userRouters.js'

const fastify = Fastify({
  logger: true,
})

connectDB()

await fastify.register(cors, {
  origin: ['http://example.com', 'http://localhost:3000'], // Array of allowed origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Array of allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Array of allowed headers
})

fastify.register(userRouters, {prefix: '/api/v1/user'})

fastify.listen({port: 8080}, (err, address) => {
  if (err) throw err
  console.log(`Server is now listening on ${address}`)
})
