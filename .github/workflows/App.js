// Initialize Firebase
var firebaseConfig = {
  // Add your Firebase config here
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

const trackingForm = document.getElementById("tracking-form");
const trackingNumberInput = document.getElementById("tracking-number");
const trackingTableBody = document.getElementById("tracking-table-body");

trackingForm.addEventListener("submit", e => {
  e.preventDefault();

  const trackingNumber = trackingNumberInput.value;

  database.ref("tracking_numbers").push({
    tracking_number: trackingNumber,
    status: "pending"
  });

  trackingNumberInput.value = "";
});

database.ref("tracking_numbers").on("value", snapshot => {
  trackingTableBody.innerHTML = "";

  snapshot.forEach(childSnapshot => {
    const trackingNumber = childSnapshot.val().tracking_number;
    const status = childSnapshot.val().status;
    const key = childSnapshot.key;

    const row = document.createElement("tr");

    const trackingNumberCell = document.createElement("td");
    trackingNumberCell.innerHTML = trackingNumber;
    row.appendChild(trackingNumberCell);

    const statusCell = document.createElement("td");
    statusCell.innerHTML = status;
    row.appendChild(statusCell);

    const deleteCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", () => {
      database.ref("tracking_numbers").child(key).remove();
    });
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);

    trackingTableBody.appendChild(row);
  });
});
