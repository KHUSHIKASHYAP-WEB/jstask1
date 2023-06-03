document.getElementById("showDateBtn").addEventListener("click", function () {
  var currentDate = new Date();
  var date = currentDate.toDateString();
  document.getElementById("output").textContent = date;
});

document
  .getElementById("showDateTimeBtn")
  .addEventListener("click", function () {
    var currentDateTime = new Date();
    var dateTime = currentDateTime.toLocaleString();
    document.getElementById("output").textContent = dateTime;
  });
