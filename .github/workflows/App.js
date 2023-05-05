// Function to show the admin portal
function showAdminPortal() {
  var adminPassword = document.getElementById("admin-password").value;
  var adminPortal = document.getElementById("admin-portal");
  if (adminPassword === "yagi3212!") {
    adminPortal.style.display = "block";
    adminPortal.classList.add("fadeIn");
  } else {
    alert("Incorrect password. Please try again.");
  }
}

// Function to fetch and display shipment information
function trackShipment() {
  var trackingNumber = document.getElementById("tracking-number").value;
  // Replace "shippo_live_3ba0f351f5fd23633a365c872586f52f42e103b8" with your own Shippo API key
  const apiKey = "shippo_live_3ba0f351f5fd23633a365c872586f52f42e103b8";
  const url = `https://api.goshippo.com/tracks/${trackingNumber}/`;

  fetch(url, {
    headers: {
      "Authorization": `ShippoToken ${apiKey}`
    }
  })
    .then(response => response.json())
    .then(data => {
      // Display the shipment information
      const shipmentInfo = document.getElementById("shipment-info");
      shipmentInfo.innerHTML = JSON.stringify(data, null, 2);
    })
    .catch(error => {
      console.error(error);
    });
}

// Listen for form submission to track the shipment
document.getElementById("tracking-form").addEventListener("submit", function (event) {
  event.preventDefault();
  trackShipment();
});
