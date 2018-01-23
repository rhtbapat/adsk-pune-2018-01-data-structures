const _ = require('underscore');

const Tree = function(value) {
  const newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = null;  // fix me

  _.extend(newTree,treeMethods);

  return newTree;
};

const treeMethods = {};

treeMethods.addChild = function(value) {
  let newChild = Tree(value);
  if(this.children === null){
    this.children = [];
  }
  this.children[this.children.length] = newChild;
};

treeMethods.contains = function(target) {
  if(this.children === null){
    return false;
  }
  else{
    if(this.children.length === 0){
      return false;
    }
    else{
      for(let i = 0 ; i < this.children.length ; i++){
        let child = this.children[i];
        if(child.contains(target)===true)
        {
          return true;
        }
        if(child.value===target){
          return true;
        }
      }
    }
  }
  return false;
};



if (typeof module !== 'undefined' && module.exports) {
  module.exports = Tree;
}
