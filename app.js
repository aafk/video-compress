const processVideo = require('./src/video-compress');
const routine = require('./src/routine');


const start = async () => {
    const missingVideos = routine.sync();

    if (missingVideos.length > 0) {
        await processVideo(missingVideos[0], missingVideos);
    }
};

start()
    .then(res => {
        routine.watchFiles(processVideo);
    })
    .catch(reason => {
        console.log(reason);
        process.exit();
    });