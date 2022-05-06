const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get(
    '/',
    controller.GetUser
)
Router.get(
    '/:user_id',
    controller.GetUserById
)

module.exports = Router