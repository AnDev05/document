const EventEmiiter = require('events');

module.exports = new EventEmiiter();

setTimeout(() => {
    module.exports.emit('ready');
},1000);