var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    //create a new Node
    var newNode = Node(value);
    //initial case: list.tail === null
    if (list.tail === null){
      list.tail = newNode;
      list.head = newNode;
    } else {
      list.tail.next = newNode;
      // console.log(list.tail);
      list.tail = newNode;
    }
  };

  list.removeHead = function(){
    //case: empty list
    if(list.head === null){
      return null;
    }

    var headValue = list.head.value;
    list.head = list.head.next;

    //case: one node in list
    if (list.head === null) {
      list.tail = null;
    }

    return headValue;
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

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
