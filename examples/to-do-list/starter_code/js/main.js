// Initial Values
var count = 0;

// EVENTS
// Here, we attach certain function to certain events
// Below, we elaborate on what each function does

// When the #new form is submitted, add the new item
$("#ne1w").on("submit",addNewItem);
// When an item gets clicked, mark as complete or incomplete

// When a remove link is clicked, remove that item

// When an edit link is clicked, go into edit mode

// When an item editor is submitted, save the changes

// When a user leaves an item editor form, save the changes

// When the Clear List button is clicked, clear out the items

// When the Clear Completed button is clicked, clear out the completed items


// FUNCTIONS
// See above for when these are used
function updateCount() {
	// Log the current count
	// Count the number of items
	// Print the new count

}

function addNewItem(event) {
	// Prevent page reload
  event.preventDefault();
	// Get the text the user entered
  const userInput = $("#newItem").val()
  console.log(userInput);
	// Add an <li> with that text to the <ul>
  //$("#todos").append("<li>" + userInput + "</li>");
	// Update the count
}

function removeItem(event) {
	// Prevent page reload
	// The parent is the item; remove it
	// The list has been changed, so update the count
}

function editItem(event) {

	// Prevent page reload
	// Get the text of the to-do item; it's a sibling of the clicked link
	// Get the parent <li>
	// Replace the parent <li> contents with an edit form
	// Focus the keyboard on the input that was just added
}

function saveItem(event) {
	// Prevent page reload
	// Get the new text from the editor
	// Get the parent <li>
	// Replace the parent <li> contents with the updated item and controls
}

function switchStatus() {
	// Get the parent <li>
	// Toggle the class of the parent <li>
	// The list has been changed, so update the count
}

function clearList() {
	// Find all the items and remove them
	// The list has been changed, so update the count
}

function clearCompleted() {
	// Find all the items that are done, and remove them
	// The list has been changed, so update the count
}
