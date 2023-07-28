const express = require('express')
const app = express()
const port = 8000
const path = require('path')
const router=require('./router/index')
const bodyParser = require('body-parser')
const exphbs=require('express-handlebars')
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(bodyParser.json())
app.engine('.hbs', exphbs.engine({ extname: '.hbs',
 defaultLayout: "main",
 
// runtimeOptions:{allowProtoPropertiesByDefault:true,
//   allowedProtoMethodsByDefault:true}, 
  
  }))
app.use(express.static(path.join(__dirname, '/public')))
app.set('view engine', '.hbs');

router(app)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})