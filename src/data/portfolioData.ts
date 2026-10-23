export interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'cloud' | 'design';
  icon?: string;
  color: string;
  rating: number;
  svg?: string;
}

export const TECHNOLOGIES: Technology[] = [
  {
    name: "JavaScript",
    category: "frontend",
    icon: "devicon-javascript-plain colored",
    color: "hover:border-yellow-400/60 hover:shadow-yellow-400/20",
    rating: 3
  },
  {
    name: "HTML5",
    category: "frontend",
    icon: "devicon-html5-plain colored",
    color: "hover:border-orange-500/60 hover:shadow-orange-500/20",
    rating: 4
  },
  {
    name: "CSS3",
    category: "frontend",
    icon: "devicon-css3-plain colored",
    color: "hover:border-blue-500/60 hover:shadow-blue-500/20",
    rating: 3.5
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: "devicon-tailwindcss-original colored",
    color: "hover:border-cyan-400/60 hover:shadow-cyan-400/20",
    rating: 3
  },
  {
    name: "AngularJS",
    category: "frontend",
    icon: "devicon-angularjs-plain colored",
    color: "hover:border-red-500/60 hover:shadow-red-500/20",
    rating: 3
  },
  {
    name: "Node.js",
    category: "backend",
    icon: "devicon-nodejs-plain colored",
    color: "hover:border-green-500/60 hover:shadow-green-500/20",
    rating: 2
  },
  {
    name: "Express.js",
    category: "backend",
    icon: "devicon-express-original dark:invert-0",
    color: "hover:border-slate-400/60 hover:shadow-slate-400/20",
    rating: 2.5
  },
  {
    name: "C#",
    category: "backend",
    icon: "devicon-csharp-plain colored",
    color: "hover:border-purple-500/60 hover:shadow-purple-500/20",
    rating: 3
  },
  {
    name: "Java",
    category: "backend",
    icon: "devicon-java-plain colored",
    color: "hover:border-red-600/60 hover:shadow-red-600/20",
    rating: 3
  },
  {
    name: "MySQL",
    category: "backend",
    icon: "devicon-mysql-plain colored",
    color: "hover:border-blue-600/60 hover:shadow-blue-600/20",
    rating: 2.5
  },
  {
    name: "Git",
    category: "cloud",
    icon: "devicon-git-plain colored",
    color: "hover:border-orange-600/60 hover:shadow-orange-600/20",
    rating: 3
  },
  {
    name: "GitHub",
    category: "cloud",
    icon: "devicon-github-original dark:invert-0",
    color: "hover:border-purple-400/60 hover:shadow-purple-400/20",
    rating: 3
  },
  {
    name: "Linux",
    category: "cloud",
    icon: "devicon-linux-plain dark:text-white",
    color: "hover:border-amber-400/60 hover:shadow-amber-400/20",
    rating: 3
  },
  {
    name: "Windows",
    category: "cloud",
    icon: "devicon-windows11-original colored",
    color: "hover:border-sky-400/60 hover:shadow-sky-400/20",
    rating: 4
  },
  {
    name: "Premiere Pro",
    category: "design",
    color: "hover:border-indigo-500/60 hover:shadow-indigo-500/20",
    rating: 3
  },
  {
    name: "Photoshop",
    category: "design",
    color: "hover:border-sky-500/60 hover:shadow-sky-500/20",
    rating: 3.5
  },
  {
    name: "Canva",
    category: "design",
    icon: "devicon-canva-original colored",
    color: "hover:border-teal-400/60 hover:shadow-teal-400/20",
    rating: 4
  }
];

export const TERMINAL_COMMANDS: Record<string, string | ((args?: string) => string)> = {
  whoami: "dixit",
  pwd: "/home/dixit/portfolio",
  ls: "about.txt   skills.json   projects/   experience.md   contact.sh",
  about: "Dixit Jhinkwan — Frontend Developer & UI Architect based in India 🇮🇳.\nSpecializing in high-performance web interfaces, modular UI design systems, and modern frontend stack (JavaScript, AngularJS, Tailwind CSS).",
  skills: "Frontend : JavaScript, HTML5, CSS3, Tailwind CSS, AngularJS\nBackend  : Node.js, Express, C#, Java, MySQL\nTools    : Git, GitHub, Linux, Windows, Canva, Photoshop, Premiere Pro",
  contact: "Email    : dixitjhinkwan@outlook.in\nGitHub   : https://github.com/printf-dj\nTwitter  : https://twitter.com/printf_dj\nLinkedIn : https://linkedin.com/in/dixitjhinkwan",
  socials: "GitHub   : https://github.com/printf-dj\nTwitter  : https://twitter.com/printf_dj\nLinkedIn : https://linkedin.com/in/dixitjhinkwan\nInstagram: https://instagram.com/printf_dj",
  neofetch: () => `       .-.        dixit@dev-device
      (   )       ---------------------
       '-'        OS: Ubuntu 24.04 LTS
      /   \\       Kernel: 6.8.0-45-generic
     /     \\      Shell: bash 5.2.21
    /  .-.  \\     Uptime: 42 days, 13 hours
   (  (   )  )    Packages: 1420 (dpkg)
    \\  '-'  /     UI Engine: React / JS / Tailwind
     \\     /      Location: India 🇮🇳
      '---'       Terminal: xterm-256color`,
  fetch: () => (TERMINAL_COMMANDS.neofetch as () => string)(),
  date: () => new Date().toUTCString(),
  echo: (args) => args || "",
  quote: () => "\"In case I don't see ya, good afternoon, good evening, and good night!\" - The Truman Show",
  sudo: "dixit is not in the sudoers file. This incident will be reported.",
  help: "Available Linux Commands:\n  neofetch    - Show system overview & developer specs\n  ls          - List workspace directory files\n  pwd         - Print working directory\n  whoami      - Print effective user name\n  about       - Display developer bio\n  skills      - List technical competencies\n  contact     - Display contact info & links\n  date        - Current system timestamp\n  quote       - Favorite film line\n  theme       - Toggle portfolio light/dark theme\n  clear       - Clear terminal screen",
};
