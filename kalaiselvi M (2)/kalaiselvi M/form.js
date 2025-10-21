window.onload = function () {
  const form = document.getElementById("orderForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

   
    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const coffee = form.elements["coffee"].value;
    const message = form.elements["message"].value;

    const order = {
      name,
      email,
      coffee,
      message,
      time: new Date().toLocaleString(),
    };

    
    localStorage.setItem("userOrder", JSON.stringify(order));

    
    const msg = document.getElementById("successMessage");
    msg.style.display = "block";

   
    form.reset();

    
    setTimeout(() => {
      msg.style.display = "none";
      window.location.href = "order-details.html";
    }, 3000);
  });
};
