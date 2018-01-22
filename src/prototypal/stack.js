const Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  return someInstance;
};

const stackMethods = {
  push : function(value) {
    if (value !== undefined){
      if(Object.keys(this.storage) === undefined){
        this.storage[0] = value;
      }
      else{ 
      this.storage[Object.keys(this.storage).length] = value;
      }
    }
  },

  pop : function() {
    let poppedValue = undefined;
    if(Object.keys(this.storage) !== undefined && Object.keys(this.storage).length <= 0){
      poppedValue = '';
    }
    else{
      if(Object.keys(this.storage) !== undefined){
        poppedValue = this.storage[Object.keys(this.storage).length-1];
        delete this.storage[Object.keys(this.storage).length-1];
      }
    }
    return poppedValue;
  },

  size : function() {
    if(this.storage === undefined)
    {
      return 0;
    }
    let size = Object.keys(this.storage).length;
    if(size === undefined){
      return 0;
    }
    else{
      return Object.keys(this.storage).length;
    }
  }
};


if (typeof module !== 'undefined' && module.exports) {
  module.exports = Stack;

  // expose prototype object without extending exported constructor
  // enumerable properties
  Object.defineProperty(module.exports, 'stackMethods', {
    writable: true,
    configurable: true,
    enumerable: false,
    value: stackMethods
  });
}
