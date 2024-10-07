
# Video Compressor

This package is used to reduce the size of the videos in your project. After including this package to the project, you must provide the input and output file paths as parameter of compress method. Later, when you upload video to the path you specified as input in your project, this package compresses and reduces the size of large video files you upload. Compressed video files are added to the file path you specify as output. As a result, only compressed videos are contained in the output folder. 
## Installation

Install my-project with npm

```bash
npm install video-compressor
```
    
## Usage/Examples

```javascript
const videoCompressor = require('video-compressor')
videoCompressor(input,output)

```




| Parameter | Type     | Description                       | Example    |
| :-------- | :------- | :-------------------------------- | :------- |
| `input`      | `string` | **Required**. input video file upload path | `"src/public/video"` |
| `output`      | `string` | **Required**. output compress video file save path | `"src/public/compressVideo"` |



## 🚀 Example
[https://github.com/iremaslandogan/video-compressor-example.git](https://github.com/iremaslandogan/video-compressor-example)


## Related

Here are related project

[Awesome README](https://github.com/dmcardoso/video-compressing)

