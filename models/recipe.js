const db = require("../config/db");
class recipe {
    static save_photo(photo_path , recipe_id){
        return new Promise((resolve) => {
          db.query('UPDATE `recipe` SET `img` = ? WHERE `recipe_id`= ? ', [photo_path ,recipe_id ], (err, result) => {
    
            if (!err) {
              if(result.affectedRows >0){
                resolve({
                  message:"Added"
                })
               }
               resolve({
                message:"Not Added"
              })
            }
            else{
              resolve({
                message:err
              });
            }
          });
        });
    }
}
module.exports = recipe;