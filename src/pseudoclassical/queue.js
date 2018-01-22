const Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};

};

Queue.prototype.enqueue = function(value) {
  if (value !== undefined){
    if(Object.keys(this.storage) === undefined){
      this.storage[0] = value;
    }
    else{ 
    this.storage[Object.keys(this.storage).length] = value;
    }
  }
};

Queue.prototype.dequeue = function() {
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
};

Queue.prototype.size = function() {
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
};


if (typeof module !== 'undefined' && module.exports) {
  module.exports = Queue;
}
