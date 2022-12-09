const CategoryTime = function(categories) {
};


CategoryTime.findAll = (db, category_name, start_date, end_date, result) => {
    const table_name = category_name + "_over_time";
    const query = "SELECT * FROM "+table_name+
    " WHERE date_format(month, '%Y-%m') BETWEEN "+ "'" + start_date + "'" +
    " AND " + "'" + end_date+ "'" + 
    " ORDER BY month ";

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


  module.exports = CategoryTime;