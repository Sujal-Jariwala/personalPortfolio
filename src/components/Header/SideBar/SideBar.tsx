import './styles.scss'
import { motion } from 'motion/react'
import resumePdf from '../../../assets/sujal_jariwala_resume.pdf'

export default function SideBar(){
    return(
        <>
            <section className='sideBarSection'>
                <motion.div initial={{opacity:0, x:-155}} animate={{opacity:1, x:0}} transition={{duration:.5}} exit={{opacity:1, x:55}} className='sideBarSection_components'>
                    <div className='container1'>
                        <nav>
                            <li>About Me</li>
                            <li>Skills</li>
                            <li>Project</li>
                            <li>Contact Us</li>
                        </nav>
                    </div>
                    <div className='btnContainer'>
                        <button>
                            <a href={resumePdf} download={'Jariwala_Sujal_Resume.pdf'}><span>Resume</span></a>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 12.5V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H6.5C5.09987 17.5 4.3998 17.5 3.86502 17.2275C3.39462 16.9878 3.01217 16.6054 2.77248 16.135C2.5 15.6002 2.5 14.9001 2.5 13.5V12.5M14.1667 8.33333L10 12.5M10 12.5L5.83333 8.33333M10 12.5V2.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </button> 
                    </div>
                    
                </motion.div>
            </section>
        </>        
    )
}