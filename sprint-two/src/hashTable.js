var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // this._storage.each(function(value,index,storage){
  //   if (!storage[i]){
  //     storage[i] = this._storage.set(i,v);
  //   }
  var bucket = this._storage.get(i);
  if (bucket === undefined){
    bucket = [[k,v]];
  } else {
    if(this.retrieve(k) !== null){
      this.remove(k);
    }
    bucket.push([k,v]);

    // if(this.retrieve(k) === null){
    //   bucket.push([k,v]);
    // }
    // this.remove(k);
    // bucket.push([k,v]);
  }
  this._storage.set(i,bucket);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for (var j = 0; j < bucket.length; j++) {
    if(bucket[j] !== undefined) {
      if(bucket[j][0] === k) {
       return bucket[j][1];
      }
    }
  }
  return null;

};

HashTable.prototype.remove = function(k){
  if(this.retrieve(k) !== null ){
    var i = getIndexBelowMaxForKey(k, this._limit);
    var bucket = this._storage.get(i);
    for (var j = 0; j < bucket.length; j++) {
      if(bucket[j][0] === k){
        bucket.splice(j,1);
      }
    }
    this._storage.set(i, bucket);
  }
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
