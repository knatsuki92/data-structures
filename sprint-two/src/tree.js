var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree,treeMethods);
  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){
  var wasFound = false;
  for (var i = 0 ; i < this.children.length; i++){
    if(this.children[i].value === target){
      wasFound = true;
      return wasFound;
    }
    wasFound = this.children[i].contains(target);
    if(wasFound === true){
      return wasFound;
    }
  }

  return wasFound;

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
