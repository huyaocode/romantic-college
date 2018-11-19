const DB_URL = 'mongodb://127.0.0.1:27017/romatic_college'
const mongoose = require('mongoose')
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function(){
  console.log('链接DB成功')
})

const models = {
  'user':{
    'user_name': {type: String, require: true},
    'user_paw': {type: String, require: true},
    //教务处账号
    'dean_accunt': {type: String, require: true},
    'sex': {type: String, require: true},
    //教务处密码
    'dean_paw': {type: String},
    //是否认证
    'is_auth': {type: Boolean},
    //专业
    'major': {type: String},
  }
}

for(let m in models) {
  mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
  getModel: function(name) {
    return  mongoose.model(name)
  }
}