(function(){
  'use strict';

  window._ = {};

/*============/
/ COLLECTIONS /
/============*/

/*
  _.each

  Example:
    _([1, 2]).each(function(n) {
      console.log(n);
    }).value();
    >>> 1
    >>> 2
*/
  _.each = function(collection, iterator){
    if(Array.isArray(collection)){
      for(var i = 0; i < collection.length; i++){
        iterator(collection[i], i, collection);
      }
    }else{
      for(var prop in collection){
        iterator(collection[prop], prop, collection);
      }
    }
  };

/*
  _.indexOf

  Example:
    _.indexOf([1, 2, 1, 2], 2);
    >>> 1
*/
  _.indexOf = function(array, value){
    var result = -1;
    _.each(array, function(element, index){
      if(element === value && result === -1){
        result = index;
      }
    });
    return result;
  };

/*
  _.map

  Example:
    function timesThree(n) {
      return n * 3;
    }

    _.map([1, 2], timesThree);
    >>> [3, 6]
*/
  _.map = function(collection, iterator){
    var result = [];
    _.each(collection, function(element){
      result.push(iterator(element));
    });
    return result;
  };
  
/*
  _.reduce

  Example:
    _.reduce([1, 2], function(total, n) {
      return total + n;
    });
    >>> 3
*/
  _.reduce = function(collection, iterator, accumulator){
    _.each(collection, function(element){
      accumulator = accumulator === undefined ? element : iterator(accumulator, element);
    });
    return accumulator;
  };

/*
  _.filter

  Example:
    _.filter([4, 5, 6], function(n) {
      return n % 2 == 0;
    });
    >>> [4, 6]
*/
  _.filter = function(collection, predicate){
    var result = [];
    _.each(collection, function(element){
      if(predicate(element)){
        result.push(element);
      }
    });
    return result;
  };

/*
  _.every

  Alias: _.all

  Example:
    _.every([true, 1, null, 'yes'], Boolean);
    >>> false
*/
  _.every = function(collection, predicate){
    var result = true;
    _.each(collection, function(element){
      if(!predicate(element)){
        result = false;
      }
    });
    return result;
  };

/*
  _.includes

  Example:
    _.includes([1, 2, 3], 1);
    >>> true
*/
  _.includes = function(collection, target){
    return _.reduce(collection, function(accumulator, element){
      if(accumulator){
        return true;
      }
      return element === target;
    }, false);
  };

/*
  _.partition

  Example:
    _.partition([1, 2, 3], function(n) {
      return n % 2;
    });
    >>> [[1, 3], [2]]
*/
  _.partition = function(collection, predicate){
    var result = [[], []];
    _.each(collection, function(element){
      if(predicate(element)){
        result[0].push(element);
      }else{
        result[1].push(element);
      }
    });
    return result;
  };

}());
