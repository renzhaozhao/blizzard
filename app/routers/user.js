import Router from 'koa-router'

import UserController from '../controllers/UserCtroller'

const router = new Router()

router.get('/user', async ctx => UserController.list(ctx))
router.post('/user', ctx => UserController.create(ctx))

export default router
