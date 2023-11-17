import { useEffect, useState } from 'react'
import divider_mobile from './images/pattern-divider-mobile.svg';
import divider_desktop from './images/pattern-divider-desktop.svg';
import logo from './images/icon-dice.svg'
import './App.css'



function App() {

  const [advice, setAdvice] = useState("")
  const getData = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const info = await response.json();
    const advice = info.slip;

    setAdvice(advice)
    
  }
  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <section className='flex items-center justify-center w-screen h-screen bg-dark-blue'>
        <article className='items-center bg-dark-grayish-blue mx-10 rounded-[6px]'>
          <div className='relative flex flex-col items-center justify-center h-auto m-6 '>
            <h1 className='text-center text-neon-green md:text-[13px] text-[10px] tracking-[.3em] mb-4'>ADVICE # {advice.id}</h1>
            {/* Container of the Advices */}
            <div>
              <p className='text-[13px] md:text-[18px] text-light-cyan text-center'>
                "{advice.advice}"
              </p>
            </div>
            <div className='relative flex items-center justify-center mb-6 mt-7'>
              <img className='md:hidden' src={divider_mobile} alt="divider mobile" />
              <img className='hidden md:block' src={divider_desktop} alt="divider desktop" />
            </div>
            <div  onClick={getData}  className='flex absolute cursor-pointer align-middle justify-center bottom-[-40px]'>
              <div className='flex items-center justify-center rounded-full hover:shadow-circle bg-neon-green md:h-11 md:w-11 h-9 w-9'>
                <img className='w-4 md:w-6 ' src={logo} alt="" />
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}

export default App
