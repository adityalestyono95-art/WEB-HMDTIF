// Data halaman beranda, diambil apa adanya dari prototipe desain
// (/tmp/app.jsx) supaya teks dan urutannya identik.
//
// Catatan: ALL_NEWS_ITEMS masih data statis dari booklet, bukan dari
// GET /api/news. Ganti ke API saat backend siap dipakai untuk beranda.

import { Phone, MessageCircle, ClipboardList } from "lucide-react";

export const OFFICIAL_VISI = 'Mewujudkan lingkungan mahasiswa Departemen Teknik Informatika yang saling terhubung, berkembang secara profesional, dan didukung advokasi yang responsif dan suportif.';

export const OFFICIAL_MISI = [
  'Membangun ruang diskusi yang terarah dan suportif bagi mahasiswa DTIF.',
  'Menyelenggarakan program pengembangan keprofesian yang relevan dengan kebutuhan Mahasiswa DTIF.',
  'Menghadirkan advokasi yang responsif dan solutif yang tertuju pada kebutuhan mahasiswa DTIF.',
  'Mendorong partisipasi aktif dan kolaboratif sebagai wadah pengembangan karakter mahasiswa DTIF.',
];

export const WELCOMING_SPEECHES = [
  {
    id: 'ketua',
    name: 'M. Raka Pratama Wijaya',
    photo: '/images/KAHIM-HMDTIF.png',
    role: 'Ketua Himpunan Mahasiswa Departemen Teknik Informatika (HMDTIF) FILKOM UB 2026',
    nim: 'NIM. 235150200111042',
    greeting: 'Say Hello to BAHTERA GATRA — rumah kolaborasi seluruh mahasiswa DTIF! ⛵✨',
    paragraphs: [
      'Tumbuh Bersama, Satukan Gatra!',
      'Di Kabinet Bahtera Gatra 2026, kami membawa visi besar untuk mewujudkan lingkungan mahasiswa Departemen Teknik Informatika yang saling terhubung, berkembang secara profesional, dan didukung advokasi yang responsif serta suportif.',
      'Melalui sinergi 5 Departemen (INFOKOM, ADVOKESMA, PSDM, BISNIS, PIT) dan lembaga legislatif SENAT, kami menghadirkan ruang diskusi terarah, pengembangan keprofesian IT, serta pelayanan mahasiswa yang solutif.',
      'Mari berlayar dan bertumbuh bersama HMDTIF FILKOM UB! 🚀🌊',
    ],
    avatarBg: 'linear-gradient(180deg, #2F5470 0%, #164A6E 100%)',
    badge: 'KETUA HIMPUNAN',
  },
  {
    id: 'wakil',
    name: 'Nadia Putri Maharani',
    role: 'Wakil Ketua Himpunan Mahasiswa Departemen Teknik Informatika (HMDTIF) FILKOM UB 2026',
    nim: 'NIM. 235150201111018',
    greeting: 'Bahtera Gatra hadir sebagai wadah pengembangan karakter dan kolaborasi aktif mahasiswa DTIF. 🌟',
    paragraphs: [
      'Sinergi Internal, Akselerasi Karya!',
      'Mulai dari pendampingan akademik DISMIK KRS dan Crisis Center KRS SA, akselerasi karier lewat INFORCE dan MAGANG GO!, hingga ruang berekspresi di TEKRA, BUFFEST, dan KomaTitik Podcast — semuanya dirancang untuk mahasiswa DTIF.',
      'Jangan ragu untuk berpartisipasi aktif, memanfaatkan seluruh kanal layanan Advokesma, dan menjadi bagian dari perjalanan Kabinet Bahtera Gatra 2026.',
      'Satu Asa, Bahtera Gatra! Jaya Informatika! 💫✨',
    ],
    avatarBg: 'linear-gradient(180deg, #2E8FA6 0%, #164A6E 100%)',
    badge: 'WAKIL KETUA HIMPUNAN',
  },
];

