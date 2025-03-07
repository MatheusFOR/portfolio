import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section
      ref={ref}
      id="sobre"
      className="py-20 bg-primary"
    >
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Sobre Mim
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
                alt="Foto de perfil"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-text-secondary">
              Sou um desenvolvedor Full Stack apaixonado por criar soluções inovadoras e experiências digitais excepcionais. Com experiência em desenvolvimento web moderno, foco em criar aplicações escaláveis e performáticas.
            </p>
            <p className="text-lg text-text-secondary">
              Minhas principais tecnologias incluem:
            </p>
            <ul className="grid grid-cols-2 gap-4">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full" />
                React
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full" />
                Node.js
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full" />
                TypeScript
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full" />
                MongoDB
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full" />
                Docker
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full" />
                AWS
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 