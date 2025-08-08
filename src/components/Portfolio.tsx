import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import {
  SiAngular,
  SiReact,
  SiNextdotjs,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiDotnet,
  SiVercel,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

export default function Portfolio() {
  const [darkMode, _setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const techIcons = [
    <SiAngular />, <SiReact />, <SiNextdotjs />, <SiNestjs />, <SiMongodb />,
    <SiPostgresql />, <SiDotnet />, <SiVercel />, <SiTailwindcss />,
    <SiTypescript />, <SiExpress />, <SiHtml5 />, <SiCss3 />
  ];

  const projects = [
    {
      title: "Clon de Aplicación Web Trello",
      date: "Junio 2025 - Julio 2025",
      description:
        "Construí un clon funcional de Trello, permitiendo la creación de tableros, listas y tarjetas, con invitación de usuarios por proyecto. App para practicar arquitectura modular, backend escalable y rutas RESTful seguras.",
      tech: ["Angular", "NestJS", "MongoDB", "Express", "Zod", "Railway", "Vercel"],
      icons: [<SiAngular />, <SiNestjs />, <SiMongodb />, <SiExpress />, <SiVercel />],
      image: "/img/crellow.png",
    },
    {
      title: "Aplicación Web de Gestión",
      date: "Marzo 2025 - Mayo 2025",
      description:
        "Desarrollé una solución interna para una tienda de repuestos. Utilicé MVC en ASP.NET conectada a SQL Server. Migración futura a Angular con API RESTful.",
      tech: [".NET", "MVC", "SQL Server", "Entity Framework", "HTML", "CSS"],
      icons: [<SiDotnet />, <SiHtml5 />, <SiCss3 />],
      image: "/img/csrs.png",
    },
    {
      title: "Aplicación de Registro y Análisis de Ventas",
      date: "Enero 2025 - Febrero 2025",
      description:
        "Aplicación web para cafetería temática, con registro de ventas, reportes y análisis. Arquitectura modular y separación de backend con frontend.",
      tech: ["React", "NodeJS", "Express", "PostgreSQL", "Zod", "Railway", "Vercel"],
      icons: [<SiReact />, <SiExpress />, <SiPostgresql />, <SiVercel />],
      image: "/img/fitfat.png",
    },
  ];

  return (
    <main className="text-black dark:bg-black dark:text-white font-sans min-h-screen transition-colors duration-500 overflow-hidden">
      {/* Fondo fijo, sin estilos reactivamente forzados */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0  dark:bg-black" />
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full dark:bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]" />
      </div>

      <header className="sticky p-6  top-0 z-50  ">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-2xl font-extrabold tracking-tight text-center md:text-left">Erick López</h1>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Toggle estilo iPhone */}
            {/* <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 dark:bg-gray-600 peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
            </label> */}

            <div className="flex gap-4 text-xl">
              <a href="https://github.com/ErickLopezDev" target="_blank" rel="noopener" className="hover:text-neutral-400">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/erick-valentino-lópez-campos" target="_blank" rel="noopener" className="hover:text-neutral-400">
                <FaLinkedin />
              </a>
              <a href="ericklopez.dev@gmail.com" className="hover:text-neutral-400">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="relative z-10 p-10 text-center max-w-3xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Desarrollador Web
        </motion.h2>
        <motion.p
          className="text-neutral-800 dark:text-neutral-400 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
Me enfoco en construir soluciones prácticas que resuelvan problemas reales, con especial interés en el desarrollo backend como vía para crecer profesionalmente hacia áreas de infraestructura cloud y ciberseguridad.
Actualmente busco una oportunidad de prácticas para aportar mis habilidades, seguir aprendiendo y ganar experiencia en entornos reales de desarrollo.        </motion.p>
      </section>
      <section className="relative z-10 p-10">
        <div className="overflow-hidden relative w-full h-20">
          <motion.div
            className="absolute flex gap-10 w-max text-4xl"
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {techIcons.concat(techIcons).map((icon, i) => (
              <span key={i} className="text-neutral-600 dark:text-neutral-300">{icon}</span>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 p-10 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-8">Proyectos</h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              className="relative rounded-xl overflow-hidden shadow-xl border border-neutral-200 dark:border-neutral-700 group hover:scale-[1.01] transition-transform z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <img src={proj.image} alt={proj.title} className="w-full h-74 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/70 to-transparent" />
              <div className="absolute bottom-0 text-white p-5 z-10">
                <h4 className="text-xl font-bold mb-1">{proj.title}</h4>
                <p className="text-sm text-neutral-300 mb-2">{proj.date}</p>
                <p className="text-sm text-neutral-200 mb-3 max-w-md">{proj.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {proj.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 rounded-full text-xs bg-white/20 border border-white/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 text-lg">
                  {proj.icons.map((Icon, index) => (
                    <span key={index}>{Icon}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>



    </main>
  );
}
