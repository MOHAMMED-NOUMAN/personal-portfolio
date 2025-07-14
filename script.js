const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

const backToTopButton = document.getElementById('back-to-top');
  
  // Show/hide button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.remove('hidden');
    } else {
      backToTopButton.classList.add('hidden');
    }
  });
  
  // Smooth scroll to top when clicked
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

const text = "Hi, I'm Mohammed Nouman, an IT undergrad at MJCET passionate about software development and lifelong learning. I love connecting with fellow tech enthusiasts and in 2025, I won two hackathons:🏆HackRev and 🏆HackForge, which sharpened my problem-solving and teamwork skills. I'm now diving deeper into the exciting world of DevOps.";
        
        let currentIndex = 0;
        const typewriterElement = document.getElementById('typewriter');
        const typingSpeed = 50;
        
        function typeWriter() {
            if (currentIndex < text.length) {
                const currentText = text.substring(0, currentIndex + 1);
                typewriterElement.innerHTML = currentText + '<span id="cursor" class="cursor-blink">|</span>';
                currentIndex++;
                setTimeout(typeWriter, typingSpeed);
            } else {
                // Remove cursor after completion
                setTimeout(() => {
                    typewriterElement.innerHTML = text;
                }, 1000);
            }
        }
        
        // Start typewriter effect when page loads
        window.addEventListener('load', () => {
            setTimeout(typeWriter, 500);
        });
 window.addEventListener('load', () => {
    setTimeout(() => {
      const loader = document.getElementById('loader');
      if (loader) loader.style.display = 'none';
    }, 3000);
  });