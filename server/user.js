const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')

Router.get('/list', function(req, res) {
  User.find({}, function(err, doc) {
    return res.json(doc)
  })
})

Router.get('/info', function(req, res) {
  //用户有没有cookie (登陆)
  return res.json({ code: 0 }) // 0 表示已经登陆
})

Router.post('/register', function(req, res) {
  console.log('注册',req.body);
  const { username, deanAccount, ownPassword, sex} = req.body
  User.findOne({dean_accunt: deanAccount}, (err, doc) => {
    console.log('doc', doc)
    if(doc) {
      return res.json({code: 1,  errMsg:'该账号已存在'})
    }
    User.create({
      user_name: username,
      dean_accunt: deanAccount,
      user_paw:ownPassword,
      sex:sex
    },function(e,doc) {
      if(e){
        return res.json({code: 1, errMsg: '后端出错'})
      }else {
        console.log('注册成功')
        return res.json({code: 0, infos: doc})
      }
    })
  })
  
})

module.exports = Router
