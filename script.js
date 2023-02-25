function idCard() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var address = document.getElementById("address").value;
  var age = document.getElementById("age").value;
  var age = parseInt(document.getElementById("age").value);
  var phoneNumber = document.getElementById("phoneNumber").value;
  var phoneNumber = parseInt(document.getElementById("phoneNumber").value);

  document.getElementById("postFullName").innerHTML =
    firstName + " " + lastName;
  document.getElementById("postAddress").innerHTML = "Address: " + address;

  var numberArray = [];
  {
    numberArray.push(age, phoneNumber);
    for (var i = 0; i < numberArray.length; i++) {
      if (numberArray[i] <= 100) {
        document.getElementById("postAge").innerHTML = "Age: " + age;
      } else if (numberArray[i] > 100) {
        document.getElementById("postPhoneNumber").innerHTML =
          "Phone Number: " + phoneNumber;
      }
    }
  }
}
