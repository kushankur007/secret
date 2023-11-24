const responseForm = document.getElementById("response-form");
const dateForm = document.getElementById("date-form");
const dateTimeForm = document.getElementById("date-time-form");
const noResponse = document.getElementById("no-response");

responseForm.addEventListener("change", function () {
  if (document.getElementById("yes-radio").checked) {
    dateForm.style.display = "block";
    noResponse.style.display = "none";
  } else if (document.getElementById("no-radio").checked) {
    dateForm.style.display = "none";
    noResponse.style.display = "block";
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const dateTimeForm = document.getElementById('date-time-form');

  dateTimeForm.addEventListener('submit', function (event) {
      event.preventDefault();

      // Get the values from the form
      const dateValue = document.getElementById('date').value;
      const timeValue = document.getElementById('time').value;

      // Display an alert (You can replace this with an AJAX call or other actions)
      alert(`Great! Your date is scheduled for ${dateValue} at ${timeValue}.`);

      // Set the action and method attributes of the form
      dateTimeForm.action = 'https://formspree.io/f/xeqbbogy'; // Replace with your desired action URL
      dateTimeForm.method = 'POST'; // Replace with 'GET' or 'POST' as needed

      // Submit the form
      dateTimeForm.submit();
  });
});
