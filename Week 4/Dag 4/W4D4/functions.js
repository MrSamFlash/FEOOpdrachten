const pw = "Sjj7bjjs";

const functions = {
  isNotBlank: function () {
    if (pw !== "" || pw !== null) {
      return true;
    } else {
      return false;
    }
  },

  isLessThan8Chars: function () {
    if (pw.length >= 8) {
      return true;
    } else {
      return false;
    }
  },

  hasUppercase: function () {
    if (pw.match(/[A-Z]/)) {
      return true;
    } else {
      return false;
    }
  },

  hasLowercase: function () {
    if (pw.match(/[a-z]/)) {
      return true;
    } else {
      return false;
    }
  },

  hasDigit: function () {
    if (pw.match(/[0-9]/)) {
      return true;
    } else {
      return false;
    }
  },
};

module.exports = functions;
