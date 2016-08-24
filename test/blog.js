var expect  = require("chai").expect;
var request = require("request");

describe("blog APIs", function() {

  describe("get blogs", function() {

    var url = "http://localhost:3000/api/blogs";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("returns the list of blogs", function(done) {
      request(url, function(error, response, body) {
        expect(body).to.contain("blogID");
        done();
      });
    });

  });

  describe("check for existence", function() {
    var url = "http://localhost:3000/api/blogs/4/exists";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("return true", function(done) {
      request(url, function(error, response, body) {
        expect(body).to.contain("true");
        done();
      });
    });
  });

});