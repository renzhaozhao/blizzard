import Router from 'koa-router'

import UserController from '../controllers/UserCtroller'

const router = new Router()

router.get('/user', async ctx => UserController.list(ctx))
router.post('/user', async ctx => UserController.create(ctx))
router.get('/user/:id', async ctx => UserController.findOne(ctx))

export default router
