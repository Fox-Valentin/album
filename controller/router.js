exports.showIndex = showIndex
exports.showAlbum = showAlbum
function showIndex(req,res){
  res.render("index")
}
function showAlbum(req,res){
  res.send(seq.params.albumName)
}