LOFI CHILL v2 - VERSI MP3
=========================
File HTML ini memutar 25 file MP3 kamu sendiri dari folder music/
di sebelah file HTML ini. File MP3-nya TIDAK ada di dalam HTML ini.

CARA PAKAI
1. Extract Music.zip yang sudah kamu punya.
2. Copy 25 file MP3 hasil extract ke dalam folder music/ di sini
   (di sebelah file "Lofi Chill v2 MP3.html").
3. Buka "Lofi Chill v2 MP3.html" di browser (Chrome / Edge / Firefox).
   - Kalau browser memblokir file lokal, jalankan dari terminal di
     folder ini:  python3 -m http.server 8000
     lalu buka http://localhost:8000
4. Di web, buka panel Playlist, scroll ke "MP3 Saya - 25 lagu",
   ketuk judul lagunya untuk memutar.

CATATAN
- 3 file yang namanya ada tanda "-" panjang (Letto, Peterpan,
  ST 12) kadang hasil extract-nya bernama "... #U2013 ...".
  Tidak apa-apa, player ini otomatis mencoba kedua nama itu.
- Lagu generatif "Lofi Saya" dan playlist YouTube masih ada di
  panel yang sama. Kalau MP3 diputar, musik generatif dan YouTube
  otomatis berhenti, begitu juga sebaliknya.
- Jalankan server Node: npm install lalu npm start, buka http://localhost:8000
- Buka file ini di browser biasa, bukan di penampil file HP yang
  hanya membuka satu file, karena player ini butuh folder music/
  di sebelahnya.
