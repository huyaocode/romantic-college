const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')

const _filter = { user_paw: 0, __v: 0, _id: 0 }
/**
 * 获取异性用户列表
 */
Router.get('/list', function(req, res) {
  const { userid } = req.cookies
  if (!userid) {
    return res.json({ code: 1 }) // 0 表示已经登陆
  }
  User.findOne({ _id: userid }, function(err, doc) {
    if (err) {
      return res.json({ code: 1, msg: '后端出错' })
    }
    if (doc) {
      const sex = (doc.sex === 'boy' ? 'girl' : 'boy');
      User.find({sex}, {..._filter, sex: 0}, function(err, doc) {
        return res.json(doc)
      })
    }
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
    if (!doc) {
      return res.json({ code: 1, msg: '账号不存在，请注册' })
    }
    if (doc.user_paw !== ownPsw) {
      return res.json({ code: 1, msg: '密码错误' })
    }
    //设置cookie
    res.cookie('userid', doc._id)

    return res.json({ code: 0, sex: doc.sex, needFillInfo: doc.major ? false: true })
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
 *  获取用户信息
 */
Router.get('/infos', function(req, res) {
  const { deanAccount } = req.query
  if (deanAccount) {
    User.findOne({ dean_accunt: deanAccount }, _filter, function(err, doc) {
      //设置cookie
      console.log('获取用户信息  userid', doc._id, doc)
      return res.json({ code: 0, data: doc })
    })
  } else {
    return res.json({ code: 1, msg: '请get deanAccount' })
  }
})

/**
 * 设置用户信息
 */
Router.post('/infos', function(req, res) {
  const { userid } = req.cookies
  let {
    deanAccount,
    username,
    entranceTime,
    major,
    hometown,
    signature
  } = req.body
  if(entranceTime) {
    entranceTime = entranceTime[0]
  }
  if(major) {
    major = major[0]
  }

  console.log('come',req.body)
  User.findOne({ dean_accunt: deanAccount }, (err, doc) => {
    if(err) {
      console.log('更新信息出错', err)
    }
    console.log('find', doc)
    if (doc._id == userid) {
      User.update(
        { dean_accunt: deanAccount },
        {
          user_name: username,
          entranceTime,
          major,
          hometown,
          signature
        },
        function(e, doc) {
          console.log(e, doc)
          if (e) {
            return res.json({ code: 1, msg: '后端出错' })
          } else {
            console.log('更新信息成功', doc)
            return res.json({ code: 0 })
          }
        }
      )
    } else {
      console.log(doc._id , userid, '没有cookie的操作')
      return res.json({ code: 1, msg: '没有cookie的操作' })
    }
  })
})

module.exports = Router
