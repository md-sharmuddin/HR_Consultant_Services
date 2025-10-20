 function showSection(sectionId) {
      const sections = document.querySelectorAll("section");
      sections.forEach(sec => sec.classList.remove("active"));
      document.getElementById(sectionId).classList.add("active");

      // Close menu if open (mobile)
      const menu = document.querySelector(".items");
      menu.classList.remove("active");
    }

    function toggleMenu() {
      document.querySelector(".items").classList.toggle("active");
    }

//// Contact Page
const form = document.querySelector(".contact-form");
const popup = document.getElementById("successPopup");
const closePopup = document.getElementById("closePopup");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const res = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (res.ok) {
      form.reset();
      popup.style.display = "flex"; // show popup
    } else {
      alert("❌ Something went wrong. Please try again later.");
    }
  } catch (err) {
    alert("⚠️ Network error. Please check your connection.");
  }
});

closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});