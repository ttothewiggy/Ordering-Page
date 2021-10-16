
/*  Dropdown Button    */

/*
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  
*/


/* form 
initialising the send and reset buttons*/

const init = function() {
  document.getElementById("button-cancel").addEventListener("click", reset);
  document.getElementById("button-send").addEventListener("click", send);
  
}

/* function for reset button */

const reset = function(ev){
  ev.preventDefault();
  document.getElementById("form-user").reset();
}

/* function for send button */

const send = function(ev){
  //ev.preventDefault();
  

  let ret = validate();

  if (ret){
    document.getElementById("form-user").submit();

  } else{
    let err = document.querySelector(".error");
    let input = err.querySelector("input");
    err.setAttribute("data-errormsg", `...Missing ${input.placeholder}`);
  }
}

/* function for validation */


const validate = function(ev){
  let valid = false;

  let first = document.getElementById("input-first");
  if (Selection.selectedIndex === 0){
    failures.push({input:"input-first", msg:"Please enter a name"})
  }


  let last = document.getElementById("input-last");
  let type = document.getElementById("input-type");
  let construction = document.getElementById("input-construction");
  let length = document.getElementById("input-length");
  let width = document.getElementById("input-width");
  let thickness = document.getElementById("input-thickness");
  let colour = document.getElementById("input-colour");
  let finish = document.getElementById("input-finish");

  return valid;
}




document.addEventListener('DOMContentLoaded', init);


