
var stats = {
	totalTap : 0,
}

$('#stats-reset').on('singletap', function() {
	stats = {
		totalTap : 0,
	};
	updateStats();
});

$('#counter').on('tap', function() {
	$('#counter-count').html($('#counter-count').html() - 1 + 2);
	stats.totalTap ++;
	updateStats();
});

$('#counter-reset').on('singletap', function() {
	$('#counter-count').html(0);
});

$(function() {
	$('#stats-total-taps').html(stats.totalTap);
});

function updateStats() {
	$('#stats-total-taps').html(stats.totalTap);
}










// $('#goto-new-note').on('singletap', function() {
// 	$.UIGoToArticle("#note-new");
// });

// $('#home-note-list').on('singletap', function() {
// 	var id = $(this).data('id');
// 	viewNote(id);
// });

// var notes = [
// 	{
// 		title : "SimpleNote Intro",
// 		content : "Simple haha"
	
// 	}
// ];

// for (var i = 0; i < notes.length; i ++) {
// 	listNode(i);
// }

// function listNode(id) {
// 	$("home-note-list").append("<li class='nav' data-id='" + id + "'>" +
// 							   "<h3>" + notes[id].title + "</h3>" + 
// 							   "<h4>" + notes[id].content.substr(0, 30) + "...</h4>" +
// 							   "</li>"
// 							  );
// }

// function viewNote(id) {
// 	$('#note-view').data('id', id);
// 	$('#note-view .note-title').text(note[id].title);
// 	$('#note-view .note-content').html(notes[id].content);
// 	$.UIGoToArticle('#note-view');
// }