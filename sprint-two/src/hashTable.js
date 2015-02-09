var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  this._count++;

  if (bucket === undefined){
    bucket = [[k,v]];
    this._storage.set(i,bucket);
  } else {
    if(this.retrieve(k) !== null){
      this.remove(k);
    }
    bucket.push([k,v]);

  }

  if(this._count > .75*this._limit){
    this.resize(2*this._limit);
  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  if(bucket === undefined){
    return null;
  }

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
  this._count--;
  if(this.retrieve(k) !== null ){
    var i = getIndexBelowMaxForKey(k, this._limit);
    var bucket = this._storage.get(i);
    for (var j = 0; j < bucket.length; j++) {
      if(bucket[j][0] === k){
        bucket.splice(j,1);
      }
    }
    //this._storage.set(i, bucket);
  }

  if((this._count < .25*this._limit) && this._limit > 8){
    this.resize(this._limit/2);
  }

};

HashTable.prototype.resize = function(newLimit) {

//Assign the _storage to a variable
// Instantiate a new _storage with the new limit
// Populate the new _storage with the elements from the old _storage

var oldStorage = this._storage;
this._limit = newLimit;
this._storage = LimitedArray(this._limit);
this._count = 0;

oldStorage.each(function(bucket){
  if (bucket !== undefined){
    for (var i = 0; i < bucket.length; i++) {
      this.insert(bucket[i][0], bucket[i][1]);      
    }
  }
}.bind(this));

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
