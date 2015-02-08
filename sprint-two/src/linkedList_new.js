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
      console.log(list.tail);
      list.tail = newNode;
    }
      //set list.tail to Node
      //if list.tail === null
        // set list.head to Node
    //case: tail already exists
      //change the PREVIOUS node.tail.next from null to the new tail.
      //set list.tail to Node






    // // var newNode = Node(value);
    // if(list.tail !== null ){
    //   list.tail.next = newNode;
    // }
    // list.tail = newNode;
    // list[value] = newNode;

    // //initial case (empty list)
    // if (list.head === null){
    //   list.head = newNode;
    // }
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

    var CrawlThrough = function (node) {
      if(node.value === target) {
        return true;
      }
      else {
        if (node.next === null){
          return false;
        }
        CrawlThrough(node.next);
      }
    };

    if(list.head !== null){
    return CrawlThrough(list.head);
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
