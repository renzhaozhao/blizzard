import Router from 'koa-router'

import UserController from '../controllers/UserCtroller'

const router = new Router()

router.get('/user', async ctx => UserController.list(ctx))
router.post('/user', ctx => UserController.create(ctx))

router.get('/test', ctx => {
  ctx.body = ctx.request
})

export default router
