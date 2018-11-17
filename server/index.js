const express = require("express")
const mongoose = require('mongoose');
const DB_URL = 'mongodb://127.0.0.1:27017'

mongoose.connect(DB_URL)
mongoose.connection.on('connected', function(){
  console.log('链接DB成功')
})

const User = mongoose.model('user', new mongoose.Schema({
  user: {type:String, require: true},
  age: {type:String, require: true},
}))

//创建APP
const app = express();
app.get('/data', function(req, res){
  User.find({}, (err, doc) => {
    return res.json(doc)
  })
})
app.listen(9093, function() {

})