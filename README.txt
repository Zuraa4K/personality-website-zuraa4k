ZURAA4K — WEBSITE LINK PRIBADI
==============================

STRUKTUR FILE
- index.html  : struktur dan isi halaman
- style.css   : tema hitam-putih, animasi, dan tampilan responsif HP
- script.js   : tahun footer otomatis

CARA MENJALANKAN
1. Ekstrak folder Zuraa4K-Website.
2. Buka folder tersebut.
3. Klik dua kali index.html untuk melihat website di browser.
4. Untuk mengubah tampilan, edit style.css.

CARA MENGGANTI LINK
Buka index.html, lalu cari alamat contoh berikut dan ganti dengan link milikmu:
- https://discord.com/                 -> link invite Discord kamu
- https://www.tiktok.com/@username     -> link TikTok kamu
- link Discord pada "Link Bagi-Bagi"   -> link giveaway/bagi-bagi kamu
- https://www.instagram.com/username/  -> link Instagram kamu
- https://www.youtube.com/@username    -> link YouTube kamu
- emailkamu@example.com               -> email kamu

CARA MENGGANTI NAMA / BIO
Di index.html, cari:
- Zuraa4K
- Just me, my links, and a little corner of the internet.
Lalu ubah sesuai keinginan.

CARA MENGGANTI AVATAR DENGAN FOTO
Di index.html, cari:
<div class="avatar">Z<span class="avatar-dot"></span></div>

Ganti dengan:
<div class="avatar photo-avatar"><img src="profile.jpg" alt="Foto profil Zuraa4K"><span class="avatar-dot"></span></div>

Simpan foto kamu dengan nama profile.jpg di folder yang sama. Tambahkan CSS berikut di akhir style.css:
.photo-avatar { display: block; }
.photo-avatar img { width: 100%; height: 100%; object-fit: cover; border-radius: inherit; }

CATATAN
Link yang ada sekarang masih contoh. Ganti semuanya sebelum website dibagikan.
Untuk dipublikasikan online, kamu bisa unggah folder ini ke layanan hosting statis seperti GitHub Pages, Netlify, atau Vercel.
