import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import CustomButton from '../components';
import {
    headTextAnimation,
    headContentAnimation,
    headContainerAnimation,
    slideAnimation
} from '../config/motion';

import state from '../store';

const Home = () => {
  const snap = useSnapshot(state);
    return (
    <AnimatePresence>
        {snap.intro && (
            <motion.section className='home' {...slideAnimation('left')}>
                <motion.header {...slideAnimation('down')}>
                    <img 
                        src='./threejs.png'  
                        alt='logo'   
                        className='w-8 h-8 object-contain'/>
                </motion.header>
                <motion.div {...headTextAnimation}>
                    <motion.div>
                        <h1 className='head-text'>
                            Let's <br className='xl:block hidden'/> Do It.
                        </h1>
                    </motion.div>
                    <motion.div {...headContentAnimation} className= 'flex flex-col gap-5'>
                            <p className='max-w-md font-normal text-gray-600 text-base'>
                                Create your unique and exclusive shirt with our brand new 3d customization too. <strong>Unleadsh your imgagination</strong> and define your own style.
                            </p>
                        <CustomButton
                                type='filled'
                                title='Customize It'
                                handleClick = {()=> state.intro = false}
                                customStyles="w-fit px-4 py-2 font-bold text-sm"
                                />
                    </motion.div>
                </motion.div>
            </motion.section>
            )}
    </AnimatePresence>
  )
}

export default Home