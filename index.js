// when an external link is clicked a new tab is opened
    let links = document.querySelectorAll(".icon"); /*select all elements on page that have the icon tag*/
    links.forEach(function(link) {                  
        link.setAttribute("target", "_blank");

    });
// prinst page loaded in console when the etntire page has loaded
    window.addEventListener("DOMContentLoaded", function(e){
        console.log("The page is loaded.")
    });

    // redirects page to tehe checkout when the shopping basket button is clicked
    let btn = document.querySelector("#click-me");
    btn.addEventListener("click", function(e) {
        console.log("The button was clicked.");
    });
    function redirect() {
        window.location.href = "checkout.html";
      }
      
      // hover animation for shopping basket
    btn.addEventListener("mouseover", function() {
      btn.classList.remove("shoppingbasket")
      btn.classList.add("animate");
    });
      
    btn.addEventListener("mouseout", function() {
      btn.classList.remove("shoppingbasket")
      btn.classList.remove("animate");
      console.log(btn);
    });

    window.addEventListener("orientationchange", function(e){
      let screen=window.screen;
      let angle = screen.orientation.angle;
      let type = screen.orientation.type;
      console.log('angle: ${ angle }, type: ${ type }');
    });
    
    
    
    
    
    
    
    // creates a gallery of images for pizza
    function adjustGrid() {
      var grid = document.querySelector(".grid");
      var gridItemWidth = 100 / (grid.offsetWidth / 250);
      var gridItems = document.querySelectorAll(".grid-item");
  
      for (var i = 0; i < gridItems.length; i++) {
          gridItems[i].style.width = gridItemWidth + "%";
          var img = gridItems[i].querySelector("img");
          
          img.onmouseout = function() {
      // Hide the description
          this.nextElementSibling.style.visibility = "hidden";
  }
          img.onmouseover = function() {
      // Show the description
          this.nextElementSibling.style.visibility = "visible";
  }
          
      }
    }

    





// ** functioosn for controlling pop ups for the 15 pizzas ** // 
  
//  adjusts the number of images per line depeding of size of display
  window.addEventListener("resize", adjustGrid);
  window.addEventListener("load", adjustGrid);

  // When the user clicks on an image of pizza open the popup
  function showPopup() {
    var popup = document.getElementById("myPopup");
    popup.classList.add("show");
    document.getElementById("close-button").addEventListener("click", hidePopup);
  
  }
  // when the user clicks on the x close the pop up  
  function hidePopup(event) {
    event.stopPropagation();
    var popup = document.getElementById("myPopup");
    popup.classList.remove("show");
  }
  
function showPopup1() {
  var popup = document.getElementById("myPopup1");
  popup.classList.add("show");
    document.getElementById("close-button1").addEventListener("click", hidePopup1);
    
  }
  function hidePopup1(event) {
    event.stopPropagation();
    var popup = document.getElementById("myPopup1");
    popup.classList.remove("show");
  }

function showPopup2() {
  var popup = document.getElementById("myPopup2");
  popup.classList.add("show");
    document.getElementById("close-button2").addEventListener("click", hidePopup2);
  }
  function hidePopup2(event) {
    event.stopPropagation();
    var popup = document.getElementById("myPopup2");
    popup.classList.remove("show");
  }

function showPopup3() {
  var popup = document.getElementById("myPopup3");
  popup.classList.add("show");
  document.getElementById("close-button3").addEventListener("click", hidePopup3);
}
function hidePopup3(event) {
  event.stopPropagation();
  var popup = document.getElementById("myPopup3");
  popup.classList.remove("show");
}

function showPopup4() {
  var popup = document.getElementById("myPopup4");
  popup.classList.add("show");
  document.getElementById("close-button4").addEventListener("click", hidePopup4);
}
function hidePopup4(event) {
  event.stopPropagation();
  var popup = document.getElementById("myPopup4");
  popup.classList.remove("show");
}

