//--------- MOBILE NAVBAR ----------
let navList = document.getElementById("navlist");
let toggleButton = document.getElementById("navHamburger");
toggleButton.addEventListener("click", () => {
  navList.classList.toggle("active");
});
// Switch Covers
function switchCoverITSOTF() {
  var image = document.getElementById("itsotf-book");
  if (image.src.match("assets/images/coverFront-itsotf.jpg")) {
    image.src = "assets/images/itsotf-backCover.jpg";
  } else {
    image.src = "assets/images/coverFront-itsotf.jpg";
  }
}

function switchCoverSERENDIPITY() {
  var image = document.getElementById("serendipity-book");
  if (image.src.match("assets/images/coverFront-serendipity.jpg")) {
    image.src = "assets/images/coverBack-serendipity-82p.jpg";
  } else {
    image.src = "assets/images/coverFront-serendipity.jpg";
  }
}

function switchCoverTFYTF() {
  var image = document.getElementById("tfytf-book-new");
  if (image.src.match("assets/images/coverFront-tfytf-new.jpg")) {
    image.src = "assets/images/tfytfBack-new.jpg";
  } else {
    image.src = "assets/images/coverFront-tfytf-new.jpg";
  }
}

function switchCoverRWLYF() {
  var image = document.getElementById("rwlyf-book");
  if (image.src.match("assets/images/coverFront-rwlyf.jpg")) {
    image.src = "assets/images/coverBack-rwlyf.jpg";
  } else {
    image.src = "assets/images/coverFront-rwlyf.jpg";
  }
}

function switchCoverACD() {
  var image = document.getElementById("acd-book");
  if (image.src.match("assets/images/coverFront-acd.jpg")) {
    image.src = "assets/images/coverBack-acd.jpg";
  } else {
    image.src = "assets/images/coverFront-acd.jpg";
  }
}
function switchCoverTFYTFold() {
  var image = document.getElementById("tfytf-book-old");
  if (image.src.match("assets/images/coverFront-tfytf-old.jpg")) {
    image.src = "assets/images/coverBack-tfytf-old.jpg";
  } else {
    image.src = "assets/images/coverFront-tfytf-old.jpg";
  }
}
