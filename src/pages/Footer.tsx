export default function Footer() {
    return (
        <footer className='w-[calc(100%+20px)] h-[100px] shadow-box pr-4 bg-bgColor z-50 relative -left-[10px]'>
            <div className='view-container flex justify-between items-center px-2 h-full'>
                <div className='flex items-center'>
                    <p className='k2d-regular text-sm'>© 2024 Innoctix</p>
                </div>
                <div className='flex flex-col sm:flex-row items-center'>
                    <a href='' className='k2d-regular text-sm'>Privacy Policy</a>
                    <a href='' className='k2d-regular text-sm ml-4'>Terms of Service</a>
                </div>
            </div>
        </footer>
    )
}