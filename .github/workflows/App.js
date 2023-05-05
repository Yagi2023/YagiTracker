<!-- HTML for the customer sign-in screen -->
<div id="sign-in-screen">
  <h2>Welcome to the Shipment Tracking App</h2>
  <form id="sign-in-form">
    <label>Email:</label>
    <input type="email" id="email" required>
    <label>Password:</label>
    <input type="password" id="password" required>
    <button type="submit">Sign In</button>
  </form>
  <p>
    <a href="#" onclick="showSignUpForm()">Create New Account</a>
    or
    <a href="#" onclick="continueAsGuest()">Continue as Guest</a>
  </p>
</div>

<!-- HTML for the shipment tracking interface -->
<div id="tracking-interface" style="display: none;">
  <!-- Add form elements for entering the tracking number and displaying the shipment information -->
  ...
</div>

<!-- CSS for the customer sign-in screen and shipment tracking interface -->
<style>
  #sign-in-screen {
    text-align: center;
  }

  #sign-in-form {
    display: inline-block;
    text-align: left;
  }

  #sign-in-form label {
    display: block;
    margin-bottom: 0.5em;
  }

  #sign-in-form input[type="email"],
  #sign-in-form input[type="password"] {
    width: 100%;
    padding: 0.5em;
    margin-bottom: 1em;
  }

  #sign-in-form button[type="submit"] {
    width: 100%;
    padding: 0.5em;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 0.25em;
    cursor: pointer;
  }

  #tracking-interface {
    text-align: center;
  }

  /* Add additional CSS for the shipment tracking interface form elements */
  ...
</style>

<!-- JavaScript for the customer sign-in functionality and shipment tracking interface -->
<script>
  // Initialize Firebase for user authentication
  ...

  // Listen for the submit event on the sign-in form
  document.getElementById("sign-in-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Show an error message if the sign-in fails
      alert(error.message);
    });
  });

  // Listen for changes in the user's authentication state
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // Show the shipment tracking interface if the user is signed in
      document.getElementById("sign-in-screen").style.display = "none";
      document.get
      document.getElementById("tracking-interface").style.display = "block";
    } else {
      // Show the sign-in screen if the user is not signed in
      document.getElementById("sign-in-screen").style.display = "block";
      document.getElementById("tracking-interface").style.display = "none";
    }
  });

  // Function to show the sign-up form
  function showSignUpForm() {
    // Code to show the sign-up form
    ...
  }

  // Function to continue as a guest
  function continueAsGuest() {
    // Code to continue as a guest
    ...
  }
</script>
// Make an API request to Shippo to retrieve shipment information
function getShipmentInfo(trackingNumber) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.goshippo.com/v1/tracks/" + trackingNumber + "/", true);
  xhr.setRequestHeader("Authorization", "ShippoToken " + "shippo_live_3ba0f351f5fd23633a365c872586f52f42e103b8");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      var shipmentInfo = JSON.parse(xhr.responseText);
      // Update the shipment information on the page
      ...
    }
  };
  xhr.send();
}
// Save the user's email and password to MongoDB
function saveUserInfo(email, password) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://api.mongodb.com/v1/databases/shippo-tracking-app/collections/users/", true);
  xhr.setRequestHeader("Authorization", "Bearer " + "mongodb_api_key");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      // Show a message indicating that the user information was saved successfully
      ...
    }
  };
  xhr.send(JSON.stringify({
    email: email,
    password: password
  }));
}
<!-- HTML for the shipment tracking interface -->
<div id="tracking-interface">
  <!-- Add form elements for entering the tracking number and displaying the shipment information -->
  ...
  <br><br>
  <label>Admin Password:</label>
  <input type="password" id="admin-password">
  <button type="button" onclick="showAdminPortal()">Show Admin Portal</button>
</div>

<!-- HTML for the admin portal -->
<div id="admin-portal" style="display: none;">
  <!-- Add form elements for uploading and managing shipment information -->
  ...
</div>

<!-- JavaScript for showing the admin portal -->
<script>
  // Function to show the admin portal
  function showAdminPortal() {
    var adminPassword = document.getElementById("admin-password").value;
    if (adminPassword === "yagi3212!") {
      document.getElementById("admin-portal").style.display = "block";
    } else {
      alert("Incorrect password. Please try again.");
    }
  }
</script>
