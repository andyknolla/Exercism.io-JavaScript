const PhoneNumber = class {
  constructor(input) {
    this.phone = input
  }
};

PhoneNumber.prototype.number = function() {
  const proper = this.phone.replace(/[\. \s \- ( )]/g, '');

  if(proper.length > 11 || proper.length < 10 || proper.length > 10 && proper[0] != 1) {
    return '0000000000'
  } else if(proper.length > 10) {
    return proper.substr(1);
  } else return proper;
}

PhoneNumber.prototype.areaCode = function() {
  const phone = this.number(this.phone);
  return phone.substr(0, 3);
}

PhoneNumber.prototype.format = function(num) {
  let template = '(xxx) xxx-xxxx'
  for (let i = 0; i < num.length; i++) {
    template = template.replace('x', num[i]);
  }
  return template;
}

PhoneNumber.prototype.toString = function() {
  const phone = this.number(this.phone);
  return this.format(phone);
}

module.exports = PhoneNumber;
