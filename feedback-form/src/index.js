document
  .getElementById("feedback-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    console.log("Form Data Submitted:", formData);
    alert("Форма успішно відправлена!");
  });
