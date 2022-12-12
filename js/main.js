
//============================= DARK -> LIGHT theme =============================
// Stable | by @bruno-srio
// This code will switch between dark and light mode. :)
// The mode will change depending on the current mode and the user's preference, saved on local storage. (dark by default, because dark >>>> ligth)
//---------------------------------------------------------------------------------

// Check for saved "ligthMode" in localStorage
let ligthMode = localStorage.getItem("ligthMode"); 
const ligthModeToggle = document.querySelector("#switcher");

const enableLigthMode = () => {
  // 1. Add the class to the body
  document.body.classList.add("ligthmode");
  // 2. Update ligthMode in localStorage
  localStorage.setItem("ligthMode", "enabled");
}

const disableLigthMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove("ligthmode");
  // 2. Update the item ligthMode in localStorage 
  localStorage.setItem("ligthMode", null);
}
 
// If the user already visited and enabled ligthMode
// start things off with it on
if (ligthMode == "enabled") {
  enableLigthMode();
  ligthModeToggle.checked=true;
}

// When someone clicks the button
ligthModeToggle.addEventListener("click", () => {
  // Check localStorage
  ligthMode = localStorage.getItem("ligthMode");

  if (ligthMode != "enabled") {
    enableLigthMode();
    //Get images by id then change their src depending on the current mode
    //Github logo on index page
    const githubI = document.querySelector("#github-I");
    githubI.src = "img/github_black.png";
    //Github logo on contact page
    const githubC = document.querySelector("#github-C");
    githubC.src = "../img/github_black.png";
  } 
  
  else {
    disableLigthMode();
    // Após testar, vi que não é necessário alterar o src nessa parte, pois o src no html já faz isso.
    // githubI.src = "img/githubLogo_white.png";
    // githubC.src = "../img/githubLogo_white.png";
  }
});

//Updates for later - by @bruno-srio
//This code will change the mode and the src like the previous version, but this time it will change the src of the images using classes.
//My ideia is to group all images used on dark mode that need to be changed and change them all at once to the ligth class. 
//That way I don't need multiple if statements neither to define a constant for each image on each page.

//NOTE: tags can have more than one class, so I can keep the effect one and still group them. I just need to right like this: <img class="raise dark">	