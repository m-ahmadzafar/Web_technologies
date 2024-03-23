// we have a local json file and an online json file example in this code.

// we use GET, DELETE, POST, AND PUT METHODS TO work with AJAX Operations.

var ourRequest =  new XMLHttpRequest();

ourRequest.open('GET', "https://learnwebcode.github.io/json-example/animals-1.json");

const urlDiv = document.getElementById("urlJSON");
const localDiv = document.getElementById("localJSON");

ourRequest.onload = function(){
    console.log("URL data has now loaded");
   
    urlDiv.innerText = ourRequest.responseText; //data loaded as a text, not as JSON
 //this is just printing the response text/data
}
ourRequest.send();

//now to load local data, we use the following method.

var ourRequest2 = new XMLHttpRequest();
ourRequest2.open('GET', 'data.json');

// ourRequest2.onload = function(){
//     console.log("Local JSON data has now loaded");
//     localDiv.innerText = ourRequest2.responseText;

// }


//now lets say that for this, we want to load the data as a JSON so we can work on individual objects

ourRequest2.onload = function(){
  console.log("Local JSON data has now loaded");

    var localArr = JSON.parse(ourRequest2.responseText);
    localDiv.innerText = JSON.stringify(localArr[0]); // Convert the object to a string
    // Or access individual properties of the object
    var firstStudent = localArr[0];
    var firstName = firstStudent.name;
    
    console.log("Name of the first student:", firstName);
}
ourRequest2.send();



button1 = document.querySelector("#urlButton");
button2 = document.querySelector("#localButton");


function displayUrlData(){
    urlDiv.removeAttribute("hidden");
}

function displayLocalData(){
    localDiv.removeAttribute("hidden");
}

button1.addEventListener("click", displayUrlData);
button2.addEventListener("click", displayLocalData);


// now lets see how we can delete the json.
// ourRequest.open('DELETE', "https://learnwebcode.github.io/json-example/animals-1.json"); //if this runs, then the button stops working as it has been deleted.


//  ourRequest2.open('DELETE',"data.json"); // after running this, the click button for local doesnt work since it is deleted.


