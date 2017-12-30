const models = require('./db');
const express = require('express');
const router = express.Router();
const moment = require('moment')

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 检查用户名是否存在
router.post('/api/login/checkAccount', (req, res) => {
  //查询是否应经存在
  models.Login.findOne({account: req.body.name}, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      if (data == null || data == undefined) {
        res.json({code: 200, data: '', canUse: true, msg: '可以使用该用户名'});
      } else {
        res.json({code: 200, data: data, canUse: false, msg: '该用户名已经存在'});
      }
    }
  })

});

// 创建账号接口
router.post('/api/login/createAccount', (req, res) => {
  // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
  let newAccount = new models.Login({
    account: req.body.name,
    password: req.body.password
  });

  // 保存数据newAccount数据进mongoDB
  newAccount.save((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json({code: 200, data: data, success: true, msg: 'create cussess'});
    }
  });


});
// 登录接口  数据库中进行查找
router.post('/api/login/getLogin', (req, res) => {
  // 通过模型去查找数据库
  let loginData = {
    account: req.body.name,
    password: req.body.password
  }
  models.Login.find(loginData, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      if (data == '') {
        res.json({code: 200, data: data, success: false, msg: 'login error'});
      } else {
        res.json({code: 200, data: data, success: true, msg: 'login success'});
      }
    }
  });
});

// 获取 所有的 注册人员信息
router.post('/api/login/getAccount', (req, res) => {
  // 通过模型去查找数据库
  models.Login.find({}, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json({code: 200, data: data, msg: 'search cussess'});
    }
  });
});

// post 发布文章
router.post('/api/admin/article', (req, res) => {
  // 首先判断 有没有ID （是不是更新文章）
  let id = req.body.id
  let content = req.body.content
  let date = moment().format('YYYY-MM-DD HH:mm:ss ')
  let Article
  if (id) {
    let updatestr = {
      title: req.body.title,
      content: content,
      state: req.body.state,
      subtitle: content.trim().substr(0, 15) + '...'
    }
    models.Articles.findByIdAndUpdate(id, updatestr,(err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.json({code: 200, data: data, success: true, msg: '发布成功'});
      }
    });
  }else {
    Article = new models.Articles({
      title: req.body.title,
      content: content,
      state: req.body.state,
      publishTime: date,
      subtitle: content.substr(0, 15) + '...'
    })
    Article.save((err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.json({code: 200, data: data, success: true, msg: '发布成功'});
      }
    });
  }


});

// get 获取所有的文章
router.get('/api/admin/article', (req, res) => {
  models.Articles.find({}, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json({code: 200, data: data, msg: '获取成功'});
    }
  });
});

// 操作 文章
router.get('/api/admin/:article_id', (req, res) => {
  models.Articles.findById(req.params.article_id, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json({code: 200, data: data, message: '获取成功'});
    }
  });
});
// 操作 删除 文章
router.delete('/api/admin/:article_id', (req, res) => {
  models.Articles.remove({_id: req.params.article_id}, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json({code: 200, data: data, message: '删除成功'});
    }
  });
});

module.exports = router;
