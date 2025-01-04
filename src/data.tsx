import { FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import React, { ReactElement } from "react";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoDiscord } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import multiPageFormImg from './assets/multiPageForm.jpg'
import onePageEcomImg from './assets/SPAE.jpg'
import productsWithCart from './assets/productsWithCart.jpg'
import testi1 from './assets/testi1.png'


export type Skills = {
    title:string,
    svg: ReactElement<React.SVGProps<SVGSVGElement>>
}


export type Socials = {
    svg: ReactElement<React.SVGProps<SVGSVGElement>>
    alt:string
    href?:string
    mailto?:string
}

export type Projects = {
    index:string
    title: string
    desc: string
    liveSiteUrl:string
    img:string
}

export type Testimonials = {
    img:string
    testimony:string
    name:string
    profession:string
}


export const skills: Skills[] = [
    {
        title: 'Html',
        svg:<FaHtml5 size={56}/>
    },
    {
        title: 'Css',
        svg:<FaCss3 size={56}/>,
    },
    {
        title: 'Javascript',
        svg: <FaJsSquare size={56}/>,
    },
    {
        title: 'Reactjs',
        svg: <FaReact size={56}/>,
    },
    {
        title: 'Scss/Sass',
        svg: <FaSass size={56}/>,
    },
    {
        title: 'Motion',
        svg: <TbBrandFramerMotion size={56}/>,
    },
    {
        title: 'TailwindCss',
        svg: <RiTailwindCssFill size={56}/>,
    },
    {
        title: 'Git',
        svg: <FaGitAlt size={56}/>,
    },
    {
        title: 'Typescript',
        svg: <BiLogoTypescript size={60}/>,
    },
    {
        title:'Github',
        svg: <FaGithub size={56}/>
    }

]

export const socials : Socials[] = [
    {
        svg: <FaGithub />,
        alt:'Github',
        href:'https://github.com/Sujal-Jariwala'
    },
    {
        svg : <BsTwitterX />,
        alt: 'X/Twitter',
        href:'https://x.com/SujalStwt'
    },
    {
        svg: <IoLogoDiscord />,
        alt: 'Discord',
        href: 'https://discord.gg/uPF9WafUuT'
    },
    {
        svg:<FaLinkedin />,
        alt:'LinkedIn',
        href:'https://www.linkedin.com/in/sujal-jariwala-b9b814267/',
    },
    {
        svg: <HiOutlineMail />,
        alt :'Email',
        mailto:'jariwalasujal1415@gmail.com'
    }
]

export const projects : Projects[] = [
    {
        index:'01',
        title: 'Multi Page Form',
        desc:'This responsive multi-page form utilizes TypeScript for type safety and maintainability, SCSS for flexible and maintainable styling, and Yup for comprehensive form validation, ensuring data integrity and a smooth user experience.',
        liveSiteUrl : 'https://sujal-jariwala.github.io/Multi-Page-Form/',
        img:multiPageFormImg
    },
    {
        index:'02',
        title: 'Single-Page-E-commerce',
        desc:'A responsive single Ecom landing page that lets user add the shoe item to cart, built with Typescript for type safety and maintainability, and SCSS for flexible and maintainable styling.',
        liveSiteUrl:'https://sujal-jariwala.github.io/eCom-1Page-/',
        img: onePageEcomImg
    },
    {
        index:'03',
        title: 'Cafe Menu with Cart',
        desc:'A responsive cafe menu landing page that lets user order the products and add products to cart, built with Javascript and TailwindCSS for styling.',
        liveSiteUrl:'https://sujal-jariwala.github.io/productsWithCart/',
        img:productsWithCart,   
    }
]

export const testimonials : Testimonials[] = [
    {
        img: testi1,
        testimony:'I was struggling to translate my vision for my portfolio website into a reality. I had a general idea of what I wanted, but lacked the technical skills to bring it to life. Working with Jariwala Sujal was a game-changer.',
        name:'Mishan Patel',
        profession:'Visual Designer'
    }
]