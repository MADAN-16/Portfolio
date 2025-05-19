const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const message = document.getElementById("ta").value.trim();

  alert(`Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nMessage: ${message}`);

  form.reset();
});



  document.querySelectorAll('.nav-items').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').substring(1);

        document.querySelectorAll("section").forEach(sec => {
            sec.style.display = (sec.id === targetId) ? "block" : "none";
        });
    });
});


window.onload = () => {
    document.querySelectorAll("section").forEach(sec => {
        sec.style.display = (sec.id === "Home") ? "block" : "none";
    });
};


