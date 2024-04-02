// DOM Manipulation


// First we use all the basic methods that we use to fetch the html elements, tags, classes, etc.


// Note: DOM has a tree model and html is its child. then head and body are children and siblings of each and so on.


const container = document.getElementById('container');
const liClass = document.getElementsByClassName('liClass');
const h1 =document.getElementsByName('hiName');
const para = document.getElementsByTagName("p"); //it returns an array of all the p tags (if there are multiple) when we use console.log(para);

document.querySelector("div"); //selects the first thing. Here it'll select the first div
document.querySelector("container"); //here it'll select the first tag with the id container
document.querySelectorAll("div"); //this will all the divs or all the tags with the id container


// Now that we know all the ways we can select tags, we can modify the content, attributes, and styles of elements.

//let say that the div with id container used above, we want to change things about. So


console.log(container.id); //this will print its id 
console.log(container.innerHTML); //this will prints its inner html. 

const pTag = document.getElementById("pTag");
console.log(pTag.innerText); 

//now lets say we want to change the styles and attributs of pTag p
console.log("pTags id is: " + pTag.getAttribute("id")); //first we get its id
console.log("pTags class is: " +pTag.getAttribute("class")); //then class 
console.log("pTags name is: " +pTag.getAttribute("name")); //then name (this is not set, so it is null) 


pTag.setAttribute("class", "bye-bye");
console.log("pTags class is: " +pTag.getAttribute("class")); //now its class has changed

//we can set numerous thing. Say we have some Element, TouchEvent
// Get a reference to an HTML element
// var element = document.getElementById("myElement");

// Set various attributes using setAttribute()
// element.setAttribute("id", "newId");
// element.setAttribute("class", "newClass");
// element.setAttribute("title", "New Title");
// element.setAttribute("href", "https://example.com");
// element.setAttribute("data-custom", "customValue");
// element.setAttribute("onclick", "myFunction()");
// etc.


//we can create new elements as well

// Creating a new box
var newBox = document.createElement("div");
newBox.className = "box";
newBox.textContent = "New Box";
container.appendChild(newBox);

//now we need to know about DOM Tree Traversel which involves parent, children and sibling nodes.

//as we have a div with id parent and it had ul with multiple li.
// if we want to go from li to div. we say

const gChild = document.querySelector("#grandchild");
const parent = gChild.parentNode;
const parentType = parent.tagName; 
console.log(parentType); //it gave "UL" on the console.
// now we can reach the div as well
const gParentType = parent.parentNode.tagName;
console.log(gParentType);

//see what happens if we get the divs parent tag which is in the body tag
const ggParentTag = parent.parentNode.parentNode; // note that i am using UL to go there and not div to show the power
console.log(ggParentTag); //this is the body tag. //we get the complete body tag


// now we want to see the siblings of the div ggParent

const ggParent = parent.parentNode;
const sibling1 = ggParent.nextSibling;
const sibling2 = ggParent.previousSibling;


console.log(ggParent.tagName);
// console.log(sibling1.tagName);
// console.log(sibling2.tagName); this didnt work so we use checks
//as we see, now it shows "#text" in the console. which previously showed undefined.

// Check if sibling1 exists and is an element node
if (sibling1 && sibling1.nodeType === Node.ELEMENT_NODE) {
    console.log(sibling1.tagName);
} else {
    console.log(sibling1); // Output: Text node or other non-element node
}

// Check if sibling2 exists and is an element node
if (sibling2 && sibling2.nodeType === Node.ELEMENT_NODE) {
    console.log(sibling2.tagName);
} else {
    console.log(sibling2); // Output: Text node or other non-element node
}


// we can addEventListener as well to tags.

var boxUL = document.getElementById("boxUL");

var button = document.getElementById("byebye");
button.addEventListener("click", function(){
    console.log("bye bye button clicked");
})


var button2 = document.getElementById("addListItem");

button2.addEventListener("click", function(){
    const newLi = document.createElement("li");
    newLi.className = "grandchild";
    newLi.textContent = "New Item";
    boxUL.appendChild(newLi);
    console.log("button works");

     // Wait for a very short time for the DOM to update
     setTimeout(function() {
        console.log("New item appended to the HTML:", parent.innerHTML);
    }, 1);
});


var button3 = document.getElementById("removeListItem");

button3.addEventListener("click", function(){
    var lastChild = boxUL.lastElementChild; // Get the last child element (which is the dynamically added li)
    
    if (lastChild) {
        boxUL.removeChild(lastChild); // Remove the last child element from boxUL
        console.log("Last item removed from the HTML:", lastChild.textContent);
    } else {
        console.log("No items to remove.");
    }
});





console.log("hi");


