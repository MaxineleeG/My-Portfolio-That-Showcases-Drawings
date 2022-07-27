var clickCount = 0;
var paragraphArea;

var text2 = "Don't expect a response.";
var text3 = "Nobody's home.";




function setup() {
  background(243, 253, 252);
  paragraphArea = createP("Hehehe", 12, 30);
  paragraphArea.style('font-size', '50px');
  paragraphArea.style('padding-top', '10%');

  paragraphArea.style('font-family', 'Arial, Helvetica, sans-serif');
  paragraphArea.style('font-weight', 'bolder');
  paragraphArea.style('color', 'rgb(54, 55, 61)');
  paragraphArea.style('text-align', 'center');
  paragraphArea.mousePressed(ClickedText);
}

function ClickedText() {
  clickCount = clickCount + 1;

  if (clickCount == 1) {
    paragraphArea.html(text2);



  }
  if (clickCount == 2) {
    paragraphArea.html(text3);
  }
  }
