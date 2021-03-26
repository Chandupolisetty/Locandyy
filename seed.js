const  axios=require('axios');
exports.show = (req, res) => {
    // Make a get request to /api/users
    axios.get("https:/locandyy.herokuapp.com/location")
        .then(function(response) {
            res.render('show', { location: response.data });
            // console.log("grhogiho;airhg;stihgo");
        })
        .catch(err => {
            res.send(err);
        })
}