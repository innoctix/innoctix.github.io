import bgImage from '../assets/landing_bg.png';
import bgImageDark from '../assets/landing_bg_dark.png';
import { useState } from 'react';

export default function Landing( { theme } : { theme : string } ) {

    const [contactForm, setContactForm] = useState({name: '', email: '', message: ''});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setContactForm(prev => ({...prev, [e.target.name]: e.target.value}));
    }

    const mailData = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const url = 'mailto:innoctix@gmail.com?subject=Innoctix Contact&body=Name: ' + contactForm.name + '%0D%0AEmail: ' + contactForm.email + '%0D%0AMessage: ' + contactForm.message;
        
        window.open(url, '_blank');
    }

    const build = [
        {
            title: 'AI-powered Solutions',
            // description: 'Leveraging the power of Artificial Intelligence, we build intelligent systems that automate processes, analyze data, and deliver actionable insights. Our AI-powered solutions are designed to enhance productivity, efficiency, and decision-making across industries.'
            description: 'Leveraging artificial intelligence to automate tasks, gain insights, and improve decision-making processes.'
        },
        {
            title: 'Web-based Applications',
            // description: 'We specialize in developing web-based applications that are intuitive, scalable, and secure. From e-commerce platforms to enterprise solutions, we build custom applications that cater to the unique needs of our clients.'
            description: 'Building scalable, intuitive, and secure platforms tailored to meet diverse business needs.'
        },
        {
            title: 'Innovative Tools',
            // description: 'Our innovative tools are designed to simplify complex tasks, streamline operations, and drive growth. From project management to data visualization, we build tools that empower businesses to achieve more.'
            description: 'Pioneering tools and software that address complex challenges in unique, effective ways.'
        }
    ];

    const projects = [
        {
            title: 'CODE-OCTIX',
            description: 'Leveraging artificial intelligence to automate tasks, gain insights, and improve decision-making processes.',
            image: 'codespace.png'
        },
        {
            title: 'CODE-OCTIX',
            description: 'Leveraging artificial intelligence to automate tasks, gain insights, and improve decision-making processes.',
            image: 'codespace.png'
        },
        {
            title: 'CODE-OCTIX',
            description: 'Leveraging artificial intelligence to automate tasks, gain insights, and improve decision-making processes.',
            image: 'codespace.png'
        },
        {
            title: 'CODE-OCTIX',
            description: 'Leveraging artificial intelligence to automate tasks, gain insights, and improve decision-making processes.',
            image: 'codespace.png'
        }
    ];

    return (
        <>
            <div className='section-container h-full relative flex justify-center items-center' id='home'>
                <img src={ theme == 'light' ? bgImage : bgImageDark} alt='Innoctix Landing' className='w-full lg:h-full object-cover object-right absolute bottom-0 h-[50%]' />
                <div className='view-container flex flex-col justify-center h-full absolute px-2 pb-[100px] tracking-widest'>
                    <p className='text-2xl md:text-4xl k2d-bold text-headerColor'>Welcome to</p>
                    <h1 className='text-[66px] md:text-[100px] lg:text-[130px] my-0 leading-[66px] md:leading-[130px] k2d-bold text-primary'>Innoctix</h1>
                    <p className='text-2xl md:text-4xl k2d-bold text-secondary'>Where ideas meet Innovation</p>
                    <div className='flex flex-col gap-5 md:flex-row mt-10 md:mt-20'>
                        <a className='flex justify-center border-primary border-2 hover:bg-primary hover:shadow-xl hover:text-white transition-all px-8 py-4 mr-4 rounded-md uppercase text-primary k2d-bold text-base md:text-xl cursor-pointer' href='#projects'>Explore our Solutions</a>
                        <a className='flex justify-center bg-secondary/85 hover:bg-secondary hover:shadow-xl transition-all px-8 py-4 mr-4 rounded-md border-2 border-secondary uppercase text-white k2d-bold text-base md:text-xl cursor-pointer' href='#connect'>Get in Touch</a>
                    </div>
                </div>
            </div>
            <div className='section-container min-h-full flex flex-col items-center pt-20' id='about'>
                <h2 className='text-3xl md:text-6xl k2d-bold text-headerColor relative w-fit'>
                    About us
                    <span className='absolute h-[5px] md:h-[10px] w-3/4 bg-gradient-to-r from-primary to-secondary rounded-full -bottom-4 left-8'></span>
                </h2>
                <div className='view-container flex flex-col justify-start py-10 md:py-20 px-8 gap-5 md:gap-10 tracking-widest max-w-[1300px] text-center'>
                    <p className='text-base md:text-3xl k2d-light text-textColor leading-5 md:leading-10'>At INNOCTIX, we are driven by innovation and a passion for technology. Founded by two ambitious tech enthusiasts, we are a product-based software company dedicated to solving real-world problems with cutting-edge solutions. Our expertise spans across AI-powered systems, web-based applications, and innovative tools that redefine productivity and efficiency.</p>
                    <p className='text-base md:text-3xl k2d-light text-textColor leading-5 md:leading-10'>With a vision to deliver transformative products, we embrace challenges and craft solutions that empower individuals and businesses alike. </p>
                    <p className='text-base md:text-3xl k2d-light text-textColor leading-5 md:leading-10'>At INNOCTIX, innovation isn’t just a goal; it’s our DNA</p>
                </div>
                <div className='flex flex-col gap-5 md:flex-row mt-10 md:mt-20'>
                    <a className='flex justify-center border-primary border-2 hover:bg-primary hover:shadow-xl hover:text-white transition-all px-8 py-4 mr-4 rounded-md uppercase text-primary k2d-bold text-xl cursor-pointer' href='#projects'>Explore our Solutions</a>
                    <a className='flex justify-center bg-secondary/85 hover:bg-secondary hover:shadow-xl transition-all px-8 py-4 mr-4 rounded-md border-2 border-secondary uppercase text-white k2d-bold text-xl cursor-pointer' href='#connect'>Get in Touch</a>
                </div>
            </div>
            <div className='section-container flex flex-col items-center pt-20'>
                <h2 className='text-3xl md:text-6xl k2d-bold text-headerColor relative w-fit'>
                    What we Build
                    <span className='absolute h-[5px] md:h-[10px] w-4/5 bg-gradient-to-r from-primary to-secondary rounded-full -bottom-2 md:-bottom-4 left-6 md:left-10'></span>
                </h2>
                <div className='w-full flex justify-around py-10 md:py-20 px-8 gap-10 tracking-widest text-justify flex-wrap'>
                    {
                        build.map((item, index) => (
                            <div key={index} className='flex flex-col basis-80 flex-grow max-w-[550px] gap-4 bg-bgColor shadow-box p-6 rounded-xl'>
                                <h3 className='text-xl md:text-2xl k2d-semibold text-subHeaderColor text-center'>{item.title}</h3>
                                <p className='text-base md:text-xl k2d-extralight text-textColor leading-1'>{item.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='section-container flex flex-col items-center pt-20' id='projects'>
                <h2 className='text-3xl md:text-6xl k2d-bold text-headerColor relative w-fit'>
                    Our Upcoming Projects
                    <span className='absolute h-[5px] md:h-[10px] w-3/4 bg-gradient-to-r from-primary to-secondary rounded-full -bottom-4 md:-bottom-6 left-10 md:left-20'></span>
                </h2>
                <div className='view-container flex flex-col justify-start py-0 md:py-20 px-0 md:px-8 gap-10 tracking-widest max-w-[1300px] text-center'>
                    <div className='w-full flex justify-around py-20 px-8 gap-10 md:gap-16 tracking-widest text-justify flex-wrap'>
                        {
                            projects.map((item, index) => (
                                <div key={index} className='flex flex-col basis-[500px] flex-grow max-w-[600px] gap-4 bg-bgColor shadow-box p-4 rounded-xl cursor-pointer'>
                                    <img src={item.image} alt={item.title} className='w-full h-[300px] object-cover rounded-xl' />
                                    <h3 className='text-xl md:text-2xl k2d-semibold text-subHeaderColor text-center'>{item.title}</h3>
                                    <p className='text-base md:text-xl k2d-extralight text-textColor leading-1'>{item.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='section-container flex flex-col items-center pt-20' id='connect'>
                <h2 className='text-3xl md:text-6xl k2d-bold text-headerColor relative w-fit'>
                    Let's Innovate Together
                    <span className='absolute h-[5px] md:h-[10px] w-3/4 bg-gradient-to-r from-primary to-secondary rounded-full -bottom-2 md:-bottom-6 left-10 md:left-20'></span>
                </h2>
                <div className='view-container flex flex-col justify-start py-10 px-8 gap-10 tracking-widest max-w-[1300px] text-center'>
                    <div className='w-full flex justify-around py-10 px-8 gap-16 tracking-widest text-justify flex-wrap'>
                        <form className='flex flex-col gap-2 w-full max-w-[600px]' onSubmit={mailData}>
                            <label htmlFor='name' className='text-xl k2d-semibold text-subHeaderColor mt-2'>Name</label>
                            <input type='text' name='name' value={contactForm.name} onChange={handleChange} placeholder='Name' required className='k2d-light text-textColor p-4 rounded-md border-[1px] border-textColor bg-bgColor' />
                            <label htmlFor='email' className='text-xl k2d-semibold text-subHeaderColor mt-2'>Email</label>
                            <input type='email' name='email' value={contactForm.email} onChange={handleChange} placeholder='Email' required className='k2d-light text-textColor p-4 rounded-md border-[1px] border-textColor bg-bgColor' />
                            <label htmlFor='message' className='text-xl k2d-semibold text-subHeaderColor mt-2'>Message</label>
                            <textarea name='message' value={contactForm.message} onChange={handleChange} placeholder='Message' required className='k2d-light text-textColor p-4 rounded-md border-[1px] border-textColor bg-bgColor'></textarea>
                            <button className='bg-secondary/85 hover:bg-secondary hover:shadow-xl transition-all px-8 py-4 rounded-md border-2 border-secondary uppercase text-white k2d-bold text-xl cursor-pointer mt-2'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}