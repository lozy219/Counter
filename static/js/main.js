
var stats = {
	totalTap : 0,
	totalGame : 0,
};

var record = [
	{
		desc : "demo", 
		count : 0
	}
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
				totalGame : 0,
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

$('#game').on('tap', function() {
	$('#game-count').html($('#game-count').html() - 1 + 2);
	stats.totalTap ++;
	updateStats();
});

$('#record-clear').click(function() {
	$.UIPopup({
		id: "warning",
		title: 'Are you sure?', 
		message: 'This operation is irreversible.', 
		cancelButton: 'Cancel', 
		continueButton: 'Clear', 
		callback: function() {
			record = [
				{
					desc : "demo", 
					count : 0
				}
			];
			updateRecords();
		}
	});
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

$('#game-entry').click(function() {
	var masterTimeline = new TimelineLite();
	masterTimeline.to("", 5, {});

	masterTimeline.from("#progress", masterTimeline.duration(),
		{scaleX: 0, transformOrigin:"left center"}, 0)
});

$(function() {
	$('#stats-total-taps').html(stats.totalTap);
	updateRecords();
});

function addRecord(count, desc) {
	record.push({desc: desc, count: count});
	updateRecords();
}

function updateStats() {
	$('#stats-total-taps').html(stats.totalTap);
	$('#stats-total-games').html(stats.totalGame);
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

function updateRecords() {
	for (var i = 1; i < record.length; i ++) {
		listRecord(i);
	}
}

function listRecord(i) {
	var listHtml = "<li class='comp' data-goto='people'>" +
						"<div><h3>" + record[i].desc + "</h3></div>" +
						"<aside><h4>" + record[i].count + "</h4></aside>" +
					"</li>";
	$('#record-list').append(listHtml);
}
