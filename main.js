var google;

onEvent("search", "click", function( ) {
	console.log("search clicked!");
	 google = getText("searchInput");
	 var output="https://in.search.yahoo.com/search?fr=mcafee&type=E211IN714G0&p="+google;
	 open(output);
});

 


onEvent("contentReview", "click", function( ) {
	console.log("contentReview clicked!");
	setScreen("contentreview");

});


onEvent("reportwriter", "click", function( ) {
	console.log("reportwriter clicked!");
	setScreen("doc_editor");

});

// doc editor stuff bellow


// colors
onEvent("button5", "click", function( ) {
  setProperty("text_area2", "text-color", "black");
});
//brown
onEvent("button9", "click", function( ) {
  setProperty("text_area2", "text-color", "brown");
});
//grey
onEvent("button10", "click", function( ) {
  setProperty("text_area2", "text-color", "grey");
});
//blu
onEvent("button11", "click", function( ) {
  setProperty("text_area2", "text-color", "blue");
});

onEvent("button8", "click", function( ) {
  setProperty("text_area2", "text-color", "green");
});

onEvent("button7", "click", function( ) {
  setProperty("text_area2", "text-color", "red");
});
onEvent("bold", "click", function( ) {
  setProperty("text_area2", "font-family", "Arial Black");
});
onEvent("italic", "click", function( ) {
  setProperty("text_area2", "font-family", "Cursive");
});
onEvent("text_input1", "input", function( ) {
  setProperty("text_area2", "font-size", getText("text_input1"));
});
onEvent("text_area2", "click", function( ) {
  setProperty("text_area2", "font-family", getText("dropdown1"));
});


onEvent("image7", "click", function( ) {
  setProperty("text_area2", "text-align", "left");
});
onEvent("image6", "click", function( ) {
  setProperty("text_area2", "text-align", "center");
});
onEvent("image8", "click", function( ) {
  setProperty("text_area2", "text-align", "right");
});

//done button click 
onEvent("donebutton", "click", function( ) {
  playSound("sound://category_achievements/melodic_win_2.mp3", false);
  hideElement("bold");
  hideElement("button10");
  hideElement("button11");
  hideElement("button5");
  hideElement("button7");
  hideElement("button8");
  hideElement("button9");
  hideElement("dropdown1");
  hideElement("image1");
  hideElement("image6");
  hideElement("image7");
  hideElement("image8");
  hideElement("italic");
  hideElement("text_input1");
  hideElement("underlined");
  showElement("infolabel")
  hideElement('donebutton')
  setProperty("backbutton", "x", "80");
  setProperty("backbutton", "font-size", "20");
  setProperty("backbutton", "text-color", "blue");
  onEvent("backbutton", "click", function( ) {
  setScreen('homescreen')
  //reset the doc screen
  showElement("bold");
  showElement("button10");
  showElement("button11");
  showElement("button5");
  showElement("button7");
  showElement("button8");
  showElement("button9");
  showElement("dropdown1");
  showElement("image1");
  showElement("image6");
  showElement("image7");
  showElement("image8");
  showElement("italic");
  showElement("text_input1");
  showElement("underlined");
  hideElement("infolabel")
  showElement('donebutton')
  setProperty("backbutton", "x", "165");
  setProperty("backbutton", "font-size", "18");
  setProperty("backbutton", "text-color", "white");
});
});

// timer stuff bellow 

onEvent("timerbutton", "click", function( ) {
  setScreen('timerscreen')
});

var startTime;
var isRunning = false;

onEvent("start", "click", function( ) {
	if (!isRunning){
	  isRunning = true;
	  startTime = getTime()
	  
	  timedLoop(1000, function(){
	   var currentTime = getTime();
	   var elapsedTime = currentTime - startTime;
	   elapsedTime = Math.round(elapsedTime/1000);
	   setText("timearea",  elapsedTime);
	});
	  
	}
});
onEvent("stopbutton", "click", function( ) {
	console.log("stopbutton clicked!");
	isRunning = false;
	stopTimedLoop()
});
onEvent("backbuttontime", "click", function( ) {
	console.log("backbuttontime clicked!");
	setScreen("homescreen")
});
onEvent("backbutton", "click", function( ) {
	console.log("backbutton clicked!");
	setScreen("homescreen")
});
onEvent("home", "click", function( ) {
	console.log("home clicked!");
	setScreen("homescreen")
});
