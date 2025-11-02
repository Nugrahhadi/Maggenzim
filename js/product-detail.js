const productDetailData = {
  starter: {
    name: "Pakan Pre-Starter",
    image: "images/produk/MashMaggenzim.png",
    price: 260000,
    originalPrice: null,
    unit: "/25kg",
    description:
      "Pakan khusus untuk anak ayam umur 0-3 minggu dengan formulasi nutrisi yang tepat untuk pertumbuhan awal yang optimal. Mengandung protein tinggi dan vitamin lengkap untuk mendukung perkembangan ayam yang sehat.",
    specs: [
      { label: "Protein", value: "22-28%" },
      { label: "Lemak", value: "3-5%" },
      { label: "Serat", value: "Maks 5%" },
      { label: "Abu", value: "Maks 7%" },
      { label: "Kadar Air", value: "Maks 12%" },
    ],
    benefits: [
      {
        icon: "fas fa-seedling",
        title: "Pertumbuhan Optimal",
        description:
          "Mendukung pertumbuhan cepat dan sehat pada anak ayam umur 0-3 minggu",
      },
      {
        icon: "fas fa-shield-alt",
        title: "Imunitas Kuat",
        description:
          "Meningkatkan daya tahan tubuh terhadap penyakit dengan vitamin lengkap",
      },
      {
        icon: "fas fa-heartbeat",
        title: "Kesehatan Pencernaan",
        description:
          "Prebiotik alami untuk kesehatan saluran pencernaan yang optimal",
      },
      {
        icon: "fas fa-chart-line",
        title: "FCR Efisien",
        description:
          "Konversi pakan yang efisien untuk hasil maksimal dalam fase starter",
      },
    ],
    usage: [
      "Pastikan tempat pakan bersih dan kering sebelum pemberian",
      "Berikan pakan starter sejak hari pertama hingga umur 3 minggu",
      "Porsi: 20-25 gram per ekor per hari (umur 0-1 minggu)",
      "Porsi: 35-40 gram per ekor per hari (umur 2-3 minggu)",
      "Sediakan air minum yang bersih dan segar setiap saat",
      "Simpan pakan di tempat kering dan tertutup rapat",
    ],
    composition: [
      { ingredient: "Protein Kasar", percentage: "22-24%" },
      { ingredient: "Lemak Kasar", percentage: "3-5%" },
      { ingredient: "Serat Kasar", percentage: "Maks 5%" },
      { ingredient: "Abu", percentage: "Maks 7%" },
      { ingredient: "Kadar Air", percentage: "Maks 12%" },
      { ingredient: "Kalsium", percentage: "0.9-1.2%" },
      { ingredient: "Fosfor", percentage: "0.6-0.9%" },
      { ingredient: "Vitamin A", percentage: "15.000 IU/kg" },
      { ingredient: "Vitamin D3", percentage: "3.000 IU/kg" },
      { ingredient: "Vitamin E", percentage: "30 mg/kg" },
    ],
    whatsappText: "Halo, saya ingin memesan Pakan Pre-Starter",
  },
  grower: {
    name: "Pakan Starter",
    image: "images/produk/CrumbMaggenzim.png",
    price: 260000,
    originalPrice: null,
    unit: "/25kg",
    description:
      "Formula khusus untuk ayam umur 4-6 minggu dalam fase pertumbuhan dengan nutrisi seimbang untuk perkembangan optimal. Mengandung protein dan energi yang tepat untuk mendukung pertumbuhan stabil.",
    specs: [
      { label: "Protein", value: "22-28%" },
      { label: "Lemak", value: "3-5%" },
      { label: "Serat", value: "Maks 5%" },
      { label: "Abu", value: "Maks 7%" },
      { label: "Kadar Air", value: "Maks 12%" },
    ],
    benefits: [
      {
        icon: "fas fa-chart-line",
        title: "Pertumbuhan Stabil",
        description:
          "Mendukung pertumbuhan konsisten pada ayam umur 4-6 minggu",
      },
      {
        icon: "fas fa-dumbbell",
        title: "Pembentukan Otot",
        description:
          "Protein berkualitas tinggi untuk pembentukan massa otot yang optimal",
      },
      {
        icon: "fas fa-bone",
        title: "Tulang Kuat",
        description:
          "Kalsium dan fosfor seimbang untuk pembentukan tulang yang kuat",
      },
      {
        icon: "fas fa-tachometer-alt",
        title: "Metabolisme Efisien",
        description:
          "Meningkatkan efisiensi metabolisme untuk pertumbuhan maksimal",
      },
    ],
    usage: [
      "Berikan pakan grower mulai umur 4 minggu hingga 6 minggu",
      "Porsi: 50-60 gram per ekor per hari (umur 4-5 minggu)",
      "Porsi: 70-80 gram per ekor per hari (umur 6 minggu)",
      "Berikan dalam 3-4 kali pemberian per hari",
      "Pastikan transisi bertahap dari pakan starter ke grower",
      "Jaga kebersihan tempat pakan dan air minum",
    ],
    composition: [
      { ingredient: "Protein Kasar", percentage: "22-28%" },
      { ingredient: "Lemak Kasar", percentage: "3-5%" },
      { ingredient: "Serat Kasar", percentage: "Maks 5%" },
      { ingredient: "Abu", percentage: "Maks 7%" },
      { ingredient: "Kadar Air", percentage: "Maks 12%" },
      { ingredient: "Kalsium", percentage: "0.8-1.1%" },
      { ingredient: "Fosfor", percentage: "0.5-0.8%" },
      { ingredient: "Vitamin A", percentage: "12.000 IU/kg" },
      { ingredient: "Vitamin D3", percentage: "2.500 IU/kg" },
      { ingredient: "Vitamin E", percentage: "25 mg/kg" },
    ],
    whatsappText: "Halo, saya ingin memesan Pakan Starter",
  },
  detector: {
    name: "Smart Detector",
    image: "images/produk/SDMaggenzim.png",
    price: 220000,
    originalPrice: null,
    unit: "/unit",
    description:
      "Alat monitoring kesehatan ayam berbasis teknologi IoT yang dapat mendeteksi kondisi kesehatan dan lingkungan kandang secara real-time. Dilengkapi dengan sensor suhu, kelembaban, dan sistem notifikasi otomatis.",
    specs: [
      { label: "Jangkauan", value: "50-100 meter" },
      { label: "Battery Life", value: "6-12 bulan" },
      { label: "Connectivity", value: "WiFi + Bluetooth" },
      { label: "Sensors", value: "Suhu, Kelembaban, Gas" },
      { label: "Warranty", value: "2 tahun" },
    ],
    benefits: [
      {
        icon: "fas fa-mobile-alt",
        title: "Monitoring Real-time",
        description:
          "Pantau kondisi kandang 24/7 melalui smartphone atau tablet",
      },
      {
        icon: "fas fa-bell",
        title: "Notifikasi Otomatis",
        description:
          "Peringatan instan jika ada perubahan kondisi yang membahayakan",
      },
      {
        icon: "fas fa-chart-area",
        title: "Analisis Data",
        description:
          "Grafik dan laporan lengkap untuk analisis tren kesehatan ayam",
      },
      {
        icon: "fas fa-cloud",
        title: "Cloud Storage",
        description: "Data tersimpan aman di cloud dengan backup otomatis",
      },
    ],
    usage: [
      "Pasang Smart Detector di area strategis kandang",
      "Hubungkan ke jaringan WiFi dan download aplikasi Maggenzim",
      "Kalibrasi sensor sesuai kondisi kandang Anda",
      "Atur threshold normal untuk suhu, kelembaban, dan kualitas udara",
      "Aktifkan notifikasi push untuk mendapat peringatan real-time",
      "Periksa data dan analisis secara berkala melalui dashboard",
    ],
    composition: [
      { ingredient: "Sensor Suhu", percentage: "Range: -20°C to 60°C" },
      { ingredient: "Sensor Kelembaban", percentage: "Range: 0-100% RH" },
      { ingredient: "Sensor Gas NH3", percentage: "Range: 0-100 ppm" },
      { ingredient: "Sensor Gas H2S", percentage: "Range: 0-50 ppm" },
      { ingredient: "Microcontroller", percentage: "ESP32 Dual Core" },
      { ingredient: "Connectivity", percentage: "WiFi 802.11 b/g/n" },
      { ingredient: "Battery", percentage: "Li-ion 3000mAh" },
      { ingredient: "Display", percentage: "LCD 2.4 inch" },
      { ingredient: "Storage", percentage: "8GB Internal" },
      { ingredient: "Operating System", percentage: "FreeRTOS" },
    ],
    whatsappText: "Halo, saya ingin memesan Smart Detector",
  },
  "paket-starter": {
    name: "Paket Lengkap Starter",
    image: "images/produk/",
    price: 700000,
    originalPrice: 740000,
    unit: "/paket",
    description:
      "Paket lengkap untuk memulai peternakan ayam yang terdiri dari 2 jenis pakan (Pre-Starter, Starter) masing-masing 25kg. Hemat dan praktis untuk peternak pemula.",
    specs: [
      { label: "Isi Paket", value: "2 Jenis Pakan" },
      { label: "Pre-Starter", value: "25kg" },
      { label: "Starter", value: "25kg" },
      { label: "Bonus", value: "Panduan Ternak" },
    ],
    benefits: [
      {
        icon: "fas fa-box",
        title: "Paket Lengkap",
        description:
          "Semua kebutuhan pakan dari pre-starter hingga starter dalam satu paket",
      },
      {
        icon: "fas fa-piggy-bank",
        title: "Hemat Budget",
        description: "Lebih hemat Rp 40.000 dibanding beli satuan",
      },
      {
        icon: "fas fa-book",
        title: "Panduan Gratis",
        description: "Bonus panduan ternak lengkap untuk pemula",
      },
      {
        icon: "fas fa-shipping-fast",
        title: "Pengiriman Efisien",
        description: "Sekali kirim untuk semua kebutuhan pakan",
      },
    ],
    usage: [
      "Gunakan Pakan Pre-Starter untuk anak ayam umur 0-3 minggu",
      "Lanjutkan dengan Pakan Starter untuk umur 4-6 minggu",
      "Ikuti panduan ternak yang disertakan dalam paket",
      "Lakukan transisi pakan secara bertahap",
      "Konsultasi gratis dengan tim ahli jika diperlukan",
    ],
    composition: [
      { ingredient: "Pakan Starter 25kg", percentage: "Protein 22-28%" },
      { ingredient: "Pakan Grower 25kg", percentage: "Protein 22-28%" },
      { ingredient: "Konsultasi Gratis", percentage: "Selamanya" },
      { ingredient: "Garansi Kualitas", percentage: "100%" },
      { ingredient: "Support WhatsApp", percentage: "24/7" },
    ],
    whatsappText: "Halo, saya ingin memesan Paket Lengkap Ayam Broiler",
  },
};

function getUrlParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function formatCurrency(amount) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  })
    .format(amount)
    .replace("IDR", "Rp");
}

function updateProductDetails() {
  const productId = getUrlParameter("product") || "starter";
  const product = productDetailData[productId];

  if (!product) {
    console.error("Product not found:", productId);
    return;
  }

  document.getElementById("product-title").textContent = product.name;
  document.getElementById("breadcrumb-product").textContent = product.name;
  document.getElementById("main-product-image").src = product.image;
  document.getElementById("main-product-image").alt = product.name;
  document.getElementById("current-price").textContent = formatCurrency(
    product.price
  );
  document.getElementById("price-unit").textContent = product.unit;
  document.getElementById("product-desc").textContent = product.description;

  const originalPriceElement = document.getElementById("original-price");
  if (product.originalPrice) {
    originalPriceElement.textContent = formatCurrency(product.originalPrice);
    originalPriceElement.style.display = "inline";
  } else {
    originalPriceElement.style.display = "none";
  }

  const specsList = document.getElementById("product-specs-list");
  specsList.innerHTML = "";
  product.specs.forEach((spec) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${spec.label}:</strong> <span>${spec.value}</span>`;
    specsList.appendChild(li);
  });

  updateTotalPrice();

  updateWhatsAppLink();

  updateTabContent();

  hideCompositionTabForDetector();
}

function updateTabContent(activeTab = null) {
  const productId = getUrlParameter("product") || "starter";
  const product = productDetailData[productId];

  if (!product) return;

  if (activeTab) {
    switch (activeTab) {
      case "benefits":
        if (product.benefits) {
          const benefitsGrid = document.querySelector(
            "#benefits .benefits-grid"
          );
          if (benefitsGrid) {
            benefitsGrid.innerHTML = product.benefits
              .map(
                (benefit) => `
              <div class="benefit-item">
                <i class="${benefit.icon}"></i>
                <h4>${benefit.title}</h4>
                <p>${benefit.description}</p>
              </div>
            `
              )
              .join("");
          }
        }
        break;

      case "usage":
        if (product.usage) {
          const usageSteps = document.querySelector("#usage .usage-steps");
          if (usageSteps) {
            usageSteps.innerHTML = product.usage
              .map(
                (step, index) => `
              <div class="step">
                <div class="step-number">${index + 1}</div>
                <div class="step-content">
                  <p>${step}</p>
                </div>
              </div>
            `
              )
              .join("");
          }
        }
        break;

      case "ingredients":
        if (product.composition) {
          const compositionTable = document.querySelector(
            "#ingredients .nutrition-table table tbody"
          );
          if (compositionTable) {
            compositionTable.innerHTML = product.composition
              .map(
                (comp) => `
              <tr>
                <td>${comp.ingredient}</td>
                <td>${comp.percentage}</td>
              </tr>
            `
              )
              .join("");
          } else {
            const existingTable = document.querySelector(
              "#ingredients .nutrition-table table"
            );
            if (existingTable) {
              const tbody =
                existingTable.querySelector("tbody") || existingTable;
              tbody.innerHTML = product.composition
                .map(
                  (comp) => `
                <tr>
                  <td>${comp.ingredient}</td>
                  <td>${comp.percentage}</td>
                </tr>
              `
                )
                .join("");
            }
          }
        }
        break;
    }
  } else {
    if (product.benefits) {
      const benefitsGrid = document.querySelector("#benefits .benefits-grid");
      if (benefitsGrid) {
        benefitsGrid.innerHTML = product.benefits
          .map(
            (benefit) => `
          <div class="benefit-item">
            <i class="${benefit.icon}"></i>
            <h4>${benefit.title}</h4>
            <p>${benefit.description}</p>
          </div>
        `
          )
          .join("");
      }
    }

    if (product.usage) {
      const usageSteps = document.querySelector("#usage .usage-steps");
      if (usageSteps) {
        usageSteps.innerHTML = product.usage
          .map(
            (step, index) => `
          <div class="step">
            <div class="step-number">${index + 1}</div>
            <div class="step-content">
              <p>${step}</p>
            </div>
          </div>
        `
          )
          .join("");
      }
    }

    if (product.composition) {
      const compositionTable = document.querySelector(
        "#ingredients .nutrition-table table tbody"
      );
      if (compositionTable) {
        compositionTable.innerHTML = product.composition
          .map(
            (comp) => `
            <tr>
              <td>${comp.ingredient}</td>
              <td>${comp.percentage}</td>
            </tr>
          `
          )
          .join("");
      } else {
        const existingTable = document.querySelector(
          "#ingredients .nutrition-table table"
        );
        if (existingTable) {
          const tbody = existingTable.querySelector("tbody") || existingTable;
          tbody.innerHTML = product.composition
            .map(
              (comp) => `
            <tr>
              <td>${comp.ingredient}</td>
              <td>${comp.percentage}</td>
            </tr>
          `
            )
            .join("");
        }
      }
    }
  }
}

function hideCompositionTabForDetector() {
  const productId = getUrlParameter("product") || "starter";
  const compositionTab = document.querySelector(
    ".tab-btn[onclick=\"showTab('ingredients')\"]"
  );
  const compositionContent = document.getElementById("ingredients");

  if (productId === "detector") {
    if (compositionTab) {
      compositionTab.style.display = "none";
    }
    if (compositionContent) {
      compositionContent.style.display = "none";
    }
  } else {
    if (compositionTab) {
      compositionTab.style.display = "block";
    }
    if (compositionContent) {
      compositionContent.style.display = "block";
    }
  }
}

function changeImage(thumbnail) {
  const mainImage = document.getElementById("main-product-image");
  mainImage.src = thumbnail.src;

  document.querySelectorAll(".gallery-thumb").forEach((thumb) => {
    thumb.classList.remove("active");
  });
  thumbnail.classList.add("active");
}

function increaseQuantity() {
  const quantityInput = document.getElementById("quantity");
  const currentValue = parseInt(quantityInput.value);
  const maxValue = parseInt(quantityInput.max);

  if (currentValue < maxValue) {
    quantityInput.value = currentValue + 1;
    updateTotalPrice();
    updateWhatsAppLink();
  }
}

function decreaseQuantity() {
  const quantityInput = document.getElementById("quantity");
  const currentValue = parseInt(quantityInput.value);
  const minValue = parseInt(quantityInput.min);

  if (currentValue > minValue) {
    quantityInput.value = currentValue - 1;
    updateTotalPrice();
    updateWhatsAppLink();
  }
}

function updateTotalPrice() {
  const productId = getUrlParameter("product") || "starter";
  const product = productDetailData[productId];
  const quantity = parseInt(document.getElementById("quantity").value);
  const total = product.price * quantity;

  document.getElementById("total-amount").textContent = formatCurrency(total);
}

function updateWhatsAppLink() {
  const productId = getUrlParameter("product") || "starter";
  const product = productDetailData[productId];
  const quantity = parseInt(document.getElementById("quantity").value);
  const total = product.price * quantity;

  const message = `${
    product.whatsappText
  }%0A%0AJumlah: ${quantity} ${product.unit.replace(
    "/",
    ""
  )}%0ATotal: ${formatCurrency(total)}%0A%0ABisa tolong diproses?`;
  const whatsappLink = `https://wa.me/6281287787857?text=${message}`;

  document.getElementById("whatsapp-order").href = whatsappLink;
}

function showTab(tabName) {
  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.remove("active");
  });

  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  document.getElementById(tabName).classList.add("active");

  const activeButton = document.querySelector(
    `.tab-btn[onclick="showTab('${tabName}')"]`
  );
  if (activeButton) {
    activeButton.classList.add("active");
  }

  updateTabContent(tabName);
}

