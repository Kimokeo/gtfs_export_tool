var contentful = require('contentful')
var util = require('util')
var fs = require('fs')
var client = contentful.createClient({
  space: Space,
  accessToken: Token,
  host: 'cdn.contentful.com'
})

client.getContentType('stop')
.then(function (entry) {
	console.log(entry)
	fs.writeFile('doc/stop.txt', JSON.stringify(entry.fields), function (err) { 
		if (err) return console.log(err)
	}) 
})

client.getContentType('zone')
.then(function (entry) {
	console.log(entry)
	fs.writeFile('doc/zone.txt', JSON.stringify(entry.fields), function (err) { 
		if (err) return console.log(err)
	}) 
})

client.getContentType('rule')
.then(function (entry) {
	console.log(entry)
	fs.writeFile('doc/rule.txt', JSON.stringify(entry.fields), function (err) { 
		if (err) return console.log(err)
	}) 
})

client.getContentType('fare')
.then(function (entry) {
	console.log(entry)
	fs.writeFile('doc/fare.txt', JSON.stringify(entry.fields), function (err) { 
		if (err) return console.log(err)
	}) 
})

client.getContentType('serviceExceptions')
.then(function (entry) {
	console.log(entry)
	fs.writeFile('doc/serviceExceptions.txt', JSON.stringify(entry.fields), function (err) { 
		if (err) return console.log(err)
	}) 
})

client.getContentType('preferredTransfers')
.then(function (entry) {
	console.log(entry)
	fs.writeFile('doc/preferredTransfers.txt', JSON.stringify(entry.fields), function (err) { 
		if (err) return console.log(err)
	}) 
})

client.getContentType('servicePeriod')
.then(function (entry) {
	console.log(entry)
	fs.writeFile('doc/servicePeriod.txt', JSON.stringify(entry.fields), function (err) { 
		if (err) return console.log(err)
	}) 
})

client.getContentType('agencyInformation')
.then(function (entry) {
	console.log(entry)
	fs.writeFile('doc/agencyInformation.txt', JSON.stringify(entry.fields), function (err) { 
		if (err) return console.log(err)
	}) 
})

client.getContentType('headsign')
.then(function (entry) {
	console.log(entry)
	fs.writeFile('doc/headsign.txt', JSON.stringify(entry.fields), function (err) { 
		if (err) return console.log(err)
	}) 
})

client.getContentType('blocks')
.then(function (entry) {
	console.log(entry)
	fs.writeFile('doc/blocks.txt', JSON.stringify(entry.fields), function (err) { 
		if (err) return console.log(err)
	}) 
})

client.getContentType('weeklyServiceCalendar')
.then(function (entry) {
	console.log(entry)
	fs.writeFile('doc/weeklyServiceCalendar.txt', JSON.stringify(entry.fields), function (err) { 
		if (err) return console.log(err)
	}) 
})

client.getContentType('yearlyServiceCalendar')
.then(function (entry) {
	console.log(entry)
	fs.writeFile('doc/yearlyServiceCalendar.txt', JSON.stringify(entry.fields), function (err) { 
		if (err) return console.log(err)
	}) 
})