var request = require('request');

module.exports = {
    postToKairos : function(metrics) {
        var body = {
            name: "test",
            url: "https://jsonplaceholder.typicode.com/posts",
            metrics: metrics
        }

        request.post(body, function (err, response) {
            console.log(response);
        })
    }
}