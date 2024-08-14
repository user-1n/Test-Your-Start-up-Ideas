import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'

function Hero() {

  const {theme,setTheme}=useContext(ThemeContext)
  return (
    <div className='my-10 flex-col items-center gap-5'>

      <h2 className='text-3xl font-bold text-center'>Top 20 Productive ideas for your next startup</h2>  
      <h2 className='text-center my-3'>
        <strong className='text-secondary'>Like your favourite ideas.</strong>
          Write your best ideas to gather public opinion and start working on them, No account needed!</h2>

        <div>
     
          <select 
            onChange={(event)=>setTheme(event.target.value)}
          className="select select-bordered border-primary w-full max-w-xs">
            <option disabled selected>Select Theme</option>
            <option>light</option>
            <option>dark</option>
            <option>forest</option>
            <option>night</option>
            <option>cupcake</option>
            <option>bumblebee</option>
            <option>emerald</option>
            <option>synthwave</option>
            <option>retro</option>
            <option>cyberpunk</option>
            <option>valentine</option>
            <option>halloween</option>
            <option>garden</option>
            <option>aqua</option>
            <option>lofi</option>




          </select>
        </div>
    </div>
  
  )
}

export default Hero