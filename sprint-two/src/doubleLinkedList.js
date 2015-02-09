var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value) {
    // create a new node for value
    //Check if any node exist in LinkedList.
      // if no, assign both head and tail to the new node.
    //assign its .next link to the old head.
    //assign the .previous of the old head to the new head.
    //reassign head to the new node

    var newNode = Node(value);
    if (list.tail === null){
      list.tail = newNode;
      list.head = newNode;
    } else {
      newNode.next = list.head;
      list.head.previous = newNode;
      list.head = newNode;
    }

  };

  list.addToTail = function(value){
    //create a new Node
    var newNode = Node(value);
    newNode.previous = list.tail;
    if (list.tail === null){
      list.tail = newNode;
      list.head = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeTail = function(){

    if (list.tail === null) {
      return null
    };

    var oldTail = list.tail;
    list.tail = list.tail.previous;

    if (list.tail === null) {
      list.head = null;
    };

    list.tail.next = null;

    return oldTail.value;
  };

  list.removeHead = function(){
    //Check if any node exists
      // if no, then return null
    // Create a new variable referencing the old Head
    //Reassign the head to the list.head.next
      //if null, then set list.tail to list.head (null)
    //Change its .previous to null
    //return the old head's value

    if (list.head === null) {
      return null
    };

    var oldHead = list.head;
    list.head = list.head.next;

    if (list.head === null) {
      list.tail = null;
    };

    list.head.previous = null;

    return oldHead.value;

  //   if(list.head === null){
  //     return null;
  //   }

  //   var headValue = list.head.value;
  //   list.head = list.head.next;

  //   //case: one node in list
  //   if (list.head === null) {
  //     list.tail = null;
  //   }

  //   return headValue;
  };

  list.contains = function(target){

    var CrawlThrough = function (node, targ) {
    // This function crawls through each node until the target is found
      if(node.value === targ) {
        return true;
      }
      else {
        if (node.next === null){
          return false;
        }
        return CrawlThrough(node.next, targ);
      }
    };

    if(list.head !== null){
      return CrawlThrough(list.head, target);
    } else {
      return false;
    }

  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
