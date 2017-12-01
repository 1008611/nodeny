const models = require('./db');
const express = require('express');
const router = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 创建账号接口
router.post('/api/login/createAccount', (req, res) => {
  // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
  let newAccount = new models.Login({
    account: req.body.account,
    password: req.body.password
  });
  // 保存数据newAccount数据进mongoDB
  newAccount.save((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json({code: 200, data: data, msg: 'create cussess'});
    }
  });
});
// 获取已有账号接口
router.get('/api/login/getAccount', (req, res) => {
  // 通过模型去查找数据库
  models.Login.find({}, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json({code: 200, data: data});
    }
  });
});

// post 文章
router.post('/api/admin/article', (req, res) => {
  let Article = new models.Articles({
    title: req.body.title,
    content: req.body.input,
    state: req.body.state,
  })
  Article.save((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json({code: 200, data: data});
    }
  });
});

// get 文章
router.get('/api/admin/article', (req, res) => {
  models.Articles.find({}, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json({code: 200, data: data});
    }
  });
});

// 操作 文章
router.get('/api/admin/:article_id', (req, res) => {
  models.Articles.findById(req.params.article_id, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json({code: 200, data: data,message:'获取成功'});
    }
  });
});
// 操作 文章
router.delete('/api/admin/:article_id', (req, res) => {
  models.Articles.remove({_id: req.params.article_id}, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json({code: 200, data: data,message:'删除成功'});
    }
  });
});

module.exports = router;
