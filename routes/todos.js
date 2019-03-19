/* eslint-disable no-console */
/* eslint-disable no-undef */
var express = require('express'),
    router = express.Router(),
    helpers = require('../helpers/todos.js');

router.route('/')
    .get(helpers.getTodos)
    .post(helpers.createTodos)

router.route('/:todoId')
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo)

module.exports = router;

