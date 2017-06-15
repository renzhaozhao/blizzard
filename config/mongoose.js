import mongoose from 'mongoose'

const connectDatabase = uri => {

  return new Promise((resolve, reject) => {
    mongoose.connection
      .on('error', error => reject(error))
      .on('open', () => resolve(mongoose.connections[0]))
    mongoose.connect(uri)
  })
}

export default connectDatabase
