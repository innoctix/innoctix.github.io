import logo from './assets/Innoctix_Branding.png';

function App() {

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className='w-[60%]'>
        <img src={logo} alt='logo' className='w-full'/>
        <p className='text-center text-base md:text-2xl lg:text-4xl xl:text-5xl tag-line'>Where ideas meet Innovation</p>
      </div>
    </div>
  )
}

export default App
