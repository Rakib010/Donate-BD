function calculateDonation(value1, value2) {
  const input = parseFloat(document.getElementById(value1).value);
  const addTaka = parseFloat(document.getElementById(value2).innerText);

  if (input <= 0 || isNaN(input)) {
    alert("Invalid Donation amount");
    return;
  }
  const newBalance = input + addTaka;

  addTaka.innerText = newBalance;

  const lessAmount = parseFloat(
    document.getElementById("less-amount").innerText
  );

  const mainBalance = lessAmount - input;

 return document.getElementById("less-amount").innerText = mainBalance;

  
}
