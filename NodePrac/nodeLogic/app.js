const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const hbs=require("express-handlebars")
const adminRoutes=require('./routes/admin')
const path=require('path')
const shopRoutes=require('./routes/shop')

const app = express();
app.engine('hbs', hbs ({layoutsDir: 'views/layouts/',
defaultLayout: 'main-layout',
extname: 'hbs'}));
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'hbs');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))


app.use('/admin',adminRoutes.router)
app.use(shopRoutes)

app.use((req,res,next)=>{
    // res.status(404).send('<h1>Page not found</h1>')
    // res.status(404).sendFile(path.join(__dirname,'views','404.html'))
    res.status(404).render('404',{docName: 'Page not found'})
})
app.listen(4000);
