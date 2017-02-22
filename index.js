var request = require('request');

module.exports = {
    postToKairos : function(metrics) {
        var body = {
            name: "test",
            url: "https://jsonplaceholder.typicode.com/posts",
            metrics: metrics,
            timestamp: new Date().getTime()
        }

        console.log('body: ', body);

        request.post(body, function (err, response) {
            console.log(response);
        })
    }
}