var express = require("express")
var app = express()
var router = require("./controller")
app.set("view engine","ejs")
app.use(express.static("./public"))
app.use(express.static("./uploads"))
app.use("/favicon.ico",function(req,res,next){return;})
app.get("/",router.showIndex)
app.get("/:albumName",router.showAlbum)
app.use(function(req,res){
  res.render("404")
})
app.listen(3000)