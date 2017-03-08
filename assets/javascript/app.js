$( window ).load(function() {
  stopwatch.start()
});


var intervalId;
// Object that will control our game timer
	 var stopwatch = {
		time: 30,
		// function that starts timer
		start: function() {
		intervalId = setInterval(stopwatch.count, 1000);
		},

		count: function() {
		stopwatch.time--;
		var converted = stopwatch.timeConverter(stopwatch.time);
    	$("#display").html(converted)
    	if (stopwatch.time === 0) {
    		alert("times up") && clearinterval(intervalId);
    	}
		},

		timeConverter: function(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
};



