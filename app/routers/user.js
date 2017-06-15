import Router from 'koa-router'

import UserController from '../controllers/UserCtroller'

const router = new Router()

router.get('/user', async (ctx, next) => UserController.list(ctx, next))
router.post('/user', async (ctx, next) => UserController.create(ctx, next))
router.get('/user/:id', async (ctx, next) => UserController.findOne(ctx, next))

export default router
