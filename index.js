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

    function adjustDescription() {
      var windowWidth = window.innerWidth;
      var description = document.querySelector(".image-description");
      if (windowWidth <= 600) {
        description.style.fontSize = "12px";
      } else {
        description.style.fontSize = "initial";
      }
    }
    
    window.addEventListener("resize", adjustDescription);



      
  
//  adjusts the number of images per line depeding of size of display
  window.addEventListener("resize", adjustGrid);
  window.addEventListener("load", adjustGrid);

  // When the user clicks on <div>, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}



// might hav eto move this to the index page
window.addEventListener("DOMContentLoaded", function(e) {

});

