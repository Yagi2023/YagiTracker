// Function to show the shipment tracking interface
function showShipmentTrackingInterface() {
  // Get the holographic button element
  const holographicButton = document.getElementById("holographic-button");

  // Hide the holographic button
  holographicButton.style.display = "none";

  // Show the shipment tracking interface
  document.getElementById("shipment-tracking-interface").style.display = "block";
}

// Function to track shipment information
function trackShipment() {
  // Get the tracking number input
  const trackingNumberInput = document.getElementById("tracking-number");

  // Get the tracking number value
  const trackingNumber = trackingNumberInput.value;

  // Check if the tracking number is a valid password
  if (trackingNumber === "yagitracking") {
    // Show the admin design screen
    document.getElementById("admin-design-screen").style.display = "block";
  } else {
    // Hide the admin design screen
    document.getElementById("admin-design-screen").style.display = "none";

    // Get the shipment information from Shippo's API
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
}
