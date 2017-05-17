const Gigasecond = function(input) { this.input = input };

Gigasecond.prototype.date = function() {
  const year = this.input.getFullYear();
  const month = this.input.getMonth();
  const day = this.input.getDate();
  const hours = this.input.getHours();
  const minutes = this.input.getMinutes();
  const seconds = this.input.getSeconds();

  if(year < 1970) {
    return new Date( year, month, day, hours - 1, minutes, seconds + Math.pow(10, 9) );
  }
    return new Date( year, month, day, hours, minutes, seconds + Math.pow(10, 9) );
}

module.exports = Gigasecond;
