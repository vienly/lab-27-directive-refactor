'use strict';

module.exports = function(app) {
  require('./list-controller')(app);
  require('./list-directive')(app);
};
