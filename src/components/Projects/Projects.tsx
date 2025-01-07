import './styles.scss'
import { projects } from '../../data'
import { forwardRef, useEffect, useRef } from 'react'

const Projects = forwardRef<HTMLElement>((_,ref)=>{


    const stickRef = useRef<SVGPathElement|null>(null)
    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach(entry=>{
                const element = entry.target as HTMLElement
                if (entry.isIntersecting) {
                    requestAnimationFrame(()=>{
                        entry.target.classList.add(element.dataset.animation||'')
                    })
                }else{
                    requestAnimationFrame(()=>{
                        entry.target.classList.remove(element.dataset.animation||'')
                    })
                }
            })
        },{threshold:.1})
        if(stickRef.current) observer.observe(stickRef.current)

        return ()=>observer.disconnect()
    })
return(
    <>
    <section className='projectMain' ref={ref}>
        <div className='projectMain_components'>
            <p className='p'>My <strong>Projects <svg className='stick' width="10" height="66" viewBox="0 0 10 66" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path ref={stickRef} data-animation={'stickAnimate'} d="M5.02308 5.9752C3.79173 -3.87554 4.01599 25.813 4.01599 35.7404C4.01599 43.8531 4.01599 51.9658 4.01599 60.0785C4.01599 65.238 4.77634 60.8517 6.03017 58.344" stroke="#FFC000" strokeWidth="7" strokeLinecap="round"/>
            </svg>
            <svg className='arrow' width="54" height="33" viewBox="0 0 54 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.89479 10.0426C5.89479 9.08722 3.47531 7.08561 4.1044 7.80457C5.79419 9.73575 7.51524 11.9649 9.13986 14.0709C12.9422 18.9999 18.8187 20.9762 22.4559 25.6525C23.2802 26.7124 24.1942 27.6296 25.0295 28.6738C26.5047 30.5177 25.7429 28.8681 26.6521 27.5548C31.3952 20.7036 37.4998 12.8817 44.4441 8.25217C46.4361 6.92413 48.0185 4.72946 50.2069 4" stroke="#FFC000" strokeWidth="7" strokeLinecap="round"/>
            </svg>
            </strong></p>
            {projects.map((project, index)=>(
                <>
                <div className={`project ${index ===1 ? 'project--index1': ''}`} key={index} >
                    <div className='leftSection'>
                        <img src={project.img} alt="" />
                    </div>  
                    <div className='rightSection'>
                        <p className='index'>{project.index}</p>
                        <p className='title'>{project.title}</p>
                        <p className='desc'>{project.desc}</p>
                        <a href={project.liveSiteUrl} target={'_blank'}><svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 15 15" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z" fill="currentColor"></path></svg></a>
                    </div>
                </div> 
                </>
            ))}
        </div>
    </section>
    </>
)
})

export default Projects;
