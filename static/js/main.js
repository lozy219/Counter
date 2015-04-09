
var stats = {
	totalTap : 0,
	totalGame : 0,
	maxCount : 0
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
				maxCount : 0
			};
			updateStats();
		}
	});
});

$('#counter').on('tap', function() {
	var audio = new Audio();
    audio.src = "http://www.soundjay.com/switch/switch-22a.wav"
    audio.play();

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
	var audio = new Audio();
    audio.src = "http://www.soundjay.com/switch/switch-22a.wav"
    audio.addEventListener('load', function () {
        audio.play();
    });

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
			console.log(record);
			updateRecords();
		}
	});
});

$('#counter-save-tool').click(function() {
	$('#counter-count-no').val($('#counter-count').html());
	$("#counter-description").val('');
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
		{scaleX: 0, transformOrigin:"left center"}, 0);

	setTimeout(function() {
		stats.totalGame ++;
		var count = parseInt($('#game-count').html());
		if (count > stats.maxCount) {
			stats.maxCount = count;
			$('#result-count').html('<span style="color: red">' + count + '</span>');
		} else {
			$('#result-count').html(count);
		}
		updateStats();
		$.UIGoToArticle("#game-result");

		$('#game-count').html(0);
	}, 5000);
});

$('#go-home').click(function() {
	$.UIGoToArticle("#home");
});

$(function() {
	if (localStorage.isStored) {
		stats.totalTap = localStorage.totalTap;
		stats.totalGame = localStorage.totalGame;
		stats.maxCount = localStorage.maxCount;
		record = localStorage.record;
	}
	updateStats();
	updateRecords();
	$('.display').attr('style', 'margin-top:' + $(document).height() * 0.2 + 'px !important');
});

function addRecord(count, desc) {
	record.push({desc: desc, count: count});
	updateRecords();
}

function updateStats() {
	$('#stats-total-taps').html(stats.totalTap);
	$('#stats-total-games').html(stats.totalGame);
	$('#stats-best-result').html(stats.maxCount);
	handleStorage();
}

function handleStorage() {
	localStorage.setItem("totalTap", stats.totalTap);
	localStorage.setItem("totalGame", stats.totalGame);
	localStorage.setItem("maxCount", stats.maxCount);
	localStorage.setItem("record", record);
	localStorage.setItem("isStored", true);
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
	$('#record-list').html('');
	for (var i = 1; i < record.length; i ++) {
		listRecord(i);
	}
	handleStorage();
}

function listRecord(i) {
	var listHtml = "<li class='comp' data-goto='people'>" +
						"<div><h3>" + record[i].desc + "</h3></div>" +
						"<aside><h4>" + record[i].count + "</h4></aside>" +
					"</li>";
	$('#record-list').append(listHtml);
}
