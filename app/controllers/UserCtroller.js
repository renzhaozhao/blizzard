import UserModel from '../models/UserModel'

export default {
  test: () => 'test',
  create: async ctx => {
    ctx.body = await UserModel.create({
      name: ctx.request.body.name,
      age: ctx.request.body.age
    })
  },

  list: async ctx => {
    ctx.body = await UserModel.find()
  }
}
