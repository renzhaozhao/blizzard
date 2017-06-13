import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import session from 'koa-session'
import views from 'koa-views'
import convert from 'koa-convert'
import serve from 'koa-static'
import finalHandler from './lib/middlewares/finalHandler'
import index from './routers'
import user from './routers/user'

const app = new Koa()

app.use(finalHandler())
app.use(views(`${__dirname}/views`))
app.use(logger())
app.use(bodyParser())
app.keys = ['some secret hurr']
app.use(convert(session(app)))
app.use(serve(__dirname + '/public'))

app.use(index.routes(), index.allowedMethods())
app.use(user.routes(), user.allowedMethods())

export default app
