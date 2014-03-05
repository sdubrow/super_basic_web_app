//d3.select("h1").text("What's up").style("color","steelblue");
/* blah blah*/

function makeStage(w,h) {
	var stage = d3.select(".container")
		.insert("center")
		.insert("svg")
		.attr("width",w)
		.attr("height",h); //id = #, class = .	
	return stage;
}

function clearStim(stage) {
	stage.selectAll("circle").remove();

}


function drawStim(stage,radius,circcolor) {
	//console.log("I called my function");
	stage.insert("circle")
		.attr("cx",200/2)
		.attr("cy",200/2)
		.attr("r",radius)
		.style("fill",circcolor)
		.style("stroke","gray")
		.style("stroke-width","5px")
	
}

function clearButton() {
	d3.select(".container")
	.selectAll("button")
	.remove();
}

function makeButton(text, callback) {
	d3.select(".container")
		.insert("button")
		.attr("type","button")
		.attr("class","btn btn-default btn-lg")
		.text(text)
		.on("click", function(d) { console.log("clicked"); callback(); } );
}

//run functions

var trials = [ {"color":"lightblue", "radius":20},
				{"color":"lightyellow", "radius":50},
				{"color":"lightgreen", "radius":10}
				];

var mystage = makeStage(500/2,400/2);
function doTrial(stage,stim_array) {
	if (stim_array.length > 0) {
	stim = stim_array.shift(); //pops first one off and removes
	clearStim(stage);
	clearButton();
	drawStim(stage,stim["radius"],stim["color"]);
	makeButton("Next", function () {doTrial(stage,stim_array);});
	}
	else {alert("Done");}
	
}

doTrial(mystage,trials)
