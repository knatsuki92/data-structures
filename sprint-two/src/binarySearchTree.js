var BinarySearchTree = function(value){
  var node = Object.create(BinarySearchTree.prototype);
  node.value = value;
  node.left = undefined;
  node.right = undefined;

  return node;
};

BinarySearchTree.prototype.insert = function(v){
  //first compare against parent value

  //if greater than
  if (this.value < v){
    //check to see if right node exist
      //if no, create new node
      //if yes, this.right.insert(v)
    if(this.right === undefined) {
      this.right = BinarySearchTree(v);
    } else {
      this.right.insert(v);
    }
  }
  //if greater than
  if (this.value > v){
    //check to see if left node exist
    if(this.left === undefined) {
      this.left = BinarySearchTree(v);
    } else {
      this.left.insert(v);
    }
  }

  //case : both undefined
    //
  //case : one is defined
  //case : both defined

};
BinarySearchTree.prototype.contains = function(v){
  var isFound = false;
  if (this.value === v){
    isFound = true;
  } else if ( this.value < v) {
    if (this.right !== undefined){
      isFound = this.right.contains(v);
    }
  } else if ( this.value > v) {
    if (this.left !== undefined){
      isFound = this.left.contains(v);
    }
  }

  return isFound;

  //compare against parent value
    //if they match, return true
  //if greater, look right
    //invoke contains on right
  //if less than,..
    //..
  //
};
BinarySearchTree.prototype.depthFirstLog = function(cb){
  //run on parent value
  cb(this.value);
  //run on left and right child
  if(this.left !== undefined){
    this.left.depthFirstLog(cb);
  }
  if(this.right !== undefined){
    this.right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
