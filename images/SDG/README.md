# Folder SDG Images

Folder ini berisi file-file gambar GIF untuk ikon SDG (Sustainable Development Goals) yang digunakan pada halaman Keberlanjutan.

## Struktur File yang Diperlukan:

```
images/SDG/
├── sdg-1.gif    # SDG 1: Tanpa Kemiskinan
├── sdg-2.gif    # SDG 2: Tanpa Kelaparan
├── sdg-3.gif    # SDG 3: Kesehatan yang Baik
├── sdg-8.gif    # SDG 8: Pekerjaan Layak
├── sdg-9.gif    # SDG 9: Industri & Inovasi
└── sdg-13.gif   # SDG 13: Tindakan Iklim
```

## Cara Menggunakan:

1. Unduh file GIF resmi SDG dari website UN SDG
2. Simpan dengan nama sesuai format di atas
3. Ukuran optimal: 80x80px
4. Format: GIF atau PNG dengan background transparan

## Update HTML:

Setelah menambahkan file gambar, ganti placeholder di keberlanjutan.html:

```html
<!-- Dari: -->
<div class="sdg-placeholder">SDG 1</div>

<!-- Menjadi: -->
<img src="images/SDG/sdg-1.gif" alt="SDG 1: Tanpa Kemiskinan" />
```

Lakukan hal yang sama untuk semua 6 SDG yang ditampilkan.
