document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
  const trackingNumber = document.getElementById("tracking-number").value;
  getShipmentInfo(trackingNumber);
});

function getShipmentInfo(trackingNumber) {
  // Replace "your_api_key" with your actual Shippo API key
  const apiKey = "your_api_key";
  const url = `https://api.goshippo.com/tracks/${trackingNumber}/`;

  fetch(url, {
    headers: {
      "Authorization": `ShippoToken ${apiKey}`
    }
  })
    .then(response => response.json())
    .then(data => {
      const shipmentInfo = document.getElementById("shipment-info");
      shipmentInfo.innerHTML = JSON.stringify(data, null, 2);
    })
    .catch(error => {
      console.error(error);
    });
}