function openConsultation() {
  const productId = getUrlParameter("product") || "starter";
  const product = productDetailData[productId];
  const message = `Halo, saya ingin konsultasi tentang ${product.name}. Bisa tolong dijelaskan lebih detail?`;
  const whatsappLink = `https://wa.me/6281287787857?text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappLink, "_blank");
}

document.addEventListener("DOMContentLoaded", function () {
  updateProductDetails();
  updateTabContent();

  showTab("ingredients");

  document.getElementById("quantity").addEventListener("input", function () {
    updateTotalPrice();
    updateWhatsAppLink();
  });

  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }
});

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

document.addEventListener("DOMContentLoaded", function () {
  const orderButton = document.getElementById("whatsapp-order");

  orderButton.addEventListener("click", function () {
    const originalText = this.innerHTML;
    this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengarahkan...';
    this.style.pointerEvents = "none";

    setTimeout(() => {
      this.innerHTML = originalText;
      this.style.pointerEvents = "auto";
    }, 2000);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const mainImage = document.getElementById("main-product-image");

  mainImage.addEventListener("click", function () {
    const modal = document.createElement("div");
    modal.className = "image-zoom-modal";
    modal.innerHTML = `
            <div class="zoom-backdrop">
                <img src="${this.src}" alt="${this.alt}">
                <button class="zoom-close">&times;</button>
            </div>
        `;

    document.body.appendChild(modal);
    document.body.style.overflow = "hidden";

    const closeBtn = modal.querySelector(".zoom-close");
    const backdrop = modal.querySelector(".zoom-backdrop");

    closeBtn.addEventListener("click", closeModal);
    backdrop.addEventListener("click", function (e) {
      if (e.target === backdrop) closeModal();
    });

    function closeModal() {
      document.body.removeChild(modal);
      document.body.style.overflow = "auto";
    }
  });
});

const zoomStyles = document.createElement("style");
zoomStyles.textContent = `
    .image-zoom-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        z-index: 3000;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .zoom-backdrop {
        position: relative;
        max-width: 90%;
        max-height: 90%;
    }
    
    .zoom-backdrop img {
        width: 100%;
        aspect-ratio: 4 / 5;
        object-fit: cover;
        border-radius: 10px;
    }
    
    .zoom-close {
        position: absolute;
        top: -10px;
        right: -10px;
        background: white;
        border: none;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
    }
`;
document.head.appendChild(zoomStyles);
