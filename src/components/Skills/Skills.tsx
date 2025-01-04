import './styles.scss'
import { motion } from 'motion/react'
import React from 'react'
import { skills } from '../../data'

export default function Skills(){
    return(
        <>
        <section className='skillsMain'>
            <div className='skillsMain_components'>
                <div className='container1'>
                    <p className='md'>My <svg style={{
                        backfaceVisibility:'hidden',
                        transform:'translateZ(0)'
                    }} className='line1' width="178" height="15" viewBox="0 0 178 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path style={{
                        strokeDasharray:178,
                        strokeDashoffset:178,
                    }} initial={{strokeDasharray:178, strokeDashoffset:178}} whileInView={{strokeDashoffset:0}} transition={{duration:.75}} d="M4.2007 4.59502C60.8452 4.23423 117.456 3.57268 173.806 10.6165" stroke="#FFC000" stroke-width="7" stroke-linecap="round"/>
                    </svg>
                    <svg style={{
                        backfaceVisibility:'hidden',
                        transform:'translateZ(0)'
                    }} className='line2' width="191" height="13" viewBox="0 0 191 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path style={{
                        strokeDasharray:191,
                        strokeDashoffset:191,
                    }} initial={{strokeDasharray:191, strokeDashoffset:191}} whileInView={{strokeDashoffset:0}} transition={{duration:1.5}} d="M4.28312 5.65953C2.46813 4.99085 8.14772 5.39874 10.0816 5.43651C30.4849 5.83502 50.907 4.5129 71.3002 4.0984C110.006 3.3117 148.469 4.29906 186.935 8.67028" stroke="#FFC000" stroke-width="7" stroke-linecap="round"/>
                    </svg>
                    <strong>Skills</strong></p>
                </div>
                <div className='container2'>
                        {skills.map((skill, index)=>(
                            <>
                            <motion.div className='tabs' key={index}>
                                {React.cloneElement(skill.svg,{className:'skills'})}
                                <p>{skill.title}</p>
                            </motion.div>
                            </>
                        ))}
                </div>
            </div>
        </section>
        </>
    )
}