var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//CONECTING DB// APP CONFI
mongoose.connect('mongodb+srv://Khoa21donga:Khoa21dongaKhoa21dongaKhoa21donga@cluster0.o9ivn6p.mongodb.net/test2?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false 
});

// create collection

let lopSchema = mongoose.Schema({
  EnableFCM: {
    type: String,
  },
  Avatar: {
    type: String,
  },
  Banner: {
    type: String,
  },
  Fullname: {
    type: String,
  },
  TypeUser: {
    type: String,
  },
  IdProvince: {
    type: String,
  },
});

let Lop = mongoose.model('Lop', lopSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  lop.find({}, (error, data)=>{
      console.log('User2', data);
      res.render('index', {user2:data});
  });
});

// form add
router.get('/form-add', function (req, res, next){
   res.render('from-add', {});
});

router.post('/add', function(req, res, next){
 User2.create(req,body);
});

module.exports = router;
