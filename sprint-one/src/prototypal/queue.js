var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var QueueInstance = Object.create(queueMethods);
  QueueInstance.start = 0;
  QueueInstance.end = 0;
  QueueInstance.storage ={};

  return QueueInstance;
};

var queueMethods = {};
queueMethods.enqueue = function(value){
  this.storage[this.end] = value;
  this.end++;
};

queueMethods.dequeue = function(){
  var result = this.storage[this.start];
  delete this.storage[this.start];
  if (this.size() > 0){
    this.start++;
  }
  return result;

};

queueMethods.size = function(){
  return this.end - this.start;
};

