//All Donation btn click
// document.getElementById("donate-div").addEventListener("click", function () {
// console.log("clicked");

//single donate btn
document.getElementById("donate-btn").addEventListener("click", function () {
  //  console.log("yoyo");

  const input = parseFloat(document.getElementById("input").value);
  const addTaka = parseFloat(document.getElementById("add-taka").innerText);

  if (input <= 0 || isNaN(input)) {
    alert("Invalid Donation amount");
    return;
  }

  const newBalance = input + addTaka;

  document.getElementById("add-taka").innerText = newBalance;

  const lessAmount = parseFloat(
    document.getElementById("less-amount").innerText
  );

  const mainBalance = lessAmount - input;

  document.getElementById("less-amount").innerText = mainBalance;

  //history added
  const heading = document.getElementById("h2-tag").innerText;
  const historyItem = document.createElement("div");
  historyItem.className = "p-4 rounded-lg shadow-md border-2 mt-5";

  historyItem.innerHTML = `
    <p class="font-bold">${input} Taka is ${heading}</p>
    <p>Date:${new Date().toLocaleString()}</p>
  
  `;
  document.getElementById("history-items").appendChild(historyItem);
});
// });

// donation & History
const historyClicked = document.getElementById("history-btn");
const donation = document.getElementById("donate-div");

historyClicked.addEventListener("click", function () {
  historyClicked.classList.add("bg-[#B4F461]");

  donation.classList.remove("bg-[#B4F461]");

  document.getElementById("card-info").classList.add("hidden");
  document.getElementById("history-section").classList.remove("hidden");
});

donation.addEventListener("click", function () {
  donation.classList.add("bg-[#B4F461]");

  historyClicked.classList.remove("bg-[#B4F461]");

  document.getElementById("card-info").classList.remove("hidden");
  document.getElementById("history-section").classList.add("hidden");
});
