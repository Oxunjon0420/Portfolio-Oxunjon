import { Link } from "@/types";

const links: Link[] = [
  {
    title: 'Bosh sahifa',
    href: '/',
    thumbnail: '/assets/nav-link-previews/pro.png'
  },
  {
    title: "Men haqimda",        // ← yangi qo'shildi
    href: '/#about',
    thumbnail: '/assets/nav-link-previews/men.png'
  },
  {
    title: "Ko'nikmalar",
    href: '/#skills',
    thumbnail: '/assets/nav-link-previews/kon.png'
  },
  {
    title: 'Loyihalar',
    href: '/#projects',
    thumbnail: '/assets/nav-link-previews/loy.png'
  },
  {
    title: "Bog'lanish",
    href: '/#contact',
    thumbnail: '/assets/nav-link-previews/bog.png'
  }
];

export { links };
