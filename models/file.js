var fs = require("fs")
exports.getAlbumNames = getAlbumNames
exports.getAlbumByName = getAlbumByName
function getAlbumNames(callback){
  var dirAry = []
  fs.readdir("./uploads",function(err,files){
    if(err){
      callback(err,null)
      return
    }
    (function iterator(i){
      if(i >= files.length){
        callback(null,dirAry)
        return
      }
      fs.stat("./uploads/"+files[i],function(err,stats){
          if(err){
            callback(err,null)
            return
          }
          if(stats.isDirectory()){
            dirAry.push(files[i])
          }
          iterator(++i)
      })
    })(0)
  })
}

function getAlbumByName(albumNames,callback){
  var imgAry = []
  fs.readdir("./uploads/"+albumNames,function(err,files){
    if(err){
      callback(err,null)
      return
    }
    (function iterator(i){
      if(i >= files.length){
        callback(null,imgAry)
        return
      }
      fs.stat("./uploads/"+albumNames+"/"+files[i],function(err,stats){
          if(err){
            callback(err,null)
            return
          }
          if(stats.isFile()){
            imgAry.push(files[i])
          }
          iterator(++i)
      })
    })(0)
  })
}