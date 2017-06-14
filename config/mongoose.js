import mongoose from 'mongoose'

import config from './config'

const db = () => {
  const connectDB = mongoose.connect(config.mongodb)

  return connectDB
}

export default db
