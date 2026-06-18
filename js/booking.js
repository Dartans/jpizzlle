document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('bookingForm');
    var submitButton = form ? form.querySelector('button[type="submit"]') : null;

    if (!form) {
        return;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var name = form.name.value.trim();
        var email = form.email.value.trim();
        var eventType = form.eventType.value;
        var eventDate = form.eventDate.value;
        var message = form.message.value.trim();

        if (!name || !email || !eventType || !eventDate) {
            alert('Please fill in all required fields before submitting.');
            return;
        }

        var subject = 'DJ JPizzle Booking Request from ' + name;
        var bodyLines = [
            'Name: ' + name,
            'Email: ' + email,
            'Event Type: ' + eventType,
            'Event Date: ' + eventDate,
            'Message: ' + (message || 'No message provided'),
            '',
            'Please contact me about this booking request.'
        ];
        var body = bodyLines.join('\n');

        var mailtoLink = 'mailto:bookings@jpizzle.ca'
            + '?subject=' + encodeURIComponent(subject)
            + '&body=' + encodeURIComponent(body);

        if (submitButton) {
            submitButton.textContent = 'Opening email client...';
            submitButton.disabled = true;
        }

        window.location.href = mailtoLink;

        setTimeout(function () {
            if (submitButton) {
                submitButton.textContent = 'Submit Booking Request';
                submitButton.disabled = false;
            }
        }, 2000);
    });
});
