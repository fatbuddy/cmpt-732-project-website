const Categories = function(categories) {
};


Categories.findAll = (db, category_name, result) => {
    const table_name = "collisions_severity_by_" + category_name;
    const query = "SELECT * FROM "+table_name + " ORDER BY " + category_name;
    db.execute(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          }
    
          if (res.length == 0) {
            // not found Tutorial with the id
            result({ kind: "not_found" }, null);
            return;
          }
    
          // console.log("loaded vote: ", res);
          result(null, res);
    });
  }


  module.exports = Categories;