export const ADVO_KESMA_LINKS = [
  {
    id: 'advokasi',
    title: 'Narahubung Advokasi',
    desc: 'Layanan narahubung Advokesma yang dapat dihubungi untuk menyampaikan aspirasi, keluhan, maupun kebutuhan bantuan mahasiswa terkait akademik da...',
    fullDesc:
      'Kanal Advokesma resmi yang bertindak responsif dalam menyuarakan, mengoordinasikan, dan menjembatani segala kebutuhan serta permasalahan akademik maupun non-akademik mahasiswa DTIF dengan pihak birokrasi.',
    icon: Phone,
    contact: 'wa.me/6281234567801 ( Hotline Kanal Advokesma DTIF )',
  },
  {
    id: 'maba',
    title: 'Narahubung Maba',
    desc: 'Layanan pendampingan bagi mahasiswa baru untuk membantu proses adaptasi perkuliahan, informasi akademik, maupun pertanyaan seputar lingkungan kam...',
    fullDesc:
      'Layanan pendampingan khusus bagi mahasiswa baru Departemen Teknik Informatika (terintegrasi dengan rangkaian INTRIVIA & SENADA) untuk membantu adaptasi perkuliahan dan lingkungan kampus FILKOM UB.',
    icon: Phone,
    contact: 'wa.me/6281234567802 ( Pendamping Maba DTIF )',
  },
  {
    id: 'krssa',
    title: 'Narahubung KRS SA',
    desc: 'Layanan bantuan terkait pengisian KRS maupun pelaksanaan Studi Akademik (SA), termasuk konsultasi dan kendala selama proses berlangsung....',
    fullDesc:
      'Program CC KRS SA (Crisis Center KRS & SA) dan DISMIK KRS (Diskusi Akademik KRS) untuk membantu mahasiswa DTIF dalam perencanaan studi, kendala kuota kelas, serta pelaksanaan Studi Akademik.',
    icon: Phone,
    contact: 'wa.me/6281234567803 ( CC KRS SA & DISMIK KRS )',
  },
  {
    id: 'whatsapp',
    title: 'Official Channel Whatsapps HMDTIF',
    desc: 'Kanal informasi resmi HMDTIF yang berisi pengumuman, agenda kegiatan, informasi akademik, dan berbagai informasi kemahasiswaan lainnya.',
    fullDesc:
      'Kanal siaran informasi resmi HMDTIF FILKOM UB yang dikelola bersama INFOKOM & ADVOKESMA, berisi Info Beasiswa, SCOPE (Scholarship Preparation), Kabar Prestasi, dan pengumuman akademik DTIF.',
    icon: MessageCircle,
    contact: 'whatsapp.com/channel/hmdtif-filkomub-2026',
  },
  {
    id: 'ultksp',
    title: 'Form ULTKSP',
    desc: 'Form layanan yang digunakan mahasiswa untuk menyampaikan kebutuhan maupun pengajuan tertentu terkait layanan akademik dan kemahasiswaan.',
    fullDesc:
      'Formulir layanan kesejahteraan mahasiswa dan pendampingan penyelesaian studi tepat waktu melalui program ACE (Academic Completion and Excellence) serta ruang aman mahasiswa DTIF.',
    icon: ClipboardList,
    contact: 'hmdtif.filkom.ub.ac.id/layanan-advokesma',
  },
  {
    id: 'echoadvo',
    title: 'Form ECHO ADVO',
    desc: 'Media penyampaian aspirasi, kritik, saran, maupun evaluasi mahasiswa kepada dosen yang disediakan oleh Advokesma secara terbuka dan konstruktif.',
    fullDesc:
      'Program kerja resmi Echo Advo: media penyampaian aspirasi, kritik, saran, maupun evaluasi perkuliahan dan dosen yang disediakan oleh Departemen Advokesma HMDTIF secara terbuka, aman, dan konstruktif.',
    icon: ClipboardList,
    contact: 'hmdtif.filkom.ub.ac.id/echo-advo',
  },
];

