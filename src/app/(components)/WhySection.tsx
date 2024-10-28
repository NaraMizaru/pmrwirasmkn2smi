"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import NumberTicker from "@/components/ui/number-ticker";
import Demo from "@/assets/img/demo.jpg";
import Latgab from "@/assets/img/latgab.jpg";
import Lomba from "@/assets/img/lomba.jpg";
import Image from "next/image";

const WhySection = () => {
  useEffect(() => {
    AOS.init({});
    AOS.refresh();
  });

  return (
    <section className="pt-16 pb-24 bg-bg dark:bg-darkBg border-y-darkBorder border-4 border-x-transparent">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-10 justify-center text-center">
            <h3 className="text-3xl font-bold" data-aos="fade-up">
              Kenapa Harus PMR?
            </h3>
            <p className="mt-4 text-lg" data-aos="fade-up">
              PMR (Palang Merah Remaja) mengajarkan nilai kepedulian, empati,
              dan keterampilan pertolongan pertama bagi pelajar. Dengan
              mengikuti PMR, kamu berkesempatan mengembangkan keterampilan
              kepemimpinan, menjadi relawan dalam aksi kemanusiaan, serta
              belajar bertanggung jawab dalam lingkungan yang positif. Bergabung
              di PMR juga memberi pengalaman berharga yang bermanfaat bagi
              pendidikan dan karier masa depan.
            </p>
            <div className="mt-4 p-6 flex  flex-wrap items-center">
              <div className=" w-full p-4 md:w-4/12">
                <div className="flex items-center justify-center">
                  <h3 data-aos="fade-right">
                    <NumberTicker
                      value={150}
                      className="text-6xl font-semibold text-mainAccent dark:text-main"
                    />
                  </h3>
                  <span
                    data-aos="fade-down-right"
                    className="text-4xl font-semibold"
                  >
                    +
                  </span>
                </div>
                <div className="text-xl font-semibold mt-2" data-aos="zoom-in">
                  Alumni
                </div>
              </div>
              <div className="w-full p-4 md:w-4/12">
                <div className="flex items-center justify-center">
                  <h3 data-aos="fade-up">
                    <NumberTicker
                      value={100}
                      className="text-6xl font-semibold text-mainAccent dark:text-main"
                    />
                  </h3>
                  <span data-aos="fade-down" className="text-4xl font-semibold">
                    +
                  </span>
                </div>
                <div className="text-xl font-semibold mt-2" data-aos="zoom-in">
                  Prestasi
                </div>
              </div>
              <div className="w-full p-4 md:w-4/12">
                <div className="flex items-center justify-center">
                  <h3 data-aos="fade-left">
                    <NumberTicker
                      value={100}
                      className="text-6xl font-semibold text-mainAccent dark:text-main"
                    />
                  </h3>
                  <span
                    data-aos="fade-down-left"
                    className="text-4xl font-semibold"
                  >
                    +
                  </span>
                </div>
                <div className="text-xl font-semibold mt-2" data-aos="zoom-in">
                  Anggota Aktif
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center bg-main ">
          <div className="w-full md:w-6/12 md:order-2">
            <Image src={Lomba} alt="Lomba" className="w-full" />
          </div>
          <div className="w-full md:w-6/12 text-center text-text md:order-1 p-4">
            <h3 className="text-3xl lg:text-5xl font-semibold text-text">
              Lomba PGSD
            </h3>
            <p className="mt-4">
              Selamat untuk tim PMR Wira SMK Negeri 2 Sukabumi yang telah meraih
              beberapa penghargaan dalam kegiatan lomba PGSD BERKARYA IX yang
              diselenggarakan di Universitas Muhammadiyah Sukabumi, dengan
              rincian kejuaraan sebagai
            </p>
          </div>
          <div className="w-full md:w-6/12 md:order-3">
            <Image src={Demo} alt="Demo" className="w-full" />
          </div>
          <div className="w-full md:w-6/12 text-center text-text md:order-4 p-4">
            <h3 className="text-3xl lg:text-5xl font-semibold text-text">
              Demo Ekskul
            </h3>
            <p className="mt-4">
              Alhamdulillahirabbilalamin atas berkat rahmat dan karunia-Nya.
              Pada Kamis, 20 Juli 2023, PMR Wira SMK Negeri 2 Sukabumi telah
              melaksanakan kegiatan Demo Eskul. Terima kasih kepada akang teteh
              yang telah membantu menyukseskan kegiatan Demo Eskul PMR Wira SMK
              Negeri 2 Sukabumi. Selamat bergabung, dan semoga semakin
              mempererat rasa kekeluargaan yang ada.
            </p>
          </div>
          <div className="w-full md:w-6/12 md:order-6">
            <Image src={Latgab} alt="Latgab" className="w-full" />
          </div>
          <div className="w-full md:w-6/12 text-center text-text md:order-5 p-4">
            <h3 className="text-3xl lg:text-5xl font-semibold text-text">
              Lomba PGSD
            </h3>
            <p className="mt-4">
              Selamat untuk tim PMR Wira SMK Negeri 2 Sukabumi yang telah meraih
              beberapa penghargaan dalam kegiatan lomba PGSD BERKARYA IX yang
              diselenggarakan di Universitas Muhammadiyah Sukabumi, dengan
              rincian kejuaraan sebagai
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
