import './styles.scss'
import { socials } from '../../data'
import React, { useState } from 'react'



export default function Contact(){

    const [formData, setFormData] = useState({
        name:'',
        email:'',
        websiteUrl:'',
        message:'',
    })
    
    
    const handleSubmit = (e:SubmitEvent | React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const {name, value} = e.target;
        setFormData(prev=>({
            ...prev,
            [name] : value
        }))
    };
    

    return(
        <>
        <section className="contactMain">
            <div className="contactMain_components">
                <div className='leftSection'>
                    <div className='leftSection_content'>
                        <form onSubmit={handleSubmit}>
                            <input 
                            type="text" 
                            placeholder='Your name *' 
                            value={formData.name} 
                            onChange={handleChange}
                            name='name'
                            />
                            
                            <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder='Email *' 
                            value={formData.email}
                            onChange={handleChange}
                            
                            />

                            <input 
                            type="text" 
                            placeholder='Your Website (if exists)'
                            value={formData.websiteUrl}
                            onChange={handleChange}
                            name='websiteUrl'
                            />

                            <textarea 
                            name="message" 
                            id="message" 
                            placeholder='How Can I help?'
                            value={formData.message}
                            onChange={handleChange}
                            ></textarea>
                            <div className='btnContainer'>
                                <button className='giT'>Get In Touch</button>
                                {socials.map((social, index)=>(
                                    <a key={index} href={index === 4? `mailto:${social.mailto}`:`${social.href}`} target='_blank' className='btn'>
                                    {React.cloneElement(social.svg, {className:'svgs'})}
                                    </a>
                                ))}
                            </div>                            
                        </form>
                    </div>
                </div>
                <div className='rightSection'>
                    <div className='rightSection_content'>
                        <h2>Let's Talk for <br />Something Special !</h2>
                        <p>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
                        <a href="mailto:jariwalasujal1415@gmail.com">jariwalasujal1415@gmail.com</a>
                        <a href="tel:+91 6353952488">6353952488</a>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}