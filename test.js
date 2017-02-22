var sinon = require('sinon');
var request = require('request');
var index = require('./index');
var expect = require('chai').expect;

describe("index.js", function(){
    it("should call fake reqest", function(){
        var stub = sinon.stub(request, 'post');
        var metrics = {
            name: 'xyz'

        };

        var now = new Date();
        var clock = sinon.useFakeTimers(now.getTime());

        var postBody = {
            name: "test",
            url: "https://jsonplaceholder.typicode.com/posts",
            metrics: metrics,
            timestamp: clock.now
        };

        index.postToKairos(metrics, function(){ });

        console.log('first call args ', stub.firstCall.args);

        sinon.assert.calledWith(stub, postBody);

    });

    it("should create a spy and use the payload for assertion", function(){
        var metrics = {
            name: 'abc',
            timestamp: 1
        }
      var postToKairosSpy = sinon.spy(index, 'postToKairos');
       index.postToKairos(metrics);
        console.log('call count: ' , postToKairosSpy.callCount);
    })


})
