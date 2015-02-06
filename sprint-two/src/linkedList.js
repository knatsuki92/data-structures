var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);
    if(list.tail !== null ){
      list.tail.next = newNode;
    }
    list.tail = newNode;
    list[value] = newNode;

    //initial case (empty list)
    if (list.head === null){
      list.head = newNode;
    }
  };

  list.removeHead = function(){
    //case: empty list
    if(list.head === null){
      return null;
    }

    var headValue = list.head.value;
    list.head = list.head.next;
    delete list[headValue]; //remove the head node from the list.


    //case: one node in list
    if (list.head === null) {
      list.tail = null;
    }

    return headValue;
  };

  list.contains = function(target){
    var isFound = false;
    for (var key in list){
      if (list[key].value === target) {
        isFound = true;
      }
    }
    return isFound;

  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
