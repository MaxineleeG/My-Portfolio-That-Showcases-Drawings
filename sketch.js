var clickCount = 0;
var paragraphArea;

var text2 = "A man that is 5'2.";
var text3 = "A man with the ugliest haircut you've ever seen.";
var text4 = "A man who promises you success.";
var text5 = "A man who teaches at ArtCenter.";
var text6 = "A man with a girlfriend and a son.";
var text7 = "A man whose game trailer qualified for an oscar.";
var text8 = "A man with a camera.";
var text9 = "A man who bought you 5 drinks when you weren't old enough to buy your own.";
var text10 = "A man.";
var text11 = "A man.";
var text12 = "A man.";
var text13 = "A man.";

function setup() {
  background(243, 253, 252);
  paragraphArea = createP("A man old enough to be your dad.", 12, 30);
  paragraphArea.style('font-size', '30px');
  paragraphArea.style('font-family', 'Arial, Helvetica, sans-serif');
  paragraphArea.style('font-weight', 'bolder');
  paragraphArea.style('color', 'rgb(175, 192, 192)');
  paragraphArea.style('text-align', 'center');
  paragraphArea.mousePressed(ClickedText);
}

function ClickedText() {
  clickCount = clickCount + 1;

  if (clickCount == 1) {
    paragraphArea.html(text2);
    paragraphArea.style('font-size', '35px');
    paragraphArea.style('color', 'rgb(178, 186, 189)');


  }
  if (clickCount == 2) {
    paragraphArea.html(text3);
    paragraphArea.style('font-size', '40px');
    paragraphArea.style('color', 'rgb(181, 180, 186)');
  }
  if (clickCount == 3) {
    paragraphArea.html(text4);
    paragraphArea.style('font-size', '45px');
    paragraphArea.style('color', 'rgb(186, 168, 180)');

  }
  if (clickCount == 4) {
    paragraphArea.html(text5);
    paragraphArea.style('font-size', '50px');
    paragraphArea.style('color', 'rgb(192, 155, 175)');


  }
  if (clickCount == 5) {
    paragraphArea.html(text6)    ;
    paragraphArea.style('font-size', '55px');
    paragraphArea.style('color', 'rgb(198, 143, 169)');


  }
  if (clickCount == 6) {
    paragraphArea.html(text7);
    paragraphArea.style('font-size', '60px');
    paragraphArea.style('color', 'rgb(204, 131, 163)');


  }
  if (clickCount == 7) {
    paragraphArea.html(text8);
    paragraphArea.style('font-size', '65px');
    paragraphArea.style('color', 'rgb(209, 119, 157)');


  }
  if (clickCount == 8) {
    paragraphArea.html(text9);
    paragraphArea.style('font-size', '70px');
    paragraphArea.style('color', 'rgb(215, 107, 152)');


  }
  if (clickCount == 9) {
    paragraphArea.html(text10);
    paragraphArea.style('font-size', '95px');
    paragraphArea.style('color', 'rgb(221, 94, 146)');


  }
  if (clickCount == 10) {
    paragraphArea.html(text11);
    paragraphArea.style('font-size', '125px');
    paragraphArea.style('color', 'rgb(232, 70, 134)');


  }
  if (clickCount == 11) {
    paragraphArea.html(text12);
    paragraphArea.style('font-size', '155px');
    paragraphArea.style('color', 'rgb(238, 58, 128)');


  }
  if (clickCount == 12) {
    paragraphArea.html(text13);
    paragraphArea.style('color', 'rgb(255, 21, 111)');
    paragraphArea.style('font-size', '260px');

  }
  if (clickCount == 13) {
    txt = "a";
    while(1){
        txt = txt += "a";
    }
  }
}
