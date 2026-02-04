/* eslint-disable jsx-a11y/alt-text */
// components/Loading.jsx
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Loading = () => {
  const codeLines = [
    "<SofyanAcoriy>",
    "  <Full-stack web developer/>",
    "  <UX-UI-Designer/>",
    "  <DigitalMarketer />",
    "</SofyanAcoriy>",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const logoVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 1.5, bounce: 0 },
        opacity: { duration: 0.5 },
      },
    },
  };

  const dotVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  const progressVariants = {
    initial: { x: "-100%" },
    animate: {
      x: ["-100%", "200%"],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-2xl"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8"
        >
          {/* Logo - Version avec case vide pour votre logo */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="relative">
              <svg
                className="w-20 h-20 md:w-24 md:h-24"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Carré externe avec animation de dessin */}
                <motion.rect
                  x="15"
                  y="15"
                  width="70"
                  height="70"
                  rx="12"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  variants={logoVariants}
                  initial="hidden"
                  animate="visible"
                />

                {/* Zone logo */}
                <motion.foreignObject
                  x="20"
                  y="20"
                  width="60"
                  height="60"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  {/* Remplacez cette div par votre image logo */}
                  <div className="w-full h-full flex items-center justify-center">
                    {/* 
                      Pour ajouter votre logo, remplacez ce texte par :
                      <img src="/chemin/vers/votre-logo.png" alt="Logo" className="w-full h-full object-contain" />
                    */}

                    <Image
                      src="/MyLogo.png" 
                      alt="MyLogo" 
                      width={500} 
                      height={300} 
                      priority 
                      quality={85} 
                      placeholder="blur" 
                      blurDataURL="data:image/jpeg;base64,..." 
                      sizes="100vw" 
                      className="rounded-lg" 
                      style={{ objectFit: "contain" }} 
                    />
                  </div>
                </motion.foreignObject>

                {/* Chevrons décoratifs */}
                <motion.path
                  d="M35 35 L40 40 L35 45"
                  fill="none"
                  stroke="#F13024"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                />
                <motion.path
                  d="M65 35 L60 40 L65 45"
                  fill="none"
                  stroke="#F13024"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                />

                {/* Définition du gradient */}
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#F13024" />
                    <stop offset="50%" stopColor="#F13024" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#F13024" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Effet de halo */}
              <motion.div
                className="absolute inset-0 -z-10 bg-red-500/10 rounded-2xl blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
            </div>
          </motion.div>

          {/* Code qui s'écrit */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 md:p-8 overflow-hidden">
              {/* Lignes de code */}
              <div className="relative font-mono text-left space-y-3">
                {codeLines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className="flex items-center"
                  >
                    {/* Indicateur de ligne */}
                    <span className="text-red-500/50 text-sm mr-4 w-6 text-right">
                      {index + 1}
                    </span>

                    {/* Ligne avec effet de typing */}
                    <div className="relative overflow-hidden">
                      <motion.span
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                        className="text-red-300 font-medium inline-block whitespace-nowrap"
                      >
                        {line}
                      </motion.span>

                      {/* Curseur */}
                      <motion.span
                        className="ml-1 text-red-400 font-bold"
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          repeatDelay: 0.5,
                          delay: index * 0.2 + 0.7,
                        }}
                      >
                        █
                      </motion.span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Console effect */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-red-400 to-red-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
            </div>
          </motion.div>

          {/* Barre de progression */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm">
              <motion.div
                className="h-full bg-gradient-to-r from-red-500 via-red-400 to-red-500 rounded-full"
                variants={progressVariants}
                initial="initial"
                animate="animate"
              />
            </div>

            {/* Texte de chargement */}
            <motion.p
              className="text-gray-300 text-sm tracking-wider"
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              Loading
              <motion.span
                animate={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="ml-1"
              >
                ...
              </motion.span>
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loading;
