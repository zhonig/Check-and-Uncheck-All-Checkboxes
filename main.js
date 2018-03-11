//Total number of checkboxes with group name "Subscription"
let subscriptionCheckboxesCount = 0;

//Total number of checked checkboxes with group name "Subscription"
let subscriptionCheckboxesChecked = 0;

//Check All / Uncheck All Checkbox Element
let masterCheckboxElement = document.getElementById("masterCheckbox");

//"Subscription" checkbox elements
let subscriptionCheckboxesElements;

//On Window load
window.onload = function(e) {
	//Set "Subscription" checkbox elements
	subscriptionCheckboxesElements = document.getElementsByName("subscription");
	
	//Set total number of checkboxes with group name "Subscription"
	subscriptionCheckboxesCount = subscriptionCheckboxesElements.length;
	
	//Loop through "Subscription" checkbox elements
	for (let i = 0; i < subscriptionCheckboxesCount; i++) {
		//Add "Click" Event Listener to each "Subscription" checkbox element
		subscriptionCheckboxesElements[i].addEventListener("click", function(event) {
			//If user checks "Subscription" checkbox, then increment total number of checked checkboxes with group name "Subscription" by 1
			if(event.target.checked) subscriptionCheckboxesChecked++;
			//Else -- user unchecks "Subscription" checkbox, then decrement total number of checked checkboxes with group name "Subscription" by 1
			else subscriptionCheckboxesChecked--;
			
			//If total number of checked checkboxes with group name "Subscription" is equal to total number of checkboxes with group name "Subscription", then check the Check All/ Uncheck All Checkbox Element
			masterCheckboxElement.checked = (subscriptionCheckboxesChecked === subscriptionCheckboxesCount);
		}, false);
	}
}

//Add "Click" Event Listener to Check All / Uncheck All Checkbox Element
masterCheckboxElement.addEventListener("click", function(event) {
	//Set total number of checked checkboxes with group name "Subscription" -- If checked, then set to total number of checkboxes with group name "Subscription". If unchecked, then set to 0
    subscriptionCheckboxesChecked = event.target.checked ? subscriptionCheckboxesCount : 0;
	
	//Loop through "Subscription" checkbox elements
	for (let i = 0; i < subscriptionCheckboxesCount; i++) {
		//Update "Subscription" checkbox element checked state
		subscriptionCheckboxesElements[i].checked = event.target.checked;
	}
}, false);