export const ALL_NEWS_ITEMS = [
  {
    id: 'n1',
    category: 'PROKER',
    date: '17 Oktober 2026',
    title: 'INTRIVIA 2026 Sambut Mahasiswa Baru DTIF Melalui Pengenalan Lingkungan & Nilai Integritas',
    summary:
      'Malang — Departemen PSDM Bidang Humaniora sukses menyelenggarakan INTRIVIA (Informatics Introduction Environments Education) sebagai wadah orientasi dan pembentukan karakter mahasiswa baru DTIF.',
    content:
      'INTRIVIA (Informatics Introduction Environments Education) merupakan program kerja unggulan Divisi Humaniora Departemen PSDM HMDTIF yang merancang pengenalan lingkungan Departemen Teknik Informatika secara suportif, membangun koneksi antar angkatan, serta menanamkan nilai-nilai integritas.',
    featured: true,
    imgTheme: 'from-[#164A6E] via-[#2F5470] to-[#2E8FA6]',
  },
  {
    id: 'n2',
    category: 'INFO',
    date: '11 Oktober 2026',
    title: 'EXTENDED! Open Recruitment Staff Muda HMDTIF Kabinet Bahtera Gatra Diperpanjang hingga 13 Oktober',
    summary:
      'Malang — Pendaftaran Staff Muda HMDTIF 2026 resmi diperpanjang pada 11–13 Oktober 2026. Segera lengkapi berkas online, unggah twibbon, dan ikuti tahap Screening pada 7–15 Oktober!',
    content:
      'Kesempatan bergabung bersama 5 Departemen (INFOKOM, ADVOKESMA, PSDM, BISNIS, PIT) dan lembaga legislatif SENAT masih dibuka! Pengumuman kelulusan Staff Muda akan dilaksanakan pada 17 Oktober 2026 sebelum menuju agenda First Gathering.',
    featured: true,
    imgTheme: 'from-[#2F5470] via-[#456B85] to-[#164A6E]',
  },
  {
    id: 'n3',
    category: 'PROKER',
    date: '08 Oktober 2026',
    title: 'DISMIK KRS & Crisis Center KRS SA Hadir Dampingi Perencanaan Studi Mahasiswa DTIF',
    summary:
      'Departemen ADVOKESMA membuka posko CC KRS SA dan forum Diskusi Akademik KRS (DISMIK KRS) untuk memastikan seluruh mahasiswa DTIF tidak mengalami kendala akademik.',
    content:
      'Selain layanan CC KRS SA dan DISMIK KRS, Departemen ADVOKESMA juga menghadirkan program ACE (Academic Completion and Excellence) bagi mahasiswa tingkat akhir serta SCOPE (Scholarship Preparation) untuk persiapan beasiswa.',
    featured: false,
    imgTheme: 'from-[#164A6E] via-[#2E8FA6] to-[#2F5470]',
  },
  {
    id: 'n4',
    category: 'PROKER',
    date: '04 Oktober 2026',
    title: 'INFORCE & MAGANG GO! 2026 Siapkan Karier Profesional dan Portofolio Industri Mahasiswa DTIF',
    summary:
      'Malang — Divisi Widyantara Departemen PSDM mengakselerasi hardskill dan kesiapan karier mahasiswa lewat rangkaian Informatics Career Excellence (INFORCE) dan MAGANG GO!.',
    content:
      'Melalui kolaborasi bersama Alumni Talks dan ASA (Assemble Study Association), mahasiswa DTIF dibekali wawasan langsung mengenai magang industri teknologi, eksplorasi minat keahlian di luar kampus, serta penguatan keilmuan akademik.',
    featured: false,
    imgTheme: 'from-[#2F5470] via-[#164A6E] to-[#F08A24]/60',
  },
  {
    id: 'n5',
    category: 'PRESTASI',
    date: '29 September 2026',
    title: 'Kabar Prestasi & ADA ADIT: INFOKOM Rilis Episode Baru KomaTitik Podcast di Spotify & YouTube',
    summary:
      'Malang — Departemen INFOKOM terus menghadirkan konten edukatif melalui segmen ADA ADIT (Ada Apa Dengan IT), KomaTitik Podcast, serta publikasi Kabar Prestasi mahasiswa DTIF.',
    content:
      'Dikelola secara kolaboratif oleh bidang Media Kreatif dan Humas, kanal media sosial resmi HMDTIF di Instagram, TikTok, LinkedIn, Spotify, dan YouTube kini semakin interaktif dalam menyebarkan informasi kegiatan dan pencapaian warga DTIF.',
    featured: false,
    imgTheme: 'from-[#2E8FA6] via-[#2F5470] to-[#164A6E]',
  },
  {
    id: 'n6',
    category: 'PROKER',
    date: '22 September 2026',
    title: 'Departemen Bisnis Luncurkan Katalog HMDTIF Wear & Ekspansi Warung Informatika',
    summary:
      'Malang — Mengintegrasikan fungsi fundraising dan edukasi kewirausahaan, Departemen Bisnis menghadirkan koleksi merchandise resmi HMDTIF Wear serta kemitraan Informatics Partnership.',
    content:
      'Program kerja ini menjadi wadah nyata bagi mahasiswa Teknik Informatika untuk mengasah hardskill manajemen bisnis, strategi pemasaran kreatif, serta membangun jejaring sponsorship dengan berbagai perusahaan dan startup.',
    featured: false,
    imgTheme: 'from-[#164A6E] via-[#456B85] to-[#2E8FA6]',
  },
  {
    id: 'n7',
    category: 'PROKER',
    date: '15 September 2026',
    title: 'TEKRA & BUFFEST 2026 Jadi Panggung Apresiasi Karya Teknologi dan Seni Mahasiswa DTIF',
    summary:
      'Malang — Kolaborasi program kerja TEKRA (Technology & Creativity Arena) dan BUFFEST membuka ruang kreasi inovasi mahasiswa Teknik Informatika.',
    content:
      'Melalui kegiatan ini, mahasiswa didorong untuk mengeksplorasi minat di bidang rekayasa perangkat lunak, kecerdasan buatan, pengembangan gim, serta seni pertunjukan.',
    featured: false,
    imgTheme: 'from-[#2F5470] via-[#2E8FA6] to-[#164A6E]',
  },
  {
    id: 'n8',
    category: 'INFO',
    date: '09 September 2026',
    title: 'Senat HMDTIF Gelar Evaluasi Triwulan dan Rapat Besar Bersama Seluruh Fungsionaris',
    summary:
      'Malang — Guna menjaga tata kelola organisasi yang transparan dan akuntabel, Senat HMDTIF menyelenggarakan agenda Evaluasi Triwulan serta Musyawarah HMDTIF.',
    content:
      'Evaluasi Triwulan ini meninjau ketercapaian indikator kinerja dari seluruh program kerja departemen agar selaras dengan AD/ART dan GBHK HMDTIF.',
    featured: false,
    imgTheme: 'from-[#164A6E] via-[#2F5470] to-[#456B85]',
  },
];

