var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance ={};
  someInstance.storage = {};
  someInstance.Size = 0;
  _.extend(someInstance, stackMethods);

  return someInstance;
};


var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.Size] = value;
  this.Size++;
};

stackMethods.pop = function(){
  this.Size && this.Size--;
  var result = this.storage[this.Size];
  delete this.storage[this.Size];
  return result;
};
stackMethods.size = function(){
  return this.Size;
};
//debugger;
