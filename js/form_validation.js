$(document).ready(function(){

	// Email validation
	// Declare variables for each input.
	var nameInput,emailInput,contactInput,skypeInput,msgInput;

	// When send_btn clicked
	$("#send_btn").click(function(){

		// Get and pass values from input field to variables.
		nameInput=$("#nameInput").val();
		emailInput=$("#emailInput").val();
		contactInput=$("#contactInput").val();
		skypeInput=$("#skypeInput").val();
		msgInput=$("#msgInput").val();

		// Filter email and contact number
		var mailfilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		var phonefilter = /[0-9]|\./;

		// Check if name and email input are empty.
		if ((nameInput == "") && (emailInput == "")) {
			$("#myModal").modal('show');
			$("#modal-heading").text("Ops!");
			$("#modal-msg").text("Please provide your name, email address and contact number.");
			return false;
		}

		// Check if email is valid format
		else if (!mailfilter.test(emailInput)) {
			$("#myModal").modal('show');
			$("#modal-heading").text("Ops!");
			$("#modal-msg").text("Please enter a valid email address.");
			return false;
		}

		// Check if contact input is a number.
		else if (!phonefilter.test(contactInput)) {
			$("#myModal").modal('show');
			$("#modal-heading").text("Ops!");
			$("#modal-msg").text("Please enter your contact number.");
			return false;

		// Submitting form message.
		} else {
			$("#myModal").modal('show');
			$("#modal-heading").text("Please wait");
			$("#modal-msg").text("Submitting form ...");
		}
	});
});
