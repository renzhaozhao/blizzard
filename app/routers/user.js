import Router from 'koa-router'

import UserController from '../controllers/UserCtroller'

const router = new Router()

router.get('/user', UserController.list)
router.post('/user', UserController.create)
router.get('/user/:id', UserController.findOne)
router.post('/user/:id', UserController.updateOne)
router.post('/user/delete/:id', UserController.deleteOne)

router.get('/test', ctx => {
  ctx.body = ctx.request.query
})
router.post('/test', ctx => {
  ctx.body = ctx.request.body
})

export default router
