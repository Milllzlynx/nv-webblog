const isAuthenController = require('./controllers/isAuthenController')
const UserController = require('./controllers/UserController')
const UserAuthenController = require('./controllers/UserAuthenController')
const BlogController = require('./controllers/BlogController')

module.exports = (app) => {
    // create user
    app.post('/user', UserController.create)
    // edit user, suspend, active
    app.put('/user/:userId', UserController.put)
    // delete user
    app.delete('/user/:userId', UserController.remove)
    // get user by id
    app.get('/user/:userId', UserController.show)
    // get all user
    app.get('/users', isAuthenController, UserController.index)

    // Route สำหรับสมัครสมาชิก
    app.post('/login', UserAuthenController.login)
    app.post('/register', UserAuthenController.register)

    // blog route
    // create blog
    app.post('/blog', BlogController.create)
    // edit blog, suspend, active
    app.put('/blog/:blogId', BlogController.put)
    // delete blog
    app.delete('/blog/:blogId', BlogController.remove)
    // get blog by id
    app.get('/blog/:blogId', BlogController.show)
    // get all blog
    app.get('/blogs', BlogController.index)

}


