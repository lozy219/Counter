$('#goto-new-note').on('singletap', function() {
	$.UIGoToArticle("#note-new");
});

$('#home-note-list').on('singletap', function() {
	var id = $(this).data('id');
	viewNote(id);
});

var notes = [
	{
		title : "SimpleNote Intro",
		content : "Simple haha"
	
	}
];

for (var i = 0; i < notes.length; i ++) {
	listNode(i);
}

function listNode(id) {
	$("home-note-list").append("<li class='nav' data-id='" + id + "'>" +
							   "<h3>" + notes[id].title + "</h3>" + 
							   "<h4>" + notes[id].content.substr(0, 30) + "...</h4>" +
							   "</li>"
							  );
}

function viewNote(id) {
	$('#note-view').data('id', id);
	$('#note-view .note-title').text(note[id].title);
	$('#note-view .note-content').html(notes[id].content);
	$.UIGoToArticle('#note-view');
}