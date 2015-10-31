describe('Downdash-Easy Methods', function(){

  describe('_.each', function(){

    var arr = ['a','b','c'];
    var obj = {a: 1, b: 2, c: 3};

    it('should iterate over arrays invoking iterator with the value, index/key, and collection', function() {

      var result = [];
      var iterator = function(value, index, collection){
        result.push([value, index, collection]);
      };

      _.each(arr, iterator);

      expect(result).toEqual([
        ['a', 0, arr],
        ['b', 1, arr], 
        ['c', 2, arr],
      ]);
    });

    it('should only iterate over array elements and not properties', function() {

      var result = [];
      var iterator = function(value, index, collection){
        result.push([value, index, collection]);
      };
      arr.dontIterate = 'overMe';

      _.each(arr, iterator);

      expect(result).toEqual([
        ['a', 0, arr],
        ['b', 1, arr], 
        ['c', 2, arr],
      ]);
    });

    it('should iterate over objects invoking iterator with the value, index/key, and collection', function() {

      var result = [];
      var iterator = function(value, index, collection){
        result.push([value, index, collection]);
      };

      _.each(obj, iterator);
      expect(result).toEqual([
        [1, 'a', obj],
        [2, 'b', obj],
        [3, 'c', obj],
      ]);
    });
  });

  describe('_.indexOf', function() {
    var arr = [1,2,2,3,3,3];

    it('should return a number value', function() {
      expect(typeof _.indexOf(arr, 2)).toBe('number');
    });

    it('should return -1 if the provided value is not found in the array', function() {
      expect(_.indexOf(arr, 4)).toBe(-1);
    });

    it('should return the index of the first instance of the value in the array', function() {
      expect(_.indexOf(arr, 2)).toBe(1);
      expect(_.indexOf(arr, 3)).toBe(3);
    });
  });

  describe('_.map', function() {

    var arr = [1,2,3];
    var obj = {'a': 1, 'b': 2, 'c': 3};
    var timesTwo = function(n){
      return n * 2;
    };
    
    it('should return an array', function() {
      expect(Array.isArray(_.map(obj, function(){}))).toBeTruthy();
    });
    
    it('should not modify the input array', function() {
      _.map(arr, timesTwo);
      expect(arr).toEqual([1,2,3]);
    });

    it('should iterate over collections invoking iterator with the value, index/key, and collection', function(){
      var result = _.map(arr, timesTwo);
      expect(result).toEqual([2,4,6]);
      result = _.map(obj, timesTwo);
      expect(result).toEqual([2,4,6]);
    });
  });

  describe('_.reduce', function(){

    var arr = [1,2,3];
    var sumNums = function(total, n){
      return total + (n*n);
    };

    it('should accumulate an array to a single value determined by the callback', function() {
      expect(_.reduce(arr, sumNums, 0)).toBe(14);
    });

    it('should use the first element in the collection as accumulator if none is provided', function() {
      expect(_.reduce(arr, sumNums)).toBe(14);
    });
    it('should not invoke the iterator over the first element in no accumulator is provided', function() {
      expect((_.reduce([2,3], sumNums))).toBe(11);
    });
    it('should invoke the iterator over the first element if an accumlator is provided', function() {
      expect((_.reduce([2,3], sumNums, 0))).toBe(13);
    });
  });

  describe('_.filter', function() {

    var arr = [1,2,3];
    var isEven = function(n){
      return n % 2 === 0;
    };
    
    it('should return an array', function() {
      expect(Array.isArray(_.filter(arr, isEven))).toBeTruthy();
    });

    it('should return all elements predicate returns truthy for', function() {
      expect(_.filter(arr, isEven)).toEqual([2]);
    });

    it('should not modify the input array', function() {
      _.filter(arr, isEven);
      expect(arr).toEqual([1,2,3]);
    });
  });
  
  describe('_.at', function(){

    it('should return an array', function() {
      expect(Array.isArray(_.at([]))).toBeTruthy(true);
    });

    it('should return the elements corresponding to given keys or indices', function() {
      expect(_.at([1,2,3,4], 0, 2)).toEqual([1,3]);
    });

    it('should accept individual arguments as elements to return', function() {
      expect(_.at([1,2,3,4], 0, 2)).toEqual([1,3]);
    });

    it('should accept an array as elements to return', function() {
      expect(_.at([1,2,3,4], [0, 2])).toEqual([1,3]);
    });
  });
  
  describe('_.every', function() {

    var predicator = function(value){
      return value ? true : false;
    };
    var greaterThan = function(value){
      return value > 1 ? true : false;
    };

    it('should return a boolean value', function() {
      expect(typeof _.every([true, 'test', 1], predicator)).toBe('boolean');
    });

    it('should return true if all elements return true', function() {
      expect(_.every([2,3,4], greaterThan)).toEqual(true);
    });

    it('should return false if any element returns false', function() {
      expect(_.every([1,2,3], greaterThan)).toEqual(false);
    });
  });

  describe('_.includes', function() {

    var arr = [1,2,3];
    var obj = {'a': 1, 'b': 2, 'c': 3};

    it('should return a boolean', function() {
      expect(typeof _.includes(arr, 1)).toBe('boolean');
    });

    it('should return true if the value is included in the collection', function() {
      expect(_.includes(arr, 2)).toBe(true);
      expect(_.includes(obj, 3)).toBe(true);
    });

    it('should return false if the value is not included in the collection', function() {
      expect(_.includes(arr, 4)).toBe(false);
      expect(_.includes(obj, 4)).toBe(false);
    });
  });

  describe('_.partition', function() {

    var arr = [1,2,3,4,5];
    var isEven = function(n){
      return n % 2 === 0;
    };
    var result = _.partition(arr, isEven);
    
    it('should return a two-dimensional array (an array of arrays)', function() {
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(2);
      expect(Array.isArray(result[0]) && Array.isArray(result[1])).toBe(true);
    });

    it('should return true values in the first array', function() {
      expect(result[0]).toEqual([2,4]);
    });

    it('should return false values in the second array', function() {
      expect(result[1]).toEqual([1,3,5]);
    });
  });
});
