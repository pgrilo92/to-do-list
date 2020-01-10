var express = require('express');
var router = express.Router();
let toDosCtrl = require('../controllers/todos')

/* GET home page. */
router.get('/', toDosCtrl.getTodo );
router.post('/',  toDosCtrl.addToDo);
router.delete('/:idx',  toDosCtrl.deleteToDo);

module.exports = router;
