var http = require('http')
var HttpHashRouter = require('http-hash-router')
var router = HttpHashRouter()
var fs = require
var contentfulToken = Token
var contentfulSpaceId = SpaceId

router.set('/', function() {
	retrieveData()
})

function retrieveData(){
	http.get('http://cdn.contentful.com/spaces/' + contentfulSpaceId + '?access_token=' + contentfulToken, function(req,res) {
		console.log(res)
	})
}
function refreshToken() {
	http.get('http://cdn.contentful.com/refresh/', function(req, res) {
		console.log(res)
	})
}

var server = http.createServer(function (req, res) {
	retrieveData()
  router(req, res, {}, onError)
  // handle Error
  function onError (err) {
    //sendError(req, res, {body: err})
    console.log(err)
  }
})

server.listen(process.env.PORT || 3000);