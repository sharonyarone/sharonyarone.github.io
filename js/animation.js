const handleIntersection = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Récupérer l'animation spécifique de l'attribut data-animation
        const animationClass = entry.target.getAttribute('data-animation');
        // Ajouter la classe d'animation
        entry.target.classList.add(animationClass);
        // Optionnel : arrêtez d'observer l'élément une fois l'animation appliquée
        observer.unobserve(entry.target);
      }
    });
  };
  
  // Créer un nouvel observateur
  const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });
  
  // Sélectionner tous les éléments avec une animation
  const targets = document.querySelectorAll('[data-animation]');
  targets.forEach(target => {
    observer.observe(target);
  });