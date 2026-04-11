const button = document.getElementById("actionBtn");
const message = document.getElementById("message");

button.addEventListener("click", function(){
  message.textContent = "Welcome to the Business Directory";
});

const greet = () => {
  console.log("Hello");
};