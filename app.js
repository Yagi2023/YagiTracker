// Function to show the admin portal
function showAdminPortal() {
  // Get the tracking number and admin password inputs
  const trackingNumberInput = document.getElementById("tracking-number");
  const adminPasswordInput = document.getElementById("admin-password");

  // Get the tracking number and admin password values
  const trackingNumber = trackingNumberInput.value;
  const adminPassword = adminPasswordInput.value;

  // Check if the admin password is correct
  if (adminPassword === "yagi3212!") {
    // Show the admin portal
    document.getElementById("admin-portal").style.display = "block";
  } else {
    // Hide the admin portal
    document.getElementById("admin-portal").style.display = "none";

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
