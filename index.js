const Koa = require('koa')

let app = new Koa()

const static = require('koa-static')

const path = require('path')

const router = require('koa-router')()

const query = require('./db/index')

app.use(static(path.join(process.cwd(), './publish/')))

app.use(router.routes())

app.use(router.allowedMethods())

router.get('/userList', async(ctx) => {
    let data = await query()
    ctx.body = {
        code: 1,
        data
    }
})

app.listen(3000, () => {
    console.log('服务启动成功')
})