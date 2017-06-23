var file = require("../models/file.js")
exports.showIndex = showIndex
exports.showAlbum = showAlbum
function showIndex(req,res){
  file.getAlbumNames(function(err,albumNames){
    if(err){return err}
    var objName = {albumNames:albumNames}
    res.render("index", objName)
  })
}
function showAlbum(req,res){
  file.getAlbumByName(req.params.albumName,function(err,images){
    if(err){throw err}
    res.render("album",{
      "albumName":req.params.albumName,
      "images":images
    })
  })
}