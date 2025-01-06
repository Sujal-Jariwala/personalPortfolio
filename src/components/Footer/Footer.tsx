import { useEffect, useRef, useState } from 'react'
import './styles.scss'
import { boolean } from 'zod';


export default function Footer(){
    const dividerRef = useRef<HTMLDivElement|null>(null);
    const wasInView = useRef(false);


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
                    <a href="/">Portfolio</a>
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