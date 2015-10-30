(function(){
  'use strict';

  window._ = {};

/*============/
/ COLLECTIONS /
/============*/

/*
  _.at

  Example:
    _.at(['a', 'b', 'c'], [0, 2]);
    >>> ['a', 'c']
*/
  _.at = function(collection){

  };

/*
  _.countBy

  Example:
    _.countBy([4.3, 6.1, 6.4], function(n) {
      return Math.floor(n);
    });
    >>> { '4': 1, '6': 2 }
*/
  _.countBy = function(collection, iteratee){
    
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
  _.find

  Alias: _.detect

  Example:
    var users = [
      { 'user': 'barney',  'age': 36, 'active': true },
      { 'user': 'fred',    'age': 40, 'active': false },
      { 'user': 'pebbles', 'age': 1,  'active': true }
    ];

    _.result(_.find(users, function(chr) {
      return chr.age < 40;
    }), 'user');
    // → 'barney'

*/
  _.find = function(collection, predicate){

  };

/*
  _.findLast

  Example:
    _.findLast([1, 2, 3, 4], function(n) {
      return n % 2 == 1;
    });
    >>> 3
*/
  _.findLast = function(collection, predicate){

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
  _.forEach

  Example:
    _([1, 2]).forEach(function(n) {
      console.log(n);
    }).value();
    >>> 1
    >>> 2
*/
  _.forEach = function(collection, iteratee){

  };

/*
  _.forEachRight

  Example:
    _([1, 2]).forEachRight(function(n) {
      console.log(n);
    }).value();
    >>> 2
    >>> 1
*/
  _.forEachRight = function(collection, iteratee){

  };

/*
  _.groupBy

  Example:
    _.groupBy([4.2, 6.1, 6.4], function(n) {
      return Math.floor(n);
    });
    >>> { '4': [4.2], '6': [6.1, 6.4] }
*/
  _.groupBy = function(collection, iteratee){

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
  _.indexBy

  Example:
    var keyData = [
      { 'dir': 'left', 'code': 97 },
      { 'dir': 'right', 'code': 100 }
    ];

    _.indexBy(keyData, 'dir');
    >>> { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
*/
  _.indexBy = function(collection, iteratee){
    
  };

/*
  _.invoke

  Example:
    _.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
    >>> [[1, 5, 7], [1, 2, 3]]

    _.invoke([123, 456], String.prototype.split, '');
    >>> [['1', '2', '3'], ['4', '5', '6']]
*/
  _.invoke = function(collection, path){

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
  _.map = function(collection, iteratee){

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
  _.reduce

  Example:
    _.reduce([1, 2], function(total, n) {
      return total + n;
    });
    >>> 3
*/
  _.reduce = function(collection, iteratee){

  };

/*
  _.reduceRight

  Example:
    var array = [[0, 1], [2, 3], [4, 5]];

    _.reduceRight(array, function(flattened, other) {
      return flattened.concat(other);
    }, []);
    >>> [4, 5, 2, 3, 0, 1]
*/
  _.reduceRight = function(collection, iteratee){

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

/*
  _.sample

  Example:
    _.sample([1, 2, 3, 4]);
    >>> 2
*/
  _.sample = function(collection){

  }

/*
  _.shuffle

  Example:
    _.shuffle([1, 2, 3, 4]);
    >>> [4, 1, 3, 2]
*/
  _.shuffle = function(collection){

  };

/*
  _.size

  Example:
    _.size([1, 2, 3]);
    >>> 3
*/
  _.size = function(collection){

  };

/*
  _.some

  Example:
    _.some([null, 0, 'yes', false], Boolean);
    >>> true
*/
  _.some = function(collection, predicate){

  };

/*
  _.sortBy

  Example:
    _.sortBy([1, 2, 3], function(n) {
      return Math.sin(n);
    });
    >>> [3, 1, 2]
*/
  _.sortBy = function(collection, iteratee){

  };

/*
  _.sortByAll

  Example:
    var users = [
      { 'user': 'fred',   'age': 48 },
      { 'user': 'barney', 'age': 36 },
      { 'user': 'fred',   'age': 42 },
      { 'user': 'barney', 'age': 34 }
    ];

    _.map(_.sortByAll(users, ['user', 'age']), _.values);
    >>> [['barney', 34], ['barney', 36], ['fred', 42], ['fred', 48]]
*/
  _.sortByAll = function(collection, iteratees){

  };

/*
  _.sortByOrder

  Example:
    var users = [
        { 'user': 'fred',   'age': 48 },
        { 'user': 'barney', 'age': 34 },
        { 'user': 'fred',   'age': 42 },
        { 'user': 'barney', 'age': 36 }
      ];

      // sort by `user` in ascending order and by `age` in descending order
      _.map(_.sortByOrder(users, ['user', 'age'], ['asc', 'desc']), _.values);
      >>> [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
*/
  _.sortByOrder = function(collection, iteratees){

  };

/*
  _.where

  Example:
    var users = [
      { 'user': 'barney', 'age': 36, 'active': false, 'pets': ['hoppy'] },
      { 'user': 'fred',   'age': 40, 'active': true, 'pets': ['baby puss', 'dino'] }
    ];

    _.pluck(_.where(users, { 'age': 36, 'active': false }), 'user');
    >>> ['barney']
*/
  _.where = function(collection, source){

  };
}());
