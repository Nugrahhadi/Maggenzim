// FAQ JavaScript

document.addEventListener("DOMContentLoaded", function () {
  // Initialize FAQ functionality
  initializeFAQ();

  // Initialize AOS if available
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }
});

function initializeFAQ() {
  // FAQ Question Toggle
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
      const faqItem = this.parentElement;
      const isActive = faqItem.classList.contains("active");

      // Pada mobile - hanya toggle item yang diklik
      if (window.innerWidth <= 768) {
        faqItem.classList.toggle("active");
      } else {
        // Pada desktop - tutup yang lain, buka yang diklik
        // Close all other FAQ items
        document.querySelectorAll(".faq-item").forEach((item) => {
          if (item !== faqItem) {
            item.classList.remove("active");
          }
        });

        // Toggle current FAQ item
        if (isActive) {
          faqItem.classList.remove("active");
        } else {
          faqItem.classList.add("active");
        }
      }
    });
  });

  // Category Filter
  const categoryBtns = document.querySelectorAll(".category-btn");
  const faqItems = document.querySelectorAll(".faq-item");

  categoryBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const category = this.dataset.category;

      // Update active category button
      categoryBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      // Filter FAQ items
      faqItems.forEach((item) => {
        const itemCategory = item.dataset.category;

        if (category === "all" || itemCategory === category) {
          item.classList.remove("hidden");
          // Add animation delay
          setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
          }, 50);
        } else {
          item.style.opacity = "0";
          item.style.transform = "translateY(-10px)";
          setTimeout(() => {
            item.classList.add("hidden");
          }, 300);
        }
      });

      // Close all open FAQ items when switching category
      faqItems.forEach((item) => {
        item.classList.remove("active");
      });

      // Scroll to FAQ items section
      const faqItemsSection = document.querySelector(".faq-items");
      if (faqItemsSection) {
        faqItemsSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Smooth scrolling for anchor links
  addSmoothScrolling();
}

function addSmoothScrolling() {
  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Add loading states for buttons
document.addEventListener("DOMContentLoaded", function () {
  const ctaButton = document.querySelector(".faq-cta .cta-button");

  if (ctaButton) {
    ctaButton.addEventListener("click", function () {
      const originalText = this.innerHTML;
      this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengarahkan...';
      this.style.pointerEvents = "none";

      setTimeout(() => {
        this.innerHTML = originalText;
        this.style.pointerEvents = "auto";
      }, 2000);
    });
  }
});

// Add keyboard navigation
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    // Close all open FAQ items
    document.querySelectorAll(".faq-item.active").forEach((item) => {
      item.classList.remove("active");
    });
  }
});

// Add analytics tracking (optional)
function trackFAQInteraction(action, category, question) {
  // This function can be used to track user interactions
  // with Google Analytics or other analytics services
  console.log(`FAQ ${action}:`, { category, question });
}

// Track FAQ clicks
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", function () {
      const faqItem = this.parentElement;
      const category = faqItem.dataset.category;
      const questionText = this.querySelector("h3").textContent;

      trackFAQInteraction("click", category, questionText);
    });
  });
});
