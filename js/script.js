// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: true,
});

// Product data
const productData = {
  starter: {
    name: "Pakan Starter",
    image: "images/produk/MashMaggenzim.png",
    description:
      "Pakan khusus untuk anak ayam umur 0-3 minggu dengan formulasi nutrisi yang tepat untuk pertumbuhan awal yang optimal.",
    benefits: [
      "Protein tinggi 22-24% untuk pertumbuhan cepat",
      "Vitamin dan mineral lengkap untuk perkembangan tulang",
      "Prebiotik alami untuk kesehatan pencernaan",
      "Mudah dicerna untuk anak ayam",
      "Meningkatkan daya tahan tubuh",
    ],
    usage: [
      "Berikan pakan sebanyak 3-4 kali sehari",
      "Pastikan air minum selalu tersedia",
      "Berikan 20-25 gram per ekor per hari",
      "Hindari pemberian pakan berlebihan",
      "Simpan di tempat kering dan sejuk",
    ],
  },
  grower: {
    name: "Pakan Grower",
    image: "images/produk/CrumbMaggenzim.png",
    description:
      "Formula khusus untuk ayam umur 4-6 minggu dalam fase pertumbuhan dengan nutrisi seimbang untuk perkembangan optimal.",
    benefits: [
      "Protein 20-22% untuk pertumbuhan stabil",
      "Energi metabolisme yang seimbang",
      "Mendukung perkembangan otot dan tulang",
      "Meningkatkan konversi pakan",
      "Memperkuat sistem imun",
    ],
    usage: [
      "Berikan 2-3 kali sehari secara teratur",
      "Takaran 40-60 gram per ekor per hari",
      "Tambahkan air minum yang cukup",
      "Monitor pertumbuhan secara berkala",
      "Jaga kebersihan tempat pakan",
    ],
  },
  detector: {
    name: "Smart Detector",
    image: "images/produk/SDMaggenzim.png",
    description:
      "Alat monitoring kesehatan ayam berbasis teknologi IoT yang dapat mendeteksi kondisi kesehatan dan lingkungan kandang secara real-time.",
    benefits: [
      "Monitoring suhu dan kelembaban real-time",
      "Deteksi dini penyakit pada ayam",
      "Notifikasi otomatis via smartphone",
      "Data analytics untuk optimasi produksi",
      "Hemat biaya perawatan kesehatan",
    ],
    usage: [
      "Pasang sensor di area strategis kandang",
      "Hubungkan dengan aplikasi mobile",
      "Set parameter suhu dan kelembaban ideal",
      "Monitor data secara berkala",
      "Lakukan kalibrasi sensor setiap bulan",
    ],
  },
};

// Show product detail modal
function showProductDetail(productId) {
  const product = productData[productId];
  if (!product) return;

  const modalContent = document.getElementById("modalContent");
  modalContent.innerHTML = `
        <h2>${product.name}</h2>
        <img src="${product.image}" alt="${product.name}">
        <p>${product.description}</p>
        
        <a href="https://wa.me/6281287787857?text=Halo, saya tertarik dengan ${
          product.name
        }. Bisa tolong berikan informasi lebih lanjut?" 
           class="btn-whatsapp" target="_blank">
            <i class="fab fa-whatsapp"></i>
            Pesan Sekarang
        </a>
        
        <div class="benefits">
            <h3>Manfaat:</h3>
            <ul>
                ${product.benefits
                  .map((benefit) => `<li>${benefit}</li>`)
                  .join("")}
            </ul>
        </div>
        
        <div class="usage">
            <h3>Cara Penggunaan:</h3>
            <ol>
                ${product.usage.map((step) => `<li>${step}</li>`).join("")}
            </ol>
        </div>
    `;

  document.getElementById("productModal").style.display = "block";
}

// Close modal
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("productModal");
  const closeBtn = document.getElementsByClassName("close")[0];

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});

// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});

// Add loading animation
window.addEventListener("load", function () {
  document.body.classList.add("loaded");
});

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.style.background =
      "linear-gradient(135deg, rgba(44, 85, 48, 0.95), rgba(74, 124, 89, 0.95))";
    navbar.style.backdropFilter = "blur(10px)";
  } else {
    navbar.style.background = "linear-gradient(135deg, #2c5530, #4a7c59)";
    navbar.style.backdropFilter = "none";
  }
});

// Add some interactive animations
document.addEventListener("DOMContentLoaded", function () {
  // Add hover effect to feature cards
  const featureCards = document.querySelectorAll(".feature-card");
  featureCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-15px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });

  // Add click animation to CTA buttons
  const ctaButtons = document.querySelectorAll(
    ".cta-btn, .hero-cta, .contact-cta"
  );
  ctaButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      // Create ripple effect
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      ripple.classList.add("ripple");

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
});

// Add CSS for ripple effect
const style = document.createElement("style");
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .cta-btn, .hero-cta, .contact-cta {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);
