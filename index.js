
const seconds = date => Math.floor((new Date() - date) / 1000)

exports.boleh = date => {
    let interval = Math.floor(seconds(date) / 31536000);
    if (interval > 1) {
        return interval + " years ago";
    }
    interval = Math.floor(seconds(date) / 2592000);
    if (interval > 1) {
        return interval + " months ago";
    }
    interval = Math.floor(seconds(date) / 86400);
    if (interval > 1) {
        return interval + " days ago";
    }
    interval = Math.floor(seconds(date) / 3600);
    if (interval > 1) {
        return interval + " hours ago";
    }
    interval = Math.floor(seconds(date) / 60);
    if (interval > 1) {
        return interval + " minutes ago";
    }
    return Math.floor(seconds(date)) + " seconds ago";
}