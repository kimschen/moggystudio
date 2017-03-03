$(function() {

	// Get the form
	var form = $('#contactForm');

	// Get the messages div
	var formMessages = $('#modal-msg');

	// Set up an event listener for the contact form
	$(form).submit(function(e) {
		// Stop the browser from submitting the form
		e.preventDefault();

		// Serialize the form data
		var formData = $(form).serialize();

		// Submit the form using AJAX post request
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})

		// email has been sent.
		.done(function(response) {
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');
			$("#modal-heading").text("Success!");

			// Set the success message text
			$(formMessages).text(response);

			// Clear the form after submmiting the form
			$('#nameInput').val('');
			$('#emailInput').val('');
			$('#contactInput').val('');
			$('#categoryInput').val('');
			$('#msgInput').val('');
		})

		// email could not be sent.
		.fail(function(data) {
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');
			$("#modal-heading").text("Ops!");

			// Set the error message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});

	});

});
