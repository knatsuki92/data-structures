

var Graph = function(){
};

Graph.prototype.addNode = function(node){
  var newNode = {};
  newNode.node = node;
  newNode.edge = [];

  this[node] = newNode;
};

Graph.prototype.contains = function(node){
  var isFound = false;
  _.each(this, function(item){
    if (item.node === node){
      isFound = true;
    }
  });
  return isFound;
};

Graph.prototype.removeNode = function(node){
  for (var key in this){
    if (key === node){
      delete this[key];
    }
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
    // var connected = false;
    for (var i = 0; i < this[fromNode].edge.length; i++ ){
      if (this[fromNode].edge[i].node === toNode){
        return true;
        // connected = true;
      }
    }
    return false;
    //return connected;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  if (this[toNode] && this[fromNode]){
    this[fromNode].edge.push(this[toNode]);
    this[toNode].edge.push(this[fromNode]);
  }


};

Graph.prototype.removeEdge = function(fromNode, toNode){
  if (this.hasEdge(fromNode,toNode)){
    this[fromNode].edge.splice(this[fromNode].edge.indexOf(this[toNode]),1);
    this[toNode].edge.splice(this[toNode].edge.indexOf(this[fromNode]),1);
  }

};

Graph.prototype.forEachNode = function(cb){
  for (var key in this){
    cb(this[key].node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



