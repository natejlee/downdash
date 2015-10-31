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

  };

/*
  _.at

  Example:
    _.at(['a', 'b', 'c'], [0, 2]);
    >>> ['a', 'c']
*/
  _.at = function(collection){

  };


/*
  _.every

  Alias: _.all

  Example:
    _.every([true, 1, null, 'yes'], Boolean);
    >>> false
*/
  _.every = function(collection, predicate){

  };



/*
  _.findWhere

  Example:
    var users = [
      { 'user': 'barney', 'age': 36, 'active': true },
      { 'user': 'fred',   'age': 40, 'active': false }
    ];

    _.result(_.findWhere(users, { 'age': 36, 'active': true }), 'user');
    >>> 'barney'
*/
  _.findWhere = function(collection, source){

  };


/*
  _.includes

  Example:
    _.includes([1, 2, 3], 1);
    >>> true
*/
  _.includes = function(collection, target){

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

  };

/*
  _.pluck

  Example:
    var users = [
      { 'user': 'barney', 'age': 36 },
      { 'user': 'fred',   'age': 40 }
    ];

    _.pluck(users, 'user');
    >>> ['barney', 'fred']
*/
  _.pluck = function(collection, path){

  };


/*
  _.reject

  Example:
    _.reject([1, 2, 3, 4], function(n) {
      return n % 2 == 0;
    });
    >>> [1, 3]
*/
  _.reject = function(collection, predicate){

  };

}());
