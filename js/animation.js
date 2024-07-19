document.addEventListener("DOMContentLoaded", () => {
    const mairieSection = document.querySelector("#mairie");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          mairieSection.classList.add("animate__fadeInLeft");
          observer.unobserve(mairieSection);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(mairieSection);
  });