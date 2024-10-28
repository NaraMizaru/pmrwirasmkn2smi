import BoxReveal from "@/components/ui/box-reveal";
import { Button } from "@/components/ui/button";
import FotoBersama from "@/assets/img/foto-bersama.jpeg";
import Image from "next/image";
import Link from "next/link";
import BlurFade from "@/components/ui/blur-fade";

const HeroSection = () => {
  return (
    <section className="pt-44 pb-24 flex">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2 lg:order-2">
            <BlurFade delay={0.25 * 0.05} inView>
              <Image
                src={FotoBersama}
                alt="Foto Bersama"
                className="rounded-xl"
              />
            </BlurFade>
          </div>
          <div className="w-full self-center px-4 lg:w-1/2 lg:order-1">
            <BoxReveal boxColor={"#FFDC58"} duration={0.5}>
              <p className="text-[3.5rem] font-semibold">
                PMR Wira<span className="text-main">.</span>
              </p>
            </BoxReveal>

            <BoxReveal boxColor={"#FFDC58"} duration={0.5}>
              <h2 className="mt-[.5rem] text-lg">
                PMR Wira SMK Negeri 2 Sukabumi adalah salah satu ekstrakurikuler
                unggulan di SMK Negeri 2 Sukabumi. Didirikan pada tanggal 2
                Februari 1980, PMR Wira telah menjadi wadah bagi siswa-siswi
                yang ingin mengembangkan keterampilan pertolongan pertama,
                kepemimpinan, dan rasa kemanusiaan, serta masih banyak lagi.
                Sebagai salah satu organisasi dengan peminat terbanyak di
                sekolah, PMR Wira selalu menjadi pilihan utama bagi siswa yang
                tertarik pada kegiatan sosial dan kesehatan. Melalui berbagai
                program dan pelatihan, PMR Wira SMKN 2 Sukabumi terus membentuk
                generasi muda yang peduli, tanggap, dan siap membantu sesama.
              </h2>
            </BoxReveal>

            <BoxReveal boxColor={"#FFDC58"} duration={0.5}>
              <Button className="mt-[1.6rem]" variant={"noShadow"}>
                <Link href={"/"}>Lihat Selengkapnya</Link>
              </Button>
            </BoxReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
