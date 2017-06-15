import UserModel from '../models/UserModel'

export default {
  create: async ctx => {
    ctx.body = await UserModel.create({
      name: ctx.request.query.name,
      age: ctx.request.query.age
    })
  },

  list: async ctx => {
    ctx.body = await UserModel.find()
  }
}
