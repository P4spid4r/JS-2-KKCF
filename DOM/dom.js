

// 1. select the element with the id 'title' using getElementById

// 2.  save the reference to the element with the id 'title' to a variable

// 3. console log the new variable 

// 4. Use query selector to select the first h2 
document.querySelector()

//5. Use query selector to select the paragraph by its class of 'description'

// 6. Use query selector all to select all the h2's on the page

//7. Exercise 1 Create at least 3 different elements in the body of your html file
// In your JS file select each element and log them to the console 
// Select multiple elements with querySelectorAll() and log them to the console

// 8. use innerText property to change the text of the h1 with the id 'transform

// 9. select the element with the id 'text-output' and use innertext to change its value to 'bar'

// 10. Exercise 2: Welcome User
// Use a prompt()to ask the user for their name 
// Concatenate the user’s name into a welcome message
// Use a DOM method to output the welcome message into an html element

// 11. Modify CSS - Select the element with the id 'text-output'
// use the style.fontSize property to set the text size to 30px

// 12. Select the body element and use style.cssText to change the text color and background color

//13. Change src attribute of the image 


// declare function
// function sayHello(){
//     alert("Hello world!")
// }
// sayHello();

// //paremeters 
// function add2numbs(a, b){
//  alert(a, b)
// }
// add2numbs(2, 3)

//select the button element
let myButton = document.querySelector("button")

//declared event handler  function
function handleClick(){
    alert('button was clicked')
    console.log("button was cliacked")
}

myButton.addEventListener('click', handleClick)