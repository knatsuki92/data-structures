var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.stgSize = 0;
  this.storage = {};
};


Stack.prototype.push = function (value){
  this.storage[this.stgSize] = value;
  this.stgSize++;
}

Stack.prototype.pop = function(){
  this.stgSize && this.stgSize--;
  var result = this.storage[this.stgSize];
  delete this.storage[this.stgSize];
  return result;
}

Stack.prototype.size = function(){
  return this.stgSize;
}

// var ... = new Stack ()
