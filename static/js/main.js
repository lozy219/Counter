
var stats = {
	totalTap : 0,
};

var record = [

];

$('#stats-reset').on('singletap', function() {
	$.UIPopup({
		id: "warning",
		title: 'Are you sure?', 
		message: 'This operation is irreversible.', 
		cancelButton: 'Cancel', 
		continueButton: 'Reset', 
		callback: function() {
			stats = {
				totalTap : 0,
			};
			updateStats();
		}
	});
});

$('#counter').on('tap', function() {
	$('#counter-count').html($('#counter-count').html() - 1 + 2);
	stats.totalTap ++;
	updateStats();
});

$('#counter-reset').on('singletap', function() {
	processResetCounter();
});

$('#counter-reset-tool').click(function() {
	processResetCounter();
});

$('#counter-save-tool').click(function() {
	$('#counter-count-no').val($('#counter-count').html());
	$.UIGoToArticle("#counter-save-record");
});

$("#record-save").on("singletap", function() { 
	var count = $("#counter-count-no").val();
	var desc = $("#counter-description").val();

	if (desc.length < 1) {
		desc = "Untitled"; 
	}
	addRecord(count, desc);
	$.UIGoToArticle("#home");
});



$(function() {
	$('#stats-total-taps').html(stats.totalTap);
});

function addRecord(count, desc) {
	record.push({desc: desc, count: count});
}

function updateStats() {
	$('#stats-total-taps').html(stats.totalTap);
}

function processResetCounter() {
	$.UIPopup({
		id: "warning",
		title: 'Are you sure?', 
		message: 'This operation is irreversible.', 
		cancelButton: 'Cancel', 
		continueButton: 'Reset', 
		callback: function() {
			$('#counter-count').html(0);
		}
	});
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