$(document).ready(function(){
	console.log('ready');
	init();
});

function init() {
	console.log('init');

	var container = $('section.banner').find('#container');
	var columnWrapper = $('<div>', {id : 'columnWrapper'}).appendTo(container);

	var col1 = $('<div>', {id : 'col1', class : 'column'}).appendTo(columnWrapper);
	var col2 = $('<div>', {id : 'col2', class : 'column'}).appendTo(columnWrapper);
	var col3 = $('<div>', {id : 'col3', class : 'column'}).appendTo(columnWrapper);
	var col4 = $('<div>', {id : 'col4', class : 'column'}).appendTo(columnWrapper);
	var col5 = $('<div>', {id : 'col5', class : 'column'}).appendTo(columnWrapper);

	var headline = $('<div>', {id : 'headline'}).appendTo(container);
	var logo = $('<div>', {id : 'logo'}).appendTo(container);


}