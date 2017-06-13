import Router from 'koa-router'

const router = new Router()

router.get('/user', async ctx => {
  ctx.body = [{
    name: 'amy',
    age: 28
  }]
})

export default router
