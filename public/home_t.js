// Smooth scroll when buttons clicked
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      window.scrollBy({ top: 600, behavior: 'smooth' });
    });
  });
  
  // Simulate Booking action
  function bookDelivery() {
    alert("Booking feature coming soon!");
  }
  
  // Simulate Tracking action
  function trackBox() {
    alert("Tracking feature coming soon!");
  }
  
  // Scroll fade-in animations
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('section, .step').forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
  });
  
  
  // Ripple effect on buttons
  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function (e) {
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      this.appendChild(ripple);
  
      const maxDim = Math.max(this.clientWidth, this.clientHeight);
      ripple.style.width = ripple.style.height = `${maxDim}px`;
      ripple.style.left = `${e.offsetX - maxDim / 2}px`;
      ripple.style.top = `${e.offsetY - maxDim / 2}px`;
  
      ripple.addEventListener('animationend', () => {
        ripple.remove();
      });
    });
  });
  