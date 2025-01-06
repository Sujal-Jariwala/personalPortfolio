import { useEffect, useRef, useState } from 'react'
import './styles.scss'
import { boolean } from 'zod';


export default function Footer(){
    const dividerRef = useRef<HTMLDivElement|null>(null);
    const wasInView = useRef(false);


    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach(entry=>{
                const element = entry.target as HTMLElement
                if(entry.isIntersecting && !wasInView.current){
                    entry.target.classList.add(element.dataset.animation||'')
                    wasInView.current = true
                }else{
                    entry.target.classList.remove(element.dataset.animation||'')
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