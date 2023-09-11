import mongoose from 'mongoose'
import config from './config/index'
import app from './app'

async function boosrtap() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('🌎 Database is connected successfully')

    app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`)
    })
  } catch (err) {
    console.log('failed to connected database', err)
  }
}

boosrtap()
