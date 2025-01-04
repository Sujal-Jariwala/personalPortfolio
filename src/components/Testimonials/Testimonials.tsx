import './styles.scss'
import { testimonials } from '../../data'


export default function Testimonials(){
    return(
        <>
        <section className='testimonialsMain'>
            <div className='testimonialsMain_components'>
                <div className='container1'>
                    <p className='testi'>My <strong>Testimonials</strong></p>
                </div>
                <div className='container2'>
                    {testimonials.map((testimony, index)=>(
                        <>
                            <div className='content' key={index}>
                                <img src={testimony.img} alt="" />
                                <p className='test'>{testimony.testimony}</p>
                                <div className='divider'></div>
                                <p className='name'>{testimony.name}</p>
                                <p className='profession'>{testimony.profession}</p>
                            </div> 
                        </>
                    ))}
                </div>
            </div>
        </section>
        </>
    )
}