export const LOGO_PHILOSOPHY_SLIDES = [
  {
    id: 0,
    title: 'Puncak Menara Cakrawala (Spire)',
    badge: 'BENTUK 01 • ARAH & VISI',
    text: 'Merepresentasikan ketajaman visi dan cita-cita luhur mahasiswa Teknik Informatika yang senantiasa menjulang ke atas, berorientasi pada masa depan teknologi dan keunggulan akademik.',
  },
  {
    id: 1,
    title: 'Layar Emas Berlapis (Golden Sails)',
    badge: 'BENTUK 02 • ENERGI & KARYA',
    text: 'Melambangkan semangat kolaborasi, kemakmuran gagasan, dan daya dorong inovasi yang menggerakkan laju himpunan melewati berbagai dinamika zaman.',
  },
  {
    id: 2,
    title: 'Lambung Bahtera Pelindung (Teal Hull)',
    badge: 'BENTUK 03 • RUANG AMAN',
    text: 'Merepresentasikan stabilitas sebagai struktur inti (pondasi) yang kokoh, sistem yang jelas, dan pegangan bersama bagi seluruh warga Teknik Informatika yang inklusif serta suportif.',
  },
  {
    id: 3,
    title: 'Aliran Gelombang S-Curve Cyan',
    badge: 'WARNA 04 • ADAPTIVITAS',
    text: 'Menunjukkan HMDTIF yang rapi secara internal dan konsisten, namun tidak kaku, melainkan dinamis dan adaptif terhadap pesatnya perubahan lanskap teknologi informasi.',
  },
  {
    id: 4,
    title: 'Inti Berlian Cahaya (Core Diamond)',
    badge: 'BENTUK 05 • INTEGRITAS',
    text: 'Pusat gravitasi organisasi yang mencerminkan ketulusan pengabdian, solidaritas kekeluargaan, dan kecerdasan kolektif seluruh elemen Kabinet Bahtera Gatra.',
  },
  {
    id: 5,
    title: 'Tiga Titik Tetesan Berjenjang',
    badge: 'BENTUK 06 • TRIDHARMA',
    text: 'Melambangkan kesinambungan Tridharma Perguruan Tinggi (Pendidikan, Penelitian, dan Pengabdian Masyarakat) yang meneteskan kebermanfaatan nyata.',
  },
];

