import { HashLink  } from 'react-router-hash-link';
import Logo from '../assets/Innoctix_Branding_300.png'
import { ReactElement, useState } from 'react';

interface NavProps {
    theme: 'light' | 'dark';
    setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark' >>;
}

export default function Nav({ theme, setTheme } : NavProps) {

    const [menuOpen, setMenuOpen] = useState(false);

    const themes: { [key in 'light' | 'dark' ]: ReactElement } = {
        dark: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path></svg>,
        light: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"></path></svg>
    }

    return (
        <nav className='w-full h-[100px] shadow-box fixed pr-4 bg-bgColor z-50'>
            <div className='view-container flex justify-between items-center px-2 h-full'>
                <img src={Logo} alt='Innoctix Logo' className='h-[60px] md:h-[80px]' />

                <div className='flex items-center'>
                    <button className='lg:hidden mr-5 k2d-bold' onClick={() => setTheme((prev: 'light' | 'dark') => prev === 'dark' ? 'light' : 'dark' )} title={theme === 'dark' ? 'light' : 'dark' }>{ themes[theme] }</button>
                    <button className='lg:hidden' onClick={() => setMenuOpen(!menuOpen)}>
                        { menuOpen ? <svg className='fill-headerColor stroke-headerColor' strokeWidth="0" viewBox="0 0 512 512" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="48" d="M368 368L144 144M368 144L144 368"></path></svg> :
                        <svg className='fill-headerColor stroke-headerColor' strokeWidth="0" viewBox="0 0 512 512" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="48" d="M88 152h336M88 256h336M88 360h336"></path></svg>}
                    </button>
                    <ul className={`flex-col bg-bgColor lg:flex-row lg:flex gap-6 lg:gap-16 text-xl k2d-regular absolute lg:relative top-[100px] lg:top-0 w-full lg:w-fit left-0 items-center ${menuOpen ? 'flex' : 'hidden'} lg:flex`}>
                        <li>
                            <HashLink to="/#home" onClick={() => setMenuOpen(false)} className='k2d-bold'>Home</HashLink>
                        </li>
                        <li>
                            <HashLink to="/#about" onClick={() => setMenuOpen(false)} >About us</HashLink>
                        </li>
                        <li>
                            <HashLink to="/#careers" onClick={() => setMenuOpen(false)} >Careers</HashLink>
                        </li>
                        <li className='mb-4 lg:mb-0'>
                            <HashLink to="/#connect" onClick={() => setMenuOpen(false)} >Connect</HashLink>
                        </li>
                        <li className='hidden lg:block'>
                            <button className='k2d-bold' onClick={() => setTheme((prev: 'light' | 'dark') => prev === 'dark' ? 'light' : 'dark' )} title={theme === 'dark' ? 'light' : 'dark' }>{ themes[theme] }</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}