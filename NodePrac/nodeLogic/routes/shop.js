const express=require('express')
// const path=require('path')
// const rotDir=require('../process/path')
const router=express.Router()
const adminData=require('./admin')
router.get("/", (req, res, next) => {
    // res.send("<h1>Hello create node server<h1>");
    //res.sendFile(path.join(__dirname,'../','views','shop.html'))
    console.log('shop.js', adminData.products)
    //res.sendFile(path.join(rotDir,'views','shop.html'))
    const products = adminData.products;
    res.render('shop', {docName:'Product List',prods: products, hasProducts: products.length > 0})
  });
module.exports=router;
