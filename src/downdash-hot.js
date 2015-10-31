(function(){
  'use strict';

  window._ = {};

/*
  _.chunk

  Example:
    _.chunk(['a', 'b', 'c', 'd'], 2);
    >>> [['a', 'b'], ['c', 'd']]

*/
  _.chunk = function(array, size){

  };

/*
  _.flatten

  Example:
    _.flatten([1, [2, 3, [4]]]);
    >>> [1, 2, 3, [4]]

    // using `isDeep`
    _.flatten([1, [2, 3, [4]]], true);
    >>> [1, 2, 3, 4]

*/
  _.flatten = function(array, isDeep){

  };

/*
  _.intersection

  Example:
    _.intersection([1, 2], [4, 2], [2, 1]);
    >>> [2]

*/
  _.intersection = function(array1, array2, array3){

  };

/*
  _.pull

  Example:
    var array = [1, 2, 3, 1, 2, 3];

    _.pull(array, 2, 3);
    console.log(array);
    // → [1, 1]
*/
  _.pull = function(array, values){

  };

/*
  _.zip

  Example:
    _.zip(['fred', 'barney'], [30, 40], [true, false]);
    // → [['fred', 30, true], ['barney', 40, false]]
*/
  _.zip = function(array1, array2){

  };

/*
  _.times

  Example:
    _.times(3, function(n) {
      mage.castSpell(n);
    });
    // → invokes `mage.castSpell(n)` three times with `n` of `0`, `1`, and `2`
*/
  _.times = function(n, iterator){

  };

/*
  _.curry

  Example:
    var abc = function(a, b, c) {
      return [a, b, c];
    };

    var curried = _.curry(abc);

    curried(1)(2)(3);
    // → [1, 2, 3]

    curried(1, 2)(3);
    // → [1, 2, 3]

    curried(1, 2, 3);
    // → [1, 2, 3]
*/
  _.curry = function(func){

  };

/*
  _.memoize

  Example: 
    var upperCase = _.memoize(function(string) {
      return string.toUpperCase();
    });

    upperCase('fred');
    // → 'FRED'
*/
  _.memoize = function(func){
    
  };

}());