const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')

const _filter = {user_paw: 0, __v: 0, _id:0}

Router.get('/list', function(req, res) {
  User.find({}, function(err, doc) {
    return res.json(doc)
  })
})

Router.get('/hascookie', function(req, res) {
  //用户cookie (登陆)
  const { userid } = req.cookies
  if (!userid) {
    return res.json({ code: 1 }) // 0 表示已经登陆
  }
  User.findOne({ _id: userid }, function(err, doc) {
    if (err) {
      return res.json({ code: 1, msg: '后端出错' })
    }
    if (doc) {
      return res.json({ code: 0 })
    }
  })
})

/**
 * 登陆
 */
Router.post('/login', function(req, res) {
  const { deanAccout, ownPsw } = req.body
  User.findOne({ dean_accunt: deanAccout }, function(err, doc) {
    console.log(doc)
    if (!doc) {
      return res.json({ code: 1, msg: '账号不存在，请注册' })
    }
    if (doc.user_paw !== ownPsw) {
      return res.json({ code: 1, msg: '密码错误' })
    }
    //设置cookie
    res.cookie('userid', doc._id)
    return res.json({ code: 0, sex: doc.sex })
  })
})

/**
 * 注册
 */
Router.post('/register', function(req, res) {
  console.log('注册', req.body)
  const { username, deanAccount, ownPassword, sex } = req.body
  User.findOne({ dean_accunt: deanAccount }, (err, doc) => {
    if (doc) {
      return res.json({ code: 1, msg: '该账号已存在' })
    }
    User.create(
      {
        user_name: username,
        dean_accunt: deanAccount,
        user_paw: ownPassword,
        sex: sex
      },
      function(e, doc) {
        if (e) {
          return res.json({ code: 1, msg: '后端出错' })
        } else {
          console.log('注册成功', doc)
          res.cookie('userid', doc._id)
          return res.json({ code: 0, infos: doc })
        }
      }
    )
  })
})

/**
 * 用户信息页面列表信息
 */
// Router.get('/features', function(req, res) {

// })


module.exports = Router
