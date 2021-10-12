function submitForm() {
      // create a new div element
  var newDiv = document.createElement("div");

  // and give it some content
  var newContent = document.createTextNode("Thank you for submitting.");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  var currentDiv = document.getElementById("results");
  document.body.insertBefore(newDiv, currentDiv);
    
    
    
    
    // console.log("hello world");
    // var jsDiv = document.createElement("DIV");
    // emailOutput = document.getElementById("email").value;
    // var emailString = document.createElement("P");
    // emailString.innerHTML = emailOutput;
    // jsDiv.append(emailString);
    // results.push(jsDiv);
}