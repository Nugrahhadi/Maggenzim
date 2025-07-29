// Mobile Functionality - Hamburger Menu & Team Card Flip
document.addEventListener("DOMContentLoaded", function () {
  // Hamburger Menu Functionality
  function initHamburgerMenu() {
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");
    const mobileMenuLinks = document.querySelectorAll(".mobile-menu a");

    if (hamburger && mobileMenu) {
      // Toggle mobile menu
      hamburger.addEventListener("click", function () {
        this.classList.toggle("active");
        mobileMenu.classList.toggle("active");
        document.body.classList.toggle("menu-open");
      });

      // Close menu when clicking on links
      mobileMenuLinks.forEach((link) => {
        link.addEventListener("click", function () {
          hamburger.classList.remove("active");
          mobileMenu.classList.remove("active");
          document.body.classList.remove("menu-open");
        });
      });

      // Close menu when clicking outside
      document.addEventListener("click", function (e) {
        if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
          hamburger.classList.remove("active");
          mobileMenu.classList.remove("active");
          document.body.classList.remove("menu-open");
        }
      });

      // Close menu on window resize if desktop
      window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
          hamburger.classList.remove("active");
          mobileMenu.classList.remove("active");
          document.body.classList.remove("menu-open");
        }
      });
    }
  }

  // Team Card Flip Functionality (Mobile Only)
  function initTeamCardFlip() {
    const teamCards = document.querySelectorAll(".team-card");

    teamCards.forEach((card) => {
      card.addEventListener("click", function () {
        // Only on mobile devices
        if (window.innerWidth <= 768) {
          this.classList.toggle("flipped");
        }
      });

      // Add keyboard navigation
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          if (window.innerWidth <= 768) {
            this.classList.toggle("flipped");
          }
        }
      });
    });
  }

  // Smooth scrolling for anchor links
  function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");

        if (href === "#") return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  }

  // Touch gesture support for cards
  function initTouchGestures() {
    const teamCards = document.querySelectorAll(".team-card");

    teamCards.forEach((card) => {
      let startY = 0;
      let startX = 0;

      card.addEventListener("touchstart", function (e) {
        startY = e.touches[0].clientY;
        startX = e.touches[0].clientX;
      });

      card.addEventListener("touchend", function (e) {
        const endY = e.changedTouches[0].clientY;
        const endX = e.changedTouches[0].clientX;
        const diffY = Math.abs(endY - startY);
        const diffX = Math.abs(endX - startX);

        // If it's a tap (minimal movement)
        if (diffY < 20 && diffX < 20) {
          if (window.innerWidth <= 768) {
            this.classList.toggle("flipped");
          }
        }
      });
    });
  }

  // Handle window resize for responsive behavior
  function initResponsiveHandlers() {
    let resizeTimer;

    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        // Reset card flips on desktop
        if (window.innerWidth > 768) {
          const flippedCards = document.querySelectorAll(".team-card.flipped");
          flippedCards.forEach((card) => {
            card.classList.remove("flipped");
          });
        }
      }, 150);
    });
  }

  // Loading animations
  function initLoadingAnimations() {
    const teamCards = document.querySelectorAll(".team-card");

    // Add staggered animation delay
    teamCards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
    });

    // Intersection Observer for animations
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateY(0)";
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        }
      );

      teamCards.forEach((card) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(card);
      });
    }
  }

  // Accessibility improvements
  function initAccessibility() {
    const teamCards = document.querySelectorAll(".team-card");

    teamCards.forEach((card) => {
      // Add ARIA labels
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.setAttribute(
        "aria-label",
        "Klik untuk melihat informasi social media"
      );

      // Add visual feedback for keyboard navigation
      card.addEventListener("focus", function () {
        this.style.outline = "3px solid #25d366";
        this.style.outlineOffset = "2px";
      });

      card.addEventListener("blur", function () {
        this.style.outline = "none";
      });
    });
  }

  // Performance optimization - debounce function
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Initialize all functionality
  function init() {
    try {
      initHamburgerMenu();
      initTeamCardFlip();
      initSmoothScrolling();
      initTouchGestures();
      initResponsiveHandlers();
      initLoadingAnimations();
      initAccessibility();

      console.log("Mobile functionality initialized successfully");
    } catch (error) {
      console.error("Error initializing mobile functionality:", error);
    }
  }

  // Start initialization
  init();
});

// Prevent double-tap zoom on team cards
document.addEventListener("touchend", function (e) {
  if (e.target.closest(".team-card")) {
    e.preventDefault();
  }
});

// Add CSS for menu-open state
const style = document.createElement("style");
style.textContent = `
    body.menu-open {
        overflow: hidden;
        position: fixed;
        width: 100%;
        height: 100%;
    }
    
    .team-card.flipped .card-inner {
        transform: rotateY(180deg);
    }
    
    @media (max-width: 768px) {
        .team-card:focus {
            outline: 3px solid #25d366;
            outline-offset: 2px;
        }
    }
`;
document.head.appendChild(style);
