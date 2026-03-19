// Oxunjon Shixnazarov — Backend ko'nikmalar
export enum SkillNames {
  PYTHON = "python",
  DJANGO = "django",
  FASTAPI = "fastapi",
  POSTGRES = "postgres",
  SQLALCHEMY = "sqlalchemy",
  REST_API = "rest_api",
  GIT = "git",
  DOCKER = "docker",
  TELEGRAM_BOT = "telegram_bot",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.PYTHON]: {
    id: 1,
    name: "python",
    label: "Python",
    shortDescription: "Backend dasturlashning eng qulay va kuchli tili. 🐍",
    color: "#3776aa",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  [SkillNames.DJANGO]: {
    id: 2,
    name: "django",
    label: "Django",
    shortDescription: "Python uchun eng mashhur web framework. Tez va xavfsiz. 🟢",
    color: "#092e20",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
  },
  [SkillNames.FASTAPI]: {
    id: 3,
    name: "fastapi",
    label: "FastAPI",
    shortDescription: "Tezkor va zamonaviy Python API framework. ⚡",
    color: "#009688",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 4,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "Kuchli va ishonchli relatsion ma'lumotlar bazasi. 🐘",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.SQLALCHEMY]: {
    id: 5,
    name: "sqlalchemy",
    label: "SQLAlchemy",
    shortDescription: "Python uchun eng yaxshi ORM va SQL toolkit. 🗄️",
    color: "#d71f00",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg",
  },
  [SkillNames.REST_API]: {
    id: 6,
    name: "rest_api",
    label: "REST API",
    shortDescription: "Zamonaviy web xizmatlar uchun API arxitekturasi. 🔌",
    color: "#ff6b35",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  },
  [SkillNames.GIT]: {
    id: 7,
    name: "git",
    label: "Git",
    shortDescription: "Kod versiyalarini boshqarish tizimi. 🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 8,
    name: "docker",
    label: "Docker",
    shortDescription: "Ilovalarni konteynerda ishga tushirish platformasi. 🐳",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.TELEGRAM_BOT]: {
    id: 9,
    name: "telegram_bot",
    label: "Telegram Bot",
    shortDescription: "Python bilan Telegram botlar yaratish. 🤖",
    color: "#0088cc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
};

export const themeDisclaimers = {
  light: [
    "Ogohlantirish: Kunduzgi rejim ko'zingizni qamashtirishi mumkin!",
    "Ehtiyot bo'ling! Bu rejim juda yorqin, ko'zoynaksiz kirishga tavsiya etmaymiz.",
    "Kunduzgi rejimga o'tdingiz — mana bu dadillik! 😎",
    "Nur tomonga yuring! Kunduzgi rejimni faqat jasurlar tanlar.",
    "Kunduzgi rejim faollashtirildi... Ko'zlaringiz tayyormi?",
  ],
  dark: [
    "Kunduzgi rejimda bo'ldingizmi? Xush kelibsiz, qorong'u tomonga!",
    "Tungi rejim yoqildi... Endi haqiqiy dasturchi bo'ldingiz.",
    "Tungi rejim faol! Ko'zlarim sizga minnatdor. 🌙",
    "Qorong'u tomonga qaytdingiz. U yoqda hayot qanday edi?",
    "Tungi rejim — professional darajaga chiqishning birinchi qadami. 💻",
  ],
};