export const CORE_BEHAVIORS_FOUR = [
  {
    num: '01',
    title: 'Sinergi Gatra (Clarity)',
    tagline: 'Clarity in Direction.',
    desc: 'Pergerakan tanpa arah adalah energi yang terbuang. Kami memprioritaskan kejelasan tujuan, peran, dan proses pengambilan keputusan sebelum melangkah agar setiap program kerja terukur dan berdampak.',
  },
  {
    num: '02',
    title: 'Nakhoda Inovasi (Execution)',
    tagline: 'Responsible Execution.',
    desc: 'Keunggulan dibangun melalui konsistensi. Eksekusi yang bertanggung jawab berarti memegang standar profesionalisme tinggi dalam setiap layanan advokasi, akademik, dan pengembangan diri.',
  },
  {
    num: '03',
    title: 'Sauh Advokasi (Significance)',
    tagline: 'Meaningful Impact.',
    desc: 'Kami menolak sekadar menjalankan rutinitas. Setiap program kerja yang dihadirkan harus menjawab kebutuhan riil mahasiswa Teknik Informatika dan meninggalkan jejak positif yang berkelanjutan.',
  },
  {
    num: '04',
    title: 'Layar Kolaborasi (Excellence)',
    tagline: 'Raise the Standard.',
    desc: 'Membangun ekosistem kolaboratif antara fungsionaris, mahasiswa, alumni, dan mitra industri untuk bersama-sama melampaui batas standar karya di kancah nasional maupun internasional.',
  },
];

export const PARTNER_LOGOS = [
  { code: 'DICODING', sub: 'Official Tech Academy Partner' },
  { code: 'GOJEK / GOTO', sub: 'Industry Career Partner' },
  { code: 'BANGKIT', sub: 'Google, GoTo, Traveloka' },
  { code: 'KOMINFO RI', sub: 'Digital Talent Scholarship' },
  { code: 'CLIPS.ID', sub: 'Creative Media Partner' },
  { code: 'BIZNET GIO', sub: 'Cloud Infrastructure Partner' },
  { code: 'TOKOPEDIA', sub: 'Tech Fellowship Partner' },
];
