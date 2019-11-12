const fastify = require('fastify')()

fastify.get('/', (req, reply) => {
  reply.send({ hello: 'world' })
})

fastify.listen(3000, err => {
  if (err) throw err
  const port = fastify.server.address().port
  console.log(`server listening on ${port}`)
})