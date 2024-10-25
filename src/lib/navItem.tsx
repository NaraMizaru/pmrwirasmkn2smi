import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { Mail } from "lucide-react";
import Image from "next/image";
import TiktokIcon from "@/assets/img/tiktok-svgrepo-com.svg";

const links = [
  {
    label: "Beranda",
    href: "/",
    isDropdown: false,
  },
  {
    label: "Profil Organisasi",
    href: "#",
    isDropdown: true,
    dropdownItems: [
      { title: "Visi & Misi", href: "/visimisi" },
      { title: "Struktur Organisasi", href: "/strukturorganisasi" },
    ],
  },
  {
    label: "Unit",
    href: "#",
    isDropdown: true,
    dropdownItems: [
      { title: "Unit 1", href: "/unit-1" },
      { title: "Unit 2", href: "/unit-2" },
      { title: "Unit 3", href: "/unit-3" },
      { title: "Unit 4", href: "/unit-4" },
    ],
  },
];

const iconNav = [
  {
    href: "mailto:",
    icon: <Mail width={20} height={20} />,
  },
  {
    href: "https://www.instagram.com/pmrwirasmkn2smi_",
    icon: <InstagramLogoIcon width={20} height={20} />,
  },
  {
    href: "https://www.tiktok.com/@pmrwirasmkn2smi_",
    icon: <Image src={TiktokIcon} width={20} height={20} alt="tiktok" />,
  },
];

const navItem = {
  links,
  iconNav,
};

export default navItem;