function showPopup5() {
  var popup = document.getElementById("myPopup5");
  popup.classList.add("show");
    document.getElementById("close-button5").addEventListener("click", hidePopup5);
  }
  function hidePopup5(event) {
    event.stopPropagation();
    var popup = document.getElementById("myPopup5");
    popup.classList.remove("show");
  }
function showPopup6() {
  var popup = document.getElementById("myPopup6");
  popup.classList.add("show");
  document.getElementById("close-button6").addEventListener("click", hidePopup6);
}
function hidePopup6(event) {
  event.stopPropagation();
  var popup = document.getElementById("myPopup6");
  popup.classList.remove("show");
}
function showPopup7() {
  var popup = document.getElementById("myPopup7");
  popup.classList.add("show");
  document.getElementById("close-button7").addEventListener("click", hidePopup7);
}
function hidePopup7(event) {
  event.stopPropagation();
  var popup = document.getElementById("myPopup7");
  popup.classList.remove("show");
}
function showPopup8() {
  var popup = document.getElementById("myPopup8");
  popup.classList.add("show");
    document.getElementById("close-button8").addEventListener("click", hidePopup8);
  }
  function hidePopup8(event) {
    event.stopPropagation();
    var popup = document.getElementById("myPopup8");
    popup.classList.remove("show");
  }
function showPopup9() {
  var popup = document.getElementById("myPopup9");
  popup.classList.add("show");
    document.getElementById("close-button9").addEventListener("click", hidePopup9);
  }
  function hidePopup9(event) {
    event.stopPropagation();
    var popup = document.getElementById("myPopup9");
    popup.classList.remove("show");
  }
function showPopup10() {
  var popup = document.getElementById("myPopup10");
  popup.classList.add("show");
    document.getElementById("close-button10").addEventListener("click", hidePopup10);
  }
  function hidePopup10(event) {
    event.stopPropagation();
    var popup = document.getElementById("myPopup10");
    popup.classList.remove("show");
  }
function showPopup11() {
  var popup = document.getElementById("myPopup11");
  popup.classList.add("show");
    document.getElementById("close-button11").addEventListener("click", hidePopup11);
  }
  function hidePopup11(event) {
    event.stopPropagation();
    var popup = document.getElementById("myPopup11");
    popup.classList.remove("show");
  }
function showPopup12() {
  var popup = document.getElementById("myPopup12");
  popup.classList.add("show");
    document.getElementById("close-button12").addEventListener("click", hidePopup12);
  }
  function hidePopup12(event) {
    event.stopPropagation();
    var popup = document.getElementById("myPopup12");
    popup.classList.remove("show");
  }
function showPopup13() {
  var popup = document.getElementById("myPopup13");
  popup.classList.add("show");
    document.getElementById("close-button13").addEventListener("click", hidePopup13);
  }
  function hidePopup13(event) {
    event.stopPropagation();
    var popup = document.getElementById("myPopup13");
    popup.classList.remove("show");
  }
  function showPopup14() {
    var popup = document.getElementById("myPopup14");
    popup.classList.add("show");
      document.getElementById("close-button14").addEventListener("click", hidePopup14);
  }
  function hidePopup14(event) {
      event.stopPropagation();
      var popup = document.getElementById("myPopup14");
      popup.classList.remove("show");
  }



// disables other pizza size check boxes on pop
function disablesizeCheckboxes(){
  var smallSize = document.getElementById("small-size");
  var mediumSize = document.getElementById("medium-size");
  var largeSize = document.getElementById("large-size");
  if(smallSize.checked) {
    mediumSize.disabled = true;
    largeSize.disabled = true;
  }
  else if(mediumSize.checked) {
    smallSize.disabled = true;
    largeSize.disabled = true;
  }
  else if(largeSize.checked) {
    mediumSize.disabled = true;
    smallSize.disabled = true;
  }
  else{
    smallSize.disabled=false;
    mediumSize.disabled=false;
    largeSize.disabled=false;
  }
}
document.getElementById("small-size").addEventListener("click", disablesizeCheckboxes);
document.getElementById("medium-size").addEventListener("click", disablesizeCheckboxes);
document.getElementById("large-size").addEventListener("click", disablesizeCheckboxes);

