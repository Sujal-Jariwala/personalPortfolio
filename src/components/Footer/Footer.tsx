import { useEffect, useRef} from 'react'
import './styles.scss'


export default function Footer(){

    const dividerRef = useRef<HTMLDivElement|null>(null);
    const wasInView = useRef(false);

    const handleScroll = ()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth',
        })
    }

    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach(entry=>{
                if(entry.isIntersecting && !wasInView.current){
                    entry.target.classList.add('animate')
                    wasInView.current = true
                }else{
                    entry.target.classList.remove('animate')
                    wasInView.current = false
                }
            })
        },{threshold:.1})
        if(dividerRef.current) observer.observe(dividerRef.current)

        return ()=> observer.disconnect()
    },[])
    
    return(
        <>
        <footer className='footerMain'>
            <div className='footerMain_components'>
                <div className='leftSection'>
                    <p onClick={handleScroll}>Portfolio</p>
                </div>
                <div className='rightSection'>
                    <p>Developed By Sujal Jariwala</p>
                    <div 
                    ref={dividerRef}
                    className={'divider'}></div>
                </div>
            </div>
        </footer>
        </>
    )
}