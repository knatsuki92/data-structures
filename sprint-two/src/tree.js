var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree,treeMethods);
  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  var newChild = Tree(value);
  newChild.parent = this;
  this.children.push(Tree(value));
};

treeMethods.removeFromParent = function() {
  //Assign var to parent
  //remove child from parent
  //remove parent from child
  var parentTree = this.parent;
  parentTree.children.splice(parentTree.children.indexOf(this),1);
  this.parent = null;

};

treeMethods.contains = function(target){
  //check to see if it matches the target
    //If yes, return true
  //Check to see if it holds any child
    //If no, then return false
  //Loop through each child to see if it's value matches
    //use recursion
  if (this.value === target) {
    return true;
  }

  if (this.children.length === 0) {
    return false;
  }

  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;



  // var wasFound = false;
  // for (var i = 0 ; i < this.children.length; i++){
  //   if(this.children[i].value === target){
  //     wasFound = true;
  //     return wasFound;
  //   }
  //   wasFound = this.children[i].contains(target);
  //   if(wasFound === true){
  //     return wasFound;
  //   }
  // }

  // return wasFound;

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
