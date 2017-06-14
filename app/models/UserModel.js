import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number
})

const UserModel = mongoose.model('User', UserSchema)

export default UserModel
