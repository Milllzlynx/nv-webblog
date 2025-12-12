let express = require('express');
let bodyParser = require('body-parser') // เพิ่มบรรทัดนี้
const app = express();

// เพิ่ม 2 บรรทัดนี้เพื่อใช้งาน body-parser
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({extended: true}))

// เรียกใช้ routes โดยส่ง app เข้าไป
require('./routes')(app)

app.get('/status', (req, res) => {
    res.send('Hello Node.js')
});

app.get('/hello/:person', function (req, res) {
    console.log('hello - ' + req.params.person)
    res.send('say hello with ' + req.params.person)
});

let port = process.env.PORT || 8081;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
11

