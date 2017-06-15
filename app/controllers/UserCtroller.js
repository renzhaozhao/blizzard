import UserModel from '../models/UserModel'

export default {
  create: async (ctx, next) => {
    try {
      ctx.body = await UserModel.create({
        name: ctx.request.query.name,
        age: ctx.request.query.age
      })
    } catch (err) {
      next(err)
    }
  },

  list: async (ctx, next) => {
    try {
      ctx.body = await UserModel.find()
    } catch (err) {
      next(err)
    }
  },

  findOne: async (ctx, next) => {
    try {
      const user = await UserModel.find({ _id: ctx.params.id })
      if (user.length) {
        ctx.body = user[0]
      } else {
        ctx.body = {
          massage: '没有找到'
        }
      }
    } catch (err) {
      next(err)
    }
  }
}
