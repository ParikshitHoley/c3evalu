const multer  = require('multer')
const path = require("path")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "../book-uploads"))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })

  function fileFilter (req, file, cb) {
     if(file.mimetype === "image/jpeg" || file.mimetype === "image/png")
     {
        cb(null, true)
     }

    cb(null, false)

  
  }









const option = {
    storage : storage,
    fileFilter : fileFilter,
    limits : {
        fileSize : 1024*1024*5
    }
}



const bookupload = multer(option);

module.exports=bookupload;