import Router from 'koa-router'

import UserController from '../controllers/UserCtroller'

const router = new Router()

router.get('/user', UserController.list)
router.post('/user', UserController.create)
router.get('/user/:id', UserController.findOne)

export default router
