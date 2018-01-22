const _ = require('underscore');

const Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  const someInstance = {
    storage : {}
  };

  //var storage = {};

  extend(someInstance,queueMethods);

  return someInstance;
};

function extend(obj,methods){
  for (var key in methods) {
    obj[key] = methods[key]
  }
}

const queueMethods = {
  enqueue : function(value) {
    if (value !== undefined){
      if(Object.keys(this.storage) === undefined){
        this.storage[0] = value;
      }
      else{ 
      this.storage[Object.keys(this.storage).length] = value;
      }
    }
  },

  dequeue : function() {
    let poppedValue = undefined;
    if(Object.keys(this.storage) !== undefined && Object.keys(this.storage).length <= 0){
      poppedValue = '';
    }
    else{
      if(Object.keys(this.storage) !== undefined){
        poppedValue = this.storage[0];
        delete this.storage[0];
        if(Object.keys(this.storage) !== undefined){
          let j = 0
          for(let i = 0; i < Object.keys(this.storage).length ; i++){
            this.storage[j] = this.storage[i+1];
            delete this.storage[i+1];
            j++;
          }
        }
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
  module.exports = Queue;
}
