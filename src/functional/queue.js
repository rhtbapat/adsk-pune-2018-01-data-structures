const Queue = function() {
  const someInstance = {};

  // Use an object with numeric keys to store values
  const storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (value !== undefined){
      if(Object.keys(storage) === undefined){
        storage[0] = value;
      }
      else{ 
      storage[Object.keys(storage).length] = value;
      }
    }
  };

  someInstance.dequeue = function() {
    let poppedValue = undefined;
    if(Object.keys(storage) !== undefined && Object.keys(storage).length <= 0){
      poppedValue = '';
    }
    else{
      if(Object.keys(storage) !== undefined){
        poppedValue = storage[0];
        delete storage[0];
        if(Object.keys(storage) !== undefined){
          let j = 0
          for(let i = 0; i < Object.keys(storage).length ; i++){
            storage[j] = storage[i+1];
            delete storage[i+1];
            j++;
          }
        }
      }
    }
    return poppedValue;
  };

  someInstance.size = function() {
    if(storage === undefined)
    {
      return 0;
    }
    let size = Object.keys(storage).length;
    if(size === undefined){
      return 0;
    }
    else{
      return Object.keys(storage).length;
    }
  };

  return someInstance;
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Queue;
}
