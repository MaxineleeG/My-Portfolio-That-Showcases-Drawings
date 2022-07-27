var clickCount = 0;
var paragraphArea;

var text2 = "You should go somewhere else :)";
var text3 = "...";
var text4 = "...";
var text5 = "...";
var text6 = "You can't take a hint, huh?";
var text7 = "That wasn't even a hint, I just told you to leave.";
var text8 = "...";
var text9 = "Here, I'll do it for you since you're so stubborn >_>";
var text10 = "No more jokes, not talking to you anymore.";
var text11 = "Okay, I see how it is.";
var text12 = "Bye, dummy.";





function setup() {
  background(243, 253, 252);
  paragraphArea = createP("Too bad!", 12, 30);
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
    paragraphArea.style('font-size', '60px');
  }
  if (clickCount == 3) {
    paragraphArea.html(text4);
    paragraphArea.style('font-size', '80px');

  }
  if (clickCount == 4) {
    paragraphArea.html(text5);
    paragraphArea.style('font-size', '100px');


  }
  if (clickCount == 5) {
    paragraphArea.html(text6)    ;
    paragraphArea.style('font-size', '50px');


  }
  if (clickCount == 6) {
    paragraphArea.html(text7);
 


  }
  if (clickCount == 7) {
    paragraphArea.html(text8);



  }
  if (clickCount == 8) {
    paragraphArea.html(text9);

  }
  if (clickCount == 9) {
    window.open("https://www.google.com/search?q=fuck+off&rlz=1C5CHFA_enUS823US823&ei=3wDhYpitDLrVkPIPna6JoAI&ved=0ahUKEwjYmLe83Jj5AhW6KkQIHR1XAiQQ4dUDCA4&uact=5&oq=fuck+off&gs_lcp=Cgdnd3Mtd2l6EANKBAhBGABKBAhGGABQAFiEA2DsBmgAcAB4AIABhwGIAcADkgEDMi4ymAEAoAEBwAEB&sclient=gws-wiz");


  }
  if (clickCount == 10) {
    paragraphArea.html(text10);


  }
  if (clickCount == 15) {
    paragraphArea.html(text11);

  }
    if (clickCount == 16) {
      paragraphArea.html(text12);
      }
  
    if (clickCount == 17){
    paragraphArea.html(text12);
    txt = "a";
    while(1){
        txt = txt += "a";
    }
  }
}
