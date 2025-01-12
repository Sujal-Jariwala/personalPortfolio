import React, { forwardRef, useEffect, useState } from 'react'
import './styles.scss'
import SideBar from './SideBar/SideBar';
import resumePdf from '../../assets/Resume.pdf'

interface HeaderProps{
    refs:{
        aboutRef: React.RefObject<HTMLElement>,
        skillsRef : React.RefObject<HTMLElement>,
        projectRef :  React.RefObject<HTMLElement>,
        contactRef : React.RefObject<HTMLElement>,

    }
}
const Header = forwardRef<HTMLElement, HeaderProps>(({refs}, ref)=>{
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth<=778);
    const [isOpen, setIsOpen] = useState(false);


    const body = document.querySelector('body') as unknown as HTMLElement;
    const toggleSwitcher = () =>{
        setIsOpen((prev)=>!prev)
    }

    const scrollToView = (ref:React.RefObject<HTMLElement>) =>{
        
        ref.current?.scrollIntoView({behavior:'smooth'})
        setIsOpen(false)
    }
    useEffect(()=>{
        const handleResize = () =>{
            setIsSmallScreen(window.innerWidth<=778)
        }
        window.addEventListener('resize', handleResize)

        return()=> window.removeEventListener('resize', handleResize);
    },[isSmallScreen])

    useEffect(()=>{
        isOpen ? body.style.overflowY ='hidden' : body.style.overflowY ='scroll'
    },[isOpen])





return(
    <>
    <header className='headerMain' ref={ref}>
        <div className='headerMain_components'>
            {isSmallScreen?(
                <>
                <div className='itemsComponents'>
                    <div className='itemsComponents_content'>
                        <div className='leftSection'>
                            <p>Portfolio</p>
                        </div>
                        <div className='rightSection'>
                            <div className={`container ${isOpen ? 'active':''}`} onClick={toggleSwitcher}>
                            <div className="lines line__1"> </div>
                            <div className="lines line__2"></div>
                            <div className="lines line__3"></div>
                            </div>
                        </div>
                        {isOpen&&(
                            <>
                                <SideBar refs={refs} onNavigate={scrollToView}/>
                            </>
                        )}
                    </div>
                </div>
                
                </>
            ):(
                <>
                    
            <div className='container1'>
                <p>Portfolio</p>
            </div>
            <div className='container2'>
                <nav>
                    <li onClick={()=>scrollToView(refs.aboutRef)}>About Me</li>
                    <li onClick={()=>scrollToView(refs.skillsRef)}>Skills</li>
                    <li onClick={()=>scrollToView(refs.projectRef)}>Projects</li>
                    <li onClick={()=>scrollToView(refs.contactRef)}>Contact</li>
                </nav>
            </div>
            <div className='container3'>
                <a href={resumePdf} download={'Jariwala_Sujal_Resume.pdf'} target='_blank'>
                <button>
                    <span>Resume</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 12.5V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H6.5C5.09987 17.5 4.3998 17.5 3.86502 17.2275C3.39462 16.9878 3.01217 16.6054 2.77248 16.135C2.5 15.6002 2.5 14.9001 2.5 13.5V12.5M14.1667 8.33333L10 12.5M10 12.5L5.83333 8.33333M10 12.5V2.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </button>
                </a>
            </div>  
                
                </>
            )}
        </div>
    </header>
    </>
)
})

export default Header;

