var _      = require('underscore');
var cache = {}, cacheLimit = '', cacheConfig = {size: 15}; 

module.exports = {

  setCacheLimit: function(){
    cacheLimit = cacheConfig.size;
  }
};