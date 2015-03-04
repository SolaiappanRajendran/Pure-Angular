var itemModel = function(title, description, date) {
	this.id = new Date().getTime();
	this.status = 'pending';
	this.title = title;
	this.date = date;
	this.description = description;
}

itemModel.prototype.setStatus = function(value) {
	this.status = value;
}

itemModel.prototype.convertFromObject = function (object) {
	$.extend(true, this, object);	
	return this;	
}

