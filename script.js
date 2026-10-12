const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    primaryNav.classList.toggle("is-open", !isOpen);
  });

  primaryNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement && menuToggle.getAttribute("aria-expanded") === "true") {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      primaryNav.classList.remove("is-open");
    }
  });
}

const enquiryForm = document.querySelector("#enquiry-form");

if (enquiryForm instanceof HTMLFormElement) {
  enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!enquiryForm.reportValidity()) {
      return;
    }

    const formData = new FormData(enquiryForm);
    const name = String(formData.get("name")).trim();
    const phone = String(formData.get("phone")).trim();
    const service = String(formData.get("service"));
    const message = String(formData.get("message")).trim();
    const enquiry = [
      "Hello MAHIRA COMUNICATION, I have a service enquiry.",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      message ? `Message: ${message}` : "",
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/918688552145?text=${encodeURIComponent(enquiry)}`, "_blank", "noopener,noreferrer");
  });
}
