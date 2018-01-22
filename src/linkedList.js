const LinkedList = function() {
  const list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let newNode = Node(value);
    if(Object.keys(list) === undefined || list.head === null){
      list[newNode.value] = value;
      list.head = newNode;
      list.tail = newNode;
    }
    else{
      let node = list.head;
      while(node.next !== null){
        node = node.next;
      }
      list[newNode.value] = newNode;
      node.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    let tempNode = list.head;
    let tempHead = list.head.next;
    let returnVal = list[tempNode.value];
    delete list[tempNode.value];
    list.head = tempHead;
    return returnVal;
  };

  list.contains = function(target) {
    let node = list.head;
    if(node.value === target){
      return true;
    }
    while(node.next !== null){
      node = node.next;
      if(node.value === target){
        return true;
      }
    }
    return false;
  };

  return list;
};

const Node = function(value) {
  const node = {};

  node.value = value;
  node.next = null;

  return node;
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LinkedList;
}
