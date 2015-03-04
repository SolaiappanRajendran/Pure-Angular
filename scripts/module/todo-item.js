appServices.factory('todoItemService', function() {
 

function model(title, date) {
   var id = new Date().getTime();
  var status = 'pending';
  var title = title || '';
  var date = date;
  this.index = 0;
  var priority = 1;
  this.id  = id;
  this.status = status;
  this.title = title;
  this.date = date;
  this.priority = priority;
}

model.prototype.setStatus = function(value) {
  this.status = value;
  if(value == 'completed')
    this.priority = 0;
}

model.prototype.setPriority = function(value) {
  this.priority = value;
}
  model.setIndex = function(object, item) {
    
    var itemIndex = 0, itemSet = false;
    angular.forEach(object, function(listItem, key){
        if(!itemSet) {
        if(listItem.index != itemIndex) {
          item.index = itemIndex;
          itemSet = true;          
        }
        itemIndex++;
      }
    });

    if(!itemSet) {
      item.index = itemIndex;
    }
  }

  model.setList = function(object) {
    var list= [];
    var itemIndex = 0;
    
    angular.forEach(object, function(listItem, key){
        listItem.index = itemIndex;
        list[itemIndex] = listItem;
        itemIndex++;
    });
    
    return list;
  }
  return model;
});