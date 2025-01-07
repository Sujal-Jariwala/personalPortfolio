import './styles.scss'
import { socials } from '../../data'
import React from 'react'
import MySvg from '../my Svg/MySvg'


export default function Hero(){
   
    return(
        <>
            <section className='heroMain'>
                <div className='heroMain_content'>
                    <div className='leftSection'>
                        <div className='leftSection_content'>
                            <p className='intro'>Hello I'm <strong className='str'>Jariwala Sujal.</strong></p>
                            <strong>Frontend Developer </strong>
                            <p className='intro'>Based in <strong>Surat,India.</strong></p>
                            <p className='abt'>Hey👋! I'm Sujal Jariwala a passionate and detail-oriented Frontend developer that focuses on building beautiful user-friendly, dynamic web interfaces.</p>
                            <div className='btnContainer'>   
                                {socials.map((social, index)=>(
                                    <a key={index} href={index === 4? `mailto:${social.mailto}`:`${social.href}`} target='_blank' className='btn'>
                                        {React.cloneElement(social.svg, {className:'svg'})}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='rightSection'>
                        <div className='rightSection_content'>
                            <MySvg/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}