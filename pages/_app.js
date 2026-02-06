// import '../styles/globals.css';
// // componet
// import Layout from '../components/Layout';
// import Transition from '../components/Transition';

// // router
// import {useRouter} from "next/router";

// // framer motion
// import {AnimatePresence , motion} from 'framer-motion' 
// import Head from 'next/head';

// function MyApp({ Component, pageProps }) {
//   const router = useRouter(); 
//   return (
//     <Layout>
//       <Head>
//         <link rel='shortcut icon' type='x-icon' href='/iconeheadpage.png'></link>
//          <title>Sofyane Acoriy |web developer</title>
//       </Head>
//       <AnimatePresence mode='wait'>
//         <motion.div key={router.route} className='h-full'>
//           <Transition/>
//           <Component {...pageProps} />
//         </motion.div>
//       </AnimatePresence>
//     </Layout>
//    );
// }

// export default MyApp;


// pages/_app.js
import '../styles/globals.css';
// composants
import Layout from '../components/Layout';
import Transition from '../components/Transition';
import Loading from '../components/Loading';

// router
import {useRouter} from "next/router";

// framer motion
import {AnimatePresence , motion} from 'framer-motion' 
import Head from 'next/head';
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const router = useRouter(); 
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    // Afficher le loader uniquement sur la page d'accueil au chargement initial
    if (router.pathname === '/') {
      setShowLoader(true);
      
      // Cacher le loader après 2 secondes
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [router.pathname]);

  return (
    <>
      {/* Loader uniquement pour la page d'accueil */}
      {showLoader && <Loading />}
      
      {/* Contenu principal */}
      <div style={{ display: showLoader ? 'none' : 'block' }}>
        <Layout>
          <Head>
            <link rel='shortcut icon' type='x-icon' href='/EntetPage.png' >
            </link>
            <title>Sofyane Acoriy | web developer</title>
          </Head>
          <AnimatePresence mode='wait'>
            <motion.div key={router.route} className='h-full'>
              <Transition/>
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </Layout>
      </div>
    </>
  );
}

export default MyApp;