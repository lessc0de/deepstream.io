var LoggerMock = function() {
    this.lastLogLevel = null;
    this.lastLogEvent = null;
    this.lastLogMessage = null;
};

LoggerMock.prototype.log = function( level, event, message ) {
    this.lastLogLevel = level;
    this.lastLogEvent = event;
    this.lastLogMessage = message;
};

module.exports = new LoggerMock();