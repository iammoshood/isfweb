//Display mobile menu function
function displayMenu() {
    var x = document.getElementById("mobile-menu");
    if (x.style.display == "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

//Close mobile menu function
function closeMenu() {
    var x = document.getElementById("mobile-menu");
    if (x.style.display == "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }