// your clock code here
function Clock(options) {
  // console.log(options);
  options = options || {};
  this.hours = options.hours || 0;
  this.minutes = options.minutes || 0;
  this.seconds = options.seconds || 0;
  this.twentyFour = '24';
  this.amPm = 'AM';
}

// Get and Set Hours Methods
Clock.prototype.getHours = function() {
  return this.hours;
}

Clock.prototype.setHours = function(hour) {
  if (hour >= 12 && hour < 24) {
    this.hours = checkHour(hour);
    this.twentyFour = '24';
    this.amPm = 'PM';
  } else if (hour >= 0 && hour <= 12) {
    this.hours = checkHour(hour);
  }
}

// Get and Set Minutes Methods
Clock.prototype.getMinutes = function() {
  return this.minutes;
}

Clock.prototype.setMinutes = function(minutes) {
  this.minutes = checkMinute(minutes);
}

// Get and Set Seconds Methods
Clock.prototype.getSeconds = function() {
  return this.seconds;
}

Clock.prototype.setSeconds = function(seconds) {
  this.seconds = checkSeconds(seconds);
}

Clock.prototype.getTime = function() {
  if (this.twentyFour === '24') {
    return this.hour + ':' + this.minutes + ':' + this.seconds;
  } else {
    return this.hour + ':' + this.minutes + ':' + this.seconds + ' ' + this.amPm;
  }
}

var clock = new Clock()

// Helper functions

function checkHour(hour) {
  (hour !== undefined) ? ((hour > 00 && hour < 24) ? return hour) : return 00;
}

function checkMinute(minutes) {
  (minut !== undefined) ? ((minutes >= 00 && minutes < 60) ? return minutes) : return 00;
}

function checkSeconds(seconds) {
  (seconds !== undefined) ? ((seconds >= 00 && seconds < 60) ? return seconds) : return 00;
}

module.exports = Clock;
