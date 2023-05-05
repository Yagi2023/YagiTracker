// Function to show the shipment information
function showShipmentInfo() {
  // Get the tracking number input
  const trackingNumberInput = document.getElementById("tracking-number");

  // Get the tracking number value
  const trackingNumber = trackingNumberInput.value;

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
