describe('Collection Methods', function(){
  
  describe('_.at', function(){

    it('should return an array', function() {
      expect(Array.isArray(_.at([]))).toEqual(true);
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

  describe('_.countBy', function(){
    var numFloor = function(n){
      return Math.floor(n);
    };

    it('should return an object', function() {
      expect(typeof (_.countBy([1,1,2,2,3,3], numFloor))).toEqual('object');
    });

    it('should return an object with keys corresponding to the results of the iteratee', function() {
      expect(_.countBy([1,1,2,2], numFloor)).toEqual({'1': 2, '2': 2});
    });

    it('should return an object with values that match the number of times the key was returned', function() {
      expect(_.countBy([1,1,1,2,3,3], numFloor)).toEqual({'1': 3, '2': 1, '3': 2});
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
      expect(typeof _.every([true, 'test', 1], predicator)).toEqual('boolean');
    });

    it('should return true if all elements return true', function() {
      expect(_.every([2,3,4], greaterThan)).toEqual(true);
    });

    it('should return false if any element returns false', function() {
      expect(_.every([1,2,3], greaterThan)).toEqual(false);
    });
  });
});
