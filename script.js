 // Fade-in animation on scroll
    document.addEventListener('DOMContentLoaded', function() {
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('appear');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });
        
        fadeElements.forEach(element => {
            observer.observe(element);
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
        const hamburger = document.querySelector('.hamburger');
        const checkbox = document.querySelector('.hamburger input');
        const mobileNav = document.querySelector('.mobile-nav');
        const body = document.body;

        // Toggle menu function
        function toggleMenu(isOpening) {
          const wasChecked = checkbox.checked;
          checkbox.checked = typeof isOpening === 'boolean' ? isOpening : !wasChecked;
          
          // Sync menu state with checkbox
          if (checkbox.checked) {
            mobileNav.style.transform = 'translateY(0)';
            body.classList.add('no-scroll');
          } else {
            mobileNav.style.transform = 'translateY(-100%)';
            body.classList.remove('no-scroll');
          }
        }

        // Hamburger click handler
        hamburger.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleMenu();
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
          if (!mobileNav.contains(e.target) && !hamburger.contains(e.target)) {
            toggleMenu(false);
          }
        });

        // Close menu when clicking nav links
        document.querySelectorAll('.nav-list a').forEach(link => {
          link.addEventListener('click', (e) => {
            e.preventDefault();
            toggleMenu(false);
            // Add actual navigation logic here
          });
        });

        // Touch device support
        document.addEventListener('touchstart', (e) => {
          if (!mobileNav.contains(e.target) && !hamburger.contains(e.target)) {
            toggleMenu(false);
          }
        });
    });