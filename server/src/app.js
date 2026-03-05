const express = require('express')
const cors = require('cors')
const { sequelize } = require('./models')
const config = require('./config/config')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
// กำหนดให้ folder 'public' เป็น static resource ที่เข้าถึงได้ผ่าน path '/assets'
app.use('/assets', express.static('public'))

require('./userPassport')
// เรียกใช้ Routes ที่เราแยกไฟล์ไว้
require('./routes')(app)

sequelize.sync({ force: false }).then(() => {
    app.listen(config.port, '0.0.0.0', () => {
        console.log('Server running on port ' + config.port)
    })
})

app.get('/status', (req, res) => {
    res.send('Hello Node.js Server!')
});
app.get('/hello/:name', function (req, res) {
    console.log('hello - ' + req.params.name)
    res.send('say hello with ' + req.params.name)
});