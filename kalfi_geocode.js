require('dotenv').config()
const parse = require('csv-parse');
const fs = require('fs');
const transform = require('stream-transform');
const https = require('https');
const util = require('util');

const parser = parse({
  delimiter: ','
});

const baseRequest = 'https://maps.googleapis.com/maps/api/geocode/json';
const key = 'AIzaSyA0IuxSaIqoHw1RjwVji67XCBY5ry3zIG8'

const transformer = transform(function(record, callback){
  setTimeout(function(){
    // here we handle each record by sending out the http request. On success, write the results

    var url = util.format('%s?address=%s&key=%s&language=iw', baseRequest, encodeURIComponent(record[1]), key);
    https.get(url, (resp) => {
      let data = '';

      // A chunk of data has been recieved.
      //TODO: is this required?
      resp.on('data', (chunk) => {
        data += chunk;
      });

      //TODO: print to CSV here
      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        var json = JSON.parse(data);
        console.log(util.format('got response for %s', record[0]));

        if (json['status'] == 'OK'){
          var lat = json['results'][0]['geometry']['location']['lat'];
          var lng = json['results'][0]['geometry']['location']['lng'];
          var newrecord = record.concat([lat,lng,json['status']]);
        } else {
            if (json['status'] != 'ZERO_RESULTS'){
              console.log(util.format('got error status for %s: %j', record[0], json));
            }
          var newrecord = record.concat(['','',json['status']]);
        }
        callback(null, newrecord.join(',')+'\n')
      });

    //TODO: handle error
    }).on("error", (err) => {
      console.log("Error: " + err.message);
      callback(null, record.concat(['error: ',err.message]).join(',')+'\n')
    });
  }, 500)}, { parallel: 5 });

fs.createReadStream(__dirname+'/accessable_kalfi.csv').pipe(parser).pipe(transformer).pipe(fs.createWriteStream(__dirname+'/accessable_kalfi_output.csv'));
