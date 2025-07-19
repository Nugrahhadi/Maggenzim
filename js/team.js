// Team Page JavaScript

// Initialize AOS animations
document.addEventListener("DOMContentLoaded", function () {
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }
});

// Team card interaction enhancements
document.addEventListener("DOMContentLoaded", function () {
  const teamCards = document.querySelectorAll(".team-card");

  teamCards.forEach((card) => {
    // Add click functionality for mobile devices
    card.addEventListener("click", function () {
      // Toggle flip state on mobile
      if (window.innerWidth <= 768) {
        this.classList.toggle("flipped");
      }
    });

    // Add keyboard navigation support
    card.setAttribute("tabindex", "0");

    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.classList.toggle("flipped");
      }
    });

    // Add focus management
    card.addEventListener("focus", function () {
      if (window.innerWidth <= 768) {
        this.classList.add("focused");
      }
    });

    card.addEventListener("blur", function () {
      this.classList.remove("focused");
    });
  });
});

// Social links tracking (for analytics)
document.addEventListener("DOMContentLoaded", function () {
  const socialLinks = document.querySelectorAll(".social-links a");

  socialLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const platform = this.querySelector("i").classList.contains(
        "fa-instagram"
      )
        ? "Instagram"
        : this.querySelector("i").classList.contains("fa-linkedin")
        ? "LinkedIn"
        : "Other";
      const memberName =
        this.closest(".team-card").querySelector("h3").textContent;

      // Analytics tracking (if implemented)
      if (typeof gtag !== "undefined") {
        gtag("event", "social_click", {
          platform: platform,
          member: memberName,
        });
      }

      console.log(`Social link clicked: ${platform} - ${memberName}`);
    });
  });
});

// Smooth animations for value items
document.addEventListener("DOMContentLoaded", function () {
  const valueItems = document.querySelectorAll(".value-item");

  valueItems.forEach((item, index) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-15px) scale(1.02)";
    });

    item.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });
});

// Intersection Observer for animations
document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");
      }
    });
  }, observerOptions);

  // Observe team cards and value items
  document.querySelectorAll(".team-card, .value-item").forEach((el) => {
    observer.observe(el);
  });
});

// Lazy loading for team member images
document.addEventListener("DOMContentLoaded", function () {
  const teamImages = document.querySelectorAll(".member-image img");

  const imageObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.classList.add("loaded");
          imageObserver.unobserve(img);
        }
      }
    });
  });

  teamImages.forEach((img) => {
    imageObserver.observe(img);
  });
});

// Enhanced card flip functionality for mobile
document.addEventListener("DOMContentLoaded", function () {
  let touchStartY = 0;
  let touchEndY = 0;

  const teamCards = document.querySelectorAll(".team-card");

  teamCards.forEach((card) => {
    // Touch events for mobile interaction
    card.addEventListener("touchstart", function (e) {
      touchStartY = e.changedTouches[0].screenY;
    });

    card.addEventListener("touchend", function (e) {
      touchEndY = e.changedTouches[0].screenY;

      // Simple tap detection (no significant vertical movement)
      if (Math.abs(touchEndY - touchStartY) < 10) {
        this.classList.toggle("mobile-flipped");
      }
    });
  });
});

// Performance monitoring
document.addEventListener("DOMContentLoaded", function () {
  // Monitor page load performance
  window.addEventListener("load", function () {
    if ("performance" in window) {
      const loadTime =
        performance.timing.loadEventEnd - performance.timing.navigationStart;
      console.log(`Team page loaded in ${loadTime}ms`);
    }
  });
});

// Error handling for missing images
document.addEventListener("DOMContentLoaded", function () {
  const teamImages = document.querySelectorAll(".member-image img");

  teamImages.forEach((img) => {
    img.addEventListener("error", function () {
      // Replace with placeholder if image fails to load
      this.src = "images/team/placeholder.jpg";
      this.alt = "Team member placeholder";
      console.warn("Failed to load team member image:", this.src);
    });
  });
});

// Add dynamic hover effects
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".team-card");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      // Add subtle animation to other cards
      cards.forEach((otherCard) => {
        if (otherCard !== this) {
          otherCard.style.opacity = "0.7";
          otherCard.style.transform = "scale(0.98)";
        }
      });
    });

    card.addEventListener("mouseleave", function () {
      // Reset all cards
      cards.forEach((otherCard) => {
        otherCard.style.opacity = "1";
        otherCard.style.transform = "scale(1)";
      });
    });
  });
});

// CTA button interaction
document.addEventListener("DOMContentLoaded", function () {
  const ctaButton = document.querySelector(".cta-button");

  if (ctaButton) {
    ctaButton.addEventListener("click", function (e) {
      // Add click animation
      this.style.transform = "scale(0.98)";

      setTimeout(() => {
        this.style.transform = "translateY(-3px)";
      }, 150);

      // Analytics tracking
      if (typeof gtag !== "undefined") {
        gtag("event", "cta_click", {
          button_text: "Konsultasi dengan Tim Ahli",
          page: "team",
        });
      }
    });
  }
});

// Add CSS styles dynamically for mobile enhancements
const mobileStyles = document.createElement("style");
mobileStyles.textContent = `
    @media (max-width: 768px) {
        .team-card.mobile-flipped .card-inner {
            transform: rotateY(180deg);
        }
        
        .team-card.focused {
            outline: 3px solid #25d366;
            outline-offset: 2px;
        }
        
        .member-image img.loaded {
            opacity: 1;
            transition: opacity 0.3s ease;
        }
        
        .member-image img:not(.loaded) {
            opacity: 0.5;
        }
    }
    
    .value-item.animated {
        animation: slideInFromBottom 0.6s ease forwards;
    }
    
    @keyframes slideInFromBottom {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .team-card {
        transition: opacity 0.3s ease, transform 0.3s ease;
    }
`;
document.head.appendChild(mobileStyles);
