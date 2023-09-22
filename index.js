// TODO: Query for button with an id "theme-button"
let themeButton = document.getElementById("theme-button");

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {

    // Write your code to manipulate the DOM here
  document.body.classList.toggle("dark-mode");
  

}


// TODO: Register a 'click' event listener for the theme button
themeButton.addEventListener("click", toggleDarkMode);
// Set toggleDarkMode as the callback function.

let person={
  name,
  hometown
}
// Add your query for the sign now button here
//let count=1;
//let signNowButton = document.getElementById("sign-now-button");
function addSignature() {
  var fname = document.getElementById("name").value;
  var home = document.getElementById("hometown").value;
  //newSignature.textContent = '🖊️ ${fname} from ${home} supports this cause.';
  document.getElementById("addSignature").innerHTML+='🖊️'+fname+" from "+home+ " supports this cause."+"<br>";
  //document.getElementById("addSignature").textContent+=fname+' from '+ home +' supports this cause.';
  
    // Write your code to manipulate the DOM here
  //var input1=document.getElementById("name").value;
  //document.getElementById("addSignature").innerHTML+=input1+"<br>";
  //var input2=document.getElementById("hometown").value;
  //document.getElementById("addSignature").innerHTML+=input2+"<br>";
  //newSignature.textContent='🖊️ ${person.name} from ${person.town} supports this cause.';
  //e=document.getElementById("counter");
  //e.remove();
  //count=count+1;
  //e.append("🖊️ " + count + " people have signed this petition and support this cause.");
  //document.body.classList.toggle("dark-mode");
}
//signNowButton.addEventListener('click', addSignature);

// Add a click event listener to the sign now button here
let animation={
  revealDistance:150,
  initialOpacity:0,
  transitionDelay:0,
  transitionDuration:'2s',
  transitionProperty:all,
  transitionTimingFunction:'ease'
}

let reduceButton = document.getElementById("reduce-button");

// TODO: Complete the toggleDarkMode function
const reduceMotion = () => {

    // Write your code to manipulate the DOM here
  animation.transitionDuration=none;
  animation.initialOpacity=10;
  

}


// TODO: Register a 'click' event listener for the theme button
reduceButton.addEventListener("click", reduceMotion);
// Set toggleDarkMode as the callback function.



function toggleModal(person){
  var modal=document.getElementById('thanks-modal').value;
  var modalContent=document.getElementById('thanks-modal-content').value;
  modal.style.display="flex";
}

