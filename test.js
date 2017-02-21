var sinon = require('sinon');
var request = require('request');
var index = require('./index');
var expect = require('chai').expect;

describe("index.js", function(){
    it("should call fake reqest", function(){
        var stub = sinon.stub(request, 'post');
        var metrics = {
            name: 'xyz',
            timestamp: 1
        }
        index.postToKairos(metrics, function(err){
            expect(request.post.called).to.be.equal(true);

        });
        sinon.assert.calledWith(stub, metrics);
    })
})
