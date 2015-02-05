var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  // newStack.storage ={};
  // newStack.stgSize = 0;

  return newStack;
};

var stackMethods = {storage: {}, stgSize: 0};
stackMethods.push = function(value){
  this.storage[this.stgSize] = value;
  this.stgSize++;
}

stackMethods.pop = function () {
  this.stgSize && this.stgSize--;
  var result = this.storage[this.stgSize];
  delete this.storage[this.stgSize];
  return result;
}



stackMethods.size = function () {
  return this.stgSize;
}





