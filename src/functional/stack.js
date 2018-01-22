const Stack = function() {
  const someInstance = {};

  // Use an object with numeric keys to store values
  const storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    if (value !== undefined){
      if(Object.keys(storage) === undefined){
        storage[0] = value;
      }
      else{ 
      storage[Object.keys(storage).length] = value;
      }
    }
  };

  someInstance.pop = function() {
    let poppedValue = undefined;
    if(Object.keys(storage) !== undefined && Object.keys(storage).length <= 0){
      poppedValue = '';
    }
    else{
      if(Object.keys(storage) !== undefined){
        poppedValue = storage[Object.keys(storage).length-1];
        delete storage[Object.keys(storage).length-1];
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
  module.exports = Stack;
}
