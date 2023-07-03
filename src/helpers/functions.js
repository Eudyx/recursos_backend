const fs = require('fs');

//Deltes all the items of the user is been delete
class helpers {
    static fileDelete(path) {
        // if(fs.existsSync(path)) {
            fs.unlink(path, (err) => {
                if(err) console.error(err);
                console.log('File deleted');
            });
        // } else {
        //     console.log('File does not exist');
        // }
    }
}

module.exports = helpers;