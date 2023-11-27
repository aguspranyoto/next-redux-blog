import { NextResponse, NextRequest } from "next/server";

const data = [
  {
    title: "Pengenalan JavaScript",
    body: "JavaScript adalah bahasa pemrograman tingkat tinggi yang sering digunakan untuk pengembangan web.",
    date: "Sunday, November 20, 2023 14:30",
    image: "/blog.jpg",
    comments: [
      {
        id: 101,
        comment: "Artikel yang bagus!",
        user: "JohnDoe",
        date: "Sunday, November 20, 2023 15:00",
      },
      {
        id: 102,
        comment: "Sangat informatif, terima kasih!",
        user: "JaneSmith",
        date: "Sunday, November 20, 2023 16:45",
      },
    ],
    id: 1,
  },
  {
    title: "Cara Menggunakan React",
    body: "React adalah pustaka JavaScript yang digunakan untuk membangun antarmuka pengguna yang interaktif.",
    date: "Monday, November 21, 2023 15:45",
    image: "/blog.jpg",
    comments: [
      {
        id: 103,
        comment: "Apa kelebihan React dibandingkan dengan pustaka lain?",
        user: "CuriousDev",
        date: "Monday, November 21, 2023 16:30",
      },
    ],
    id: 2,
  },
  {
    title: "Tips Efektif Belajar Pemrograman",
    body: "Belajar pemrograman memerlukan dedikasi dan praktik konsisten. Berikut beberapa tips untuk mempercepat pembelajaran Anda.",
    date: "Tuesday, November 22, 2023 12:15",
    image: "/blog.jpg",
    comments: [
      {
        id: 104,
        comment: "Saya setuju, konsistensi adalah kunci!",
        user: "LearningNewbie",
        date: "Tuesday, November 22, 2023 13:00",
      },
    ],
    id: 3,
  },
  {
    title: "Dasar-dasar HTML dan CSS",
    body: "HTML dan CSS adalah teknologi dasar dalam pengembangan web. Pelajari cara menggunakannya untuk membuat halaman web yang menarik.",
    date: "Wednesday, November 23, 2023 10:00",
    image: "/blog.jpg",
    comments: [
      {
        id: 105,
        comment:
          "Apakah HTML5 memiliki fitur yang berbeda dari HTML sebelumnya?",
        user: "WebEnthusiast",
        date: "Wednesday, November 23, 2023 11:30",
      },
    ],
    id: 4,
  },
  {
    title: "Belajar Dengan Proyek Nyata",
    body: "Salah satu cara terbaik untuk memahami pemrograman adalah dengan mengerjakan proyek nyata. Temukan ide proyek dan mulailah coding!",
    date: "Thursday, November 24, 2023 16:30",
    image: "/blog.jpg",
    comments: [
      {
        id: 106,
        comment: "Bagaimana cara memulai proyek pertama?",
        user: "ProjectStarter",
        date: "Thursday, November 24, 2023 17:15",
      },
    ],
    id: 5,
  },
  {
    title: "Panduan Penggunaan Git",
    body: "Git adalah sistem kontrol versi yang penting dalam pengembangan perangkat lunak. Pelajari dasar-dasarnya untuk manajemen kode yang efisien.",
    date: "Friday, November 25, 2023 11:45",
    image: "/blog.jpg",
    comments: [
      {
        id: 107,
        comment: "Apa perbedaan Git dan GitHub?",
        user: "GitMaster",
        date: "Friday, November 25, 2023 12:30",
      },
    ],
    id: 6,
  },
  {
    title: "Mengenal Node.js",
    body: "Node.js adalah platform JavaScript yang memungkinkan eksekusi kode JavaScript di sisi server. Explore fitur-fitur dan kegunaannya.",
    date: "Saturday, November 26, 2023 14:20",
    image: "/blog.jpg",
    comments: [
      {
        id: 108,
        comment: "Bagaimana cara menginstal Node.js?",
        user: "NodeBeginner",
        date: "Saturday, November 26, 2023 15:10",
      },
    ],
    id: 7,
  },
  {
    title: "Menyusun Algoritma Efisien",
    body: "Pahami konsep algoritma dan strategi penyusunan yang efisien untuk menyelesaikan masalah pemrograman. Latih diri Anda dengan soal-soal coding.",
    date: "Sunday, November 27, 2023 09:00",
    comments: [
      {
        id: 109,
        comment: "Apa algoritma yang efisien untuk sorting?",
        user: "AlgorithmGeek",
        date: "Sunday, November 27, 2023 10:15",
      },
    ],
    id: 8,
  },
  {
    title: "Pengenalan TypeScript",
    body: "TypeScript adalah superset JavaScript yang menyediakan dukungan untuk tipe data. Pelajari cara menggunakannya untuk pengembangan yang lebih aman.",
    date: "Monday, November 28, 2023 13:10",
    comments: [
      {
        id: 110,
        comment: "Apakah TypeScript cocok untuk semua proyek?",
        user: "TypeScriptFan",
        date: "Monday, November 28, 2023 14:30",
      },
    ],
    id: 9,
  },
  {
    title: "Membuat Aplikasi React Native",
    body: "React Native memungkinkan pengembang untuk membuat aplikasi mobile menggunakan pengetahuan React. Pelajari langkah-langkahnya dan mulailah mengembangkan aplikasi Anda sendiri.",
    date: "Tuesday, November 29, 2023 17:00",
    comments: [
      {
        id: 111,
        comment: "Bagaimana cara membuat aplikasi React Native pertama saya?",
        user: "MobileDeveloper",
        date: "Tuesday, November 29, 2023 18:45",
      },
    ],
    id: 10,
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor elit at nisl efficitur, eu dapibus libero ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer ultrices fermentum justo, nec ullamcorper velit feugiat ac.",
    date: "Wednesday, November 30, 2023 09:30",
    image: "/blog.jpg",
    comments: [
      {
        id: 112,
        comment: "Sed ac risus vel arcu suscipit accumsan ut sit amet metus.",
        user: "LoremIpsumFan",
        date: "Wednesday, November 30, 2023 10:15",
      },
    ],
    id: 11,
  },
  {
    title: "Etiam Velit Nisl",
    body: "Etiam velit nisl, convallis ac libero et, efficitur facilisis nisl. Aliquam accumsan velit ac ante sodales, in scelerisque odio pellentesque. Sed hendrerit est vitae risus fringilla tempus.",
    date: "Thursday, December 1, 2023 14:45",
    image: "/blog.jpg",
    comments: [
      {
        id: 113,
        comment:
          "Curabitur ac velit ac leo scelerisque feugiat a sit amet metus.",
        user: "EtiamVelit",
        date: "Thursday, December 1, 2023 15:30",
      },
    ],
    id: 12,
  },
];

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const detailUser = data.find((item) => item.id === Number(id));
    if (detailUser) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: detailUser,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Not Found",
      data: {},
    });
  }
  return NextResponse.json({
    status: 200,
    message: "Success",
    data,
  });
}
