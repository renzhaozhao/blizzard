import UserModel from '../models/UserModel'

export default {
  create: async ctx => {
    ctx.body = await UserModel.create({
      name: ctx.request.body.name,
      age: ctx.request.body.age
    })
  },

  list: async ctx => {
    ctx.body = await UserModel.find()
  },

  findOne: async ctx => {
    const user = await UserModel.findById(ctx.params.id)
    if (user) {
      ctx.body = user
    }
  },

  updateOne: async ctx => {
    const user = await UserModel.findByIdAndUpdate(ctx.params.id, ctx.request.body, {
      new: true,
      runValidators: true
    })
    if (user) {
      ctx.body = user
    }
  },

  deleteOne: async ctx => {
    const user = await UserModel.findByIdAndRemove(ctx.params.id)
    if (user) {
      ctx.body = {
        message: 'success',
        status: 200
      }
    }
  }
}
