import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import fotoBuque  from '../assets/images/fotoBuque.jpeg'
import foto1  from '../assets/images/foto1.jpeg'
import foto2  from '../assets/images/foto2.jpeg'
import foto3  from '../assets/images/foto3.jpeg'
import font from '../assets/fonts/PassionOne-Bold.ttf'

const Principal = () => {
    const startDate = new Date("2022-10-5"); // Coloque a data do início do relacionamento (ano-mês-dia)
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [days, setDays] = useState(0);

  useEffect(() => {
    const calculateTimeTogether = () => {
      const today = new Date();
      let y = today.getFullYear() - startDate.getFullYear();
      let m = today.getMonth() - startDate.getMonth();
      let d = today.getDate() - startDate.getDate();

      if (d < 0) {
        m--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        d += lastMonth.getDate();
      }
      if (m < 0) {
        y--;
        m += 12;
      }

      setYears(y);
      setMonths(m);
      setDays(d);
    };

    calculateTimeTogether();
  }, []);
  return (
    <div>
      
        <h1 className='text-center text-white mt-8 font-extrabold text-4xl font-serif '>Eu Amo Você Há...</h1>
        <p className='text-white text-center'>
            <Card anos={years} tituloAnos='Anos' meses={months} tituloMeses='Meses' dias={days} tituloDias='Dias' />
        </p>

        <div className='flex mt-[40px] font-serif'>
          <div>
            <p className='text-white text-center mt-4 font-bold text-[20px] m-2'>Estar com Você me alegra, <br /> a pessoa gentil e engraçada que é <br /> me reforça a cada dia que é contigo que quero ficar até o ultimo dia da minha vida </p>
          </div>
          <div className='m-2'>
            <img src={fotoBuque} alt="" className='h-[300px] w-[750px]'/>
          </div>
        </div>
      
        <p className='text-white font-bold text-center mt-[20px] m-2 text-[20px] font-serif'>
          Fiz isso para que você possa acessar e olhar sempre que sentir saudade, se sentir triste ou solitária, assim você poderá lembrar o quanto EU TE AMO e que sempre vou estar aqui por ti!!
        </p>

        <div className='flex gap-3 m-2 mt-4 '>
          <img src={foto1} alt="" className='h-[300px] w-[700px]' />
          <img src={foto2} alt="" className='h-[300px] w-[700px]' />
        </div> 
        
        <div className='flex m-2 mt-3'>
            <img src={foto3} alt="" className='h-[300px] w-[600px]' />
            
        </div>

    </div>
  )
}

export default Principal
