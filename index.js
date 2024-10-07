const fs = require("fs");

function videoCompress(input, output, size) {
  const jsonString = JSON.stringify({
    size,
    input,
    output,
  });
  fs.access(input, (error) => {
    if (error) {
      fs.mkdirSync(input);
    }
  });
  fs.access(output, (error) => {
    if (error) {
      fs.mkdirSync(output);
    }
  });
  fs.writeFile(
    "./node_modules/video-compress/src/res/paths.json",
    jsonString,
    (err) => {
      if (err) {
        console.log("Error writing file", err);
      } else {
        const start = require("./app");
      }
    }
  );
}

module.exports = videoCompress;
