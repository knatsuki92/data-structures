var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.start = 0;
  this.end = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value){
  this.storage[this.end] = value;
  this.end++;
};
Queue.prototype.dequeue = function(){
  //if (this.end === this.start){return;}
  var result = this.storage[this.start];
  delete this.storage[this.start];
  if (this.size() > 0){
    this.start++;
  }
  return result;
};
Queue.prototype.size = function(){
  return this.end - this.start;
};



