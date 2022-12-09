const Collision = function(collision) {
};

const frequency_words_list = ["daily", "monthly", "yearly"];

const words_convert = {
    "daily": "date",
    "monthly": "month",
    "yearly": "year"
}

Collision.findAll = (db, frequency, city_id, county_id, start, end, result) => {
    if (!frequency_words_list.includes(frequency)) {
        result({error: "not_found"}, null);
    }
    const table_name = "collisions_" + frequency;
    const query = "SELECT * FROM "+table_name+" where city_id = ? and county_id = ? and collision_"+words_convert[frequency]+" between ? and ? order by "+"collision_"+words_convert[frequency]+" limit 1000"
    db.execute(query, [city_id, county_id, start, end], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          }

          result(null, res);
    });
  }


  module.exports = Collision;