// next image
// next/image import (placed here to avoid duplicating imports later)

// components 
import ParticlesContainer from '../components/ParticlesContainer';
import Image from 'next/image';
import { useState } from 'react';

/*
    Composants d'exemple à coller dans la même page ou mieux : créer
    ../components/ProjectsGrid.js et ../components/ProjectCard.js et importer ici.

    Comportement :
    - une grille simple de cards
    - au hover sur une card on active un aperçu fixe à droite (preview "site complet")
    - le preview est scrollable indépendamment (overflow-auto) et reste fixe pendant le scroll de la page
*/

export function ProjectsGrid({ projects = [] }) {
    const [active, setActive] = useState(null);

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((p) => (
                    <article
                        key={p.id}
                        onMouseEnter={() => setActive(p)}
                        onMouseLeave={() => setActive(null)}
                        className="relative bg-card p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition"
                    >
                        <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                        <p className="text-sm text-muted mb-4">{p.description}</p>
                        <div className="text-xs text-accent">Voir l&#39;aperçu →</div>
                    </article>
                ))}
            </div>

            {/* Preview fixe à droite — "site complet" scrollable */}
            <aside
                aria-hidden={!active}
                className={`fixed right-0 top-0 h-screen w-2/5 bg-black/60 z-40 pointer-events-none transition-opacity duration-300 ${
                    active ? 'opacity-100' : 'opacity-0'
                }`}
            >
                {active && (
                    <div className="h-full overflow-auto p-6 pointer-events-auto">
                        {/* Utiliser Image de next/image pour optimiser */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-xl">
                            <Image
                                src={active.screenshot}
                                alt={active.title}
                                width={1200}
                                height={800}
                                layout="responsive"
                                className="block"
                            />
                            <div className="p-4">
                                <h4 className="text-lg font-semibold">{active.title}</h4>
                                <p className="text-sm text-muted">{active.longDescription}</p>
                                {/* bouton ou lien vers le projet */}
                                <a
                                    href={active.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-block mt-3 px-4 py-2 bg-accent text-black rounded"
                                >
                                    Ouvrir le projet
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </aside>
        </>
    );
}

/* Exemple minimal de données (à remplacer par vos vrais projets) */
export const sampleProjects = [
    {
        id: 'p1',
        title: 'Mon super site',
        description: 'Landing page réactive',
        longDescription: 'Prototype complet du site avec animations et responsive.',
        screenshot: '/images/projects/site1.png',
        url: 'https://example.com',
    },
    {
        id: 'p2',
        title: 'Dashboard Admin',
        description: 'Interface d’administration',
        longDescription: 'Dashboard avec graphiques et gestion utilisateurs.',
        screenshot: '/images/projects/site2.png',
        url: 'https://example.com',
    },
];
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

// framer motion
import {motion} from 'framer-motion'

// variants
import {fadeIn} from '../variants'
// import Image from 'next/image';

const Home = () => {
    //  text
  const sentence = " Hi! I'm Sofyane a Full-Stack Developer 👨‍💻 based in Morocco.";
  const letters = Array.from(sentence);
  
  return <div className='bg-primary/60 h-full flex justify-center items-center'>

         {/* texte */}
         <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 '>
            <div className='text-center flex flex-col justify-center  xl:pt-[40px]  xl:text-left  h-full container mx-auto '>
              {/* titre */}
              <motion.h1 variants={fadeIn('down' , 0.2 )} initial="hidden" animate ="show" exit="hidden"
                 className='h1'>
                 Transforming Ideas <br/> Into{' '}
                 <span className='text-accent'>Digital Reality</span>
              </motion.h1>
              {/* subtitle */}
              <motion.p  
                  // variants={fadeIn('down' , 0.3)} 
                  // initial="hidden" 
                  // animate ="show" 
                  // exit="hidden"
                  initial="hidden"
                  animate="visible"
                  variants={{
                      hidden: { opacity: 1 },
                      visible: {
                          opacity: 1,
                          transition: {
                              staggerChildren: 0.1,
                          },
                      },
                  }}
                 className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-sm font-normal tracking-[1px]'>
                {/* Hi! I'm Sofyane a Frontend Developer 👨‍💻 based in Morocco. */}
                {letters.map((char, index) => (
                      <motion.span
                          key={index}
                          variants={{
                              hidden: { opacity: 0 },
                              visible: { opacity: 1 },
                          }}
                      >
                    
                          {char}
                      </motion.span>
                  ))}
              </motion.p>
              {/* btn  */}
              <div className='flex justify-center xl:hidden relative z-10'>
                 <ProjectsBtn/>
              </div>

              <motion.div 
                  variants={fadeIn('down' , 0.4 )} 
                  initial="hidden" 
                  animate ="show" 
                  exit="hidden"
                className='hidden xl:flex xl:z-10' 
              >
                 <ProjectsBtn/>
              </motion.div>
            </div>
         </div>
         {/* image */}
         <div className='w-[1200px] h-full absolute right-0 bottom-0'>
            {/* bg image */}
            <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'>  
            </div>
            {/* particles */}
            <ParticlesContainer/>
            {/* avatar img */}
            <motion.div  
              variants={fadeIn('up' , 0.5 )} 
              initial="hidden" animate ="show" exit="hidden" 
              transition={{ duration: 1 , ease :'easeInOut'}}
              className='w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]'>
               <Avatar/>
            </motion.div>
         </div>
      </div>
      
};

export default Home;
