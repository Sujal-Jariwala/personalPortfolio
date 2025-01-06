import { useEffect, useRef } from 'react'
import './styles.scss'


export default function Footer(){
    const dividerRef = useRef<HTMLDivElement|null>(null);

    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach(entry=>{
                const element = entry.target as HTMLElement
                if(entry.isIntersecting){
                    entry.target.classList.add(element.dataset.animation||'')
                }else{
                    entry.target.classList.remove(element.dataset.animation||'')
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
                    <a href="/">Portfolio</a>
                </div>
                <div className='rightSection'>
                    <p>Developed By Sujal Jariwala</p>
                    <div 
                    ref={dividerRef}
                    data-animation={'divider'}></div>
                </div>
            </div>
        </footer>
        </>
    )
}