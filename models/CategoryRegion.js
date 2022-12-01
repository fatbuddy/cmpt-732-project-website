const CategoryRegion = function(categories) {
};


CategoryRegion.findAll = (db, category_name, county_id, city_id, result) => {
    const table_name = category_name + "_time_location";
    const query = "SELECT * FROM "+table_name
    + " WHERE county_ID=" + county_id + " and city_ID=" + city_id +
    " ORDER BY year "
    console.log(query);

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


  module.exports = CategoryRegion;