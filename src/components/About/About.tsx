import './styles.scss'
import aboutLogo from '../../assets/about-img.89866d8b.svg'
import { motion } from 'motion/react'
import { useEffect, useRef } from 'react'

export default function About(){
    const ovalRef = useRef<SVGPathElement|null>(null)

    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach(entry=>{
                const element = entry.target as HTMLElement;
                if(entry.isIntersecting){
                    entry.target.classList.add(element.dataset.animation||'')
                }else{
                    entry.target.classList.remove(element.dataset.animation||'')
                }
            })
        },{threshold:.1})
        if(ovalRef.current)observer.observe(ovalRef.current)

        return ()=>observer.disconnect()
    })
    return(
        <>
        <section className='aboutMain'>
            <div className='aboutMain_components'>
                <div className='leftSection'>
                    <img src={aboutLogo} alt="about me" />
                </div>
                <div className='rightSection'>
                    <p className='me'><svg width="291" height="94" viewBox="0 0 291 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path ref={ovalRef} data-animation={'ovalAnimation'} d="M136.541 6.31906C131.977 2.02292 121.413 4.31189 115.689 4.31189C103.117 4.31189 90.29 3.44227 77.8873 5.81727C57.1983 9.779 31.5845 10.656 14.327 24.3836C7.11014 30.1242 7.18277 38.0589 5.07168 46.2394C2.59123 55.8511 3.25795 66.3355 12.2083 72.0538C21.8579 78.2188 36.2451 82.2186 47.4452 84.5986C53.1004 85.8003 58.631 85.2746 64.3389 85.7137C75.6178 86.5813 86.4585 89.3198 97.9032 89.5608C121.645 90.0606 145.331 89.2847 169.046 88.6687C187.474 88.1901 206.267 88.8411 224.634 87.3863C242.981 85.9331 273.55 85.4789 284.514 67.5377C288.62 60.8186 287.816 49.6916 284.57 42.9499C278.579 30.5075 267.533 26.6613 254.741 24.1606C232.355 19.7844 208.867 14.977 186.163 12.9539C152.645 9.96716 118.922 8.03688 85.3584 5.31548" stroke="#FFC000" strokeWidth="7" strokeLinecap="round"/>
                    </svg>About <strong>Me</strong></p>
                    <p className='p p1'>I'm a passionate, detail-oriented Frontend developer, I work in building user-friendly, dynamic web interfaces. With hands on in modern frameworks like ReactJs and styling tools such as Tailwind CSS and SCSS, I create visually appealing and responsive websites that enhance user experiences. User experience, pixel perfect design, and writing clear, maintainable, readable code matters to me.</p>
                    <p className='p p2'>I began my journey as a web developer in August 2024, and since then, I've continued to learn and challange myself by taking on new challanges and learning the latest technologies along the way. I'm currently 19 years of age and I make beautiful UI from designs using modern technologies like ReactJs, TypeScript, Tailwindcss, Scss and much more.</p>
                    <p className='p p3'>When I'm not building UI's, I'm usually reading research papers, watching youtube videos on How tech works under the Hood(talk about passion :D)</p>
                </div>
            </div>
        </section>
        </>
    )
}