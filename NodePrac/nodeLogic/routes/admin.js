const express=require('express')
const router=express.Router()
// const path=require('path')
// const rotDir=require('../process/path')
const products=[];
router.get("/add-product", (req, res, next) => {
  // res.send(
  //   '<form method="POST" action="/admin/add-product"><input type="text" name="title"/> <button>Add product</button/></form>'
  // );
  // res.sendFile(path.join(__dirname,'..','views','add-product.html'))
 // res.sendFile(path.join(rotDir,'views','add-product.html'))
 res.render('add-product.hbs',{docName:'AddProduct'})
});
router.post("/add-product", (req, res, next) => {
  console.log(req.body.title);
  products.push({title: req.body.title})
  res.redirect('/');
});
exports.router=router;
exports.products=products;
