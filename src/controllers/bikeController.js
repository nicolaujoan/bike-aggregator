const {findAllBikes} = require('../services/bikeService'); 

exports.getAllBikes = async function(req, res) {
    const bikes = await findAllBikes();
    return res.send(bikes);
}
