const CategoryRegion = function(categories) {
};


CategoryRegion.findAll = (db, category_name, county_id, city_id, result) => {
    const table_name = category_name + "_time_location";
    var query = "SELECT * FROM "+table_name
    + " WHERE ";
    var county_id_lst = county_id.split(',')
    var city_id_lst = city_id.split(',')
    for(i in county_id_lst){
        query += " county_ID=" + county_id_lst[i] + " and city_ID=" + city_id_lst[i];
        if(i!=1){
            query += " or ";
        }
    }

    query +=" ORDER BY year "
    console.log(query)

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