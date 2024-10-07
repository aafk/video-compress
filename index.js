const fs = require('fs');

function videoCompress (input,output) {
    const jsonString = JSON.stringify({
        "input": input,
        "output": output
    })
    fs.writeFile('./node_modules/video-compressor/src/res/paths.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            const start = require('./app');
        }
    })
}


module.exports = videoCompress