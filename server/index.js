const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRouter = require('./user')

//创建APP
const app = express()

app.use(cookieParser())
app.use(bodyParser.json())

app.use('/user', userRouter)

// app.get('/', function(req, res) {
//   User.find({}, (err, doc) => {
//     return res.json(doc)
//   })
// })

app.listen(9093, function() {
  console.log('后台已经成功运行在9093端口')
})
