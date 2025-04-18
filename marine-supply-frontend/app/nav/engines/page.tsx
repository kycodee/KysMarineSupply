// "use client"
// import React, {useEffect, useState} from 'react'
// import ToastButton from '@/app/toastButton'

// function Engines() {

//     const [engines, setEngines] = useState([])

//     function toastAfterPurchase() {
//         // console.log('heyyy')
//         return (
//             <div className="toast toast-top toast-end ">
//                 <div className="alert alert-info">
//                     <span>New Notification.</span>
//                 </div>
//                 <div className="alert alert-success">
//                     <span>Engine ordered successfully.</span>
//                 </div>
//             </div>
//         )
//     }


//     return (
//         <div className='h-[85vh] items-center flex justify-center'>
//             <div>
//                 <ToastButton />
//                 {}
//                 <div className="carousel rounded-box w-[85vw] ">
//                     <div className="carousel-item p-[10px] card bg-base-100 w-96 shadow-sm">
//                         <figure className='h-[305px]'>
//                             <a href="https://www.labordeproducts.com/engines/mitsubishi-marine-engines/s6a3-y1mpta-3?hsLang=en"
//                             >
//                                 <img
//                                     src="https://www.labordeproducts.com/hubfs/s6a3.png"
//                                     alt="S6A3-Y1MPTA-3" />
//                             </a>
//                         </figure>
//                         <div className="card-body">
//                             <h2 className="card-title">S6A3-Y1MPTA-3</h2>
//                             <div className='flex justify-between'>
//                                 <p>Power</p>
//                                 <p>483 HP</p>
//                             </div>
//                             <div className='flex justify-between'>
//                                 <p>Series</p>
//                                 <p>A Series</p>
//                             </div>
//                             <div className="card-actions justify-end">
//                                 <button className="btn btn-primary" onClick={() => toastAfterPurchase()}>Buy Now</button>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="carousel-item p-[10px] card bg-base-100 w-96 shadow-sm">
//                         <figure className='h-[305px]'>
//                             <a href="https://www.labordeproducts.com/engines/mitsubishi-marine-engines/s12a2-y1mpta-3?hsLang=en"
//                             >
//                                 <img
//                                     src="https://www.labordeproducts.com/hubfs/S12A2-1.png"
//                                     alt="S12A2-Y1MPTA-3" />
//                             </a>
//                         </figure >
//                         <div className="card-body">
//                             <h2 className="card-title">S12A2-Y1MPTA-3</h2>
//                             <div className='flex justify-between'>
//                                 <p>Power</p>
//                                 <p>850 HP</p>
//                             </div>
//                             <div className='flex justify-between'>
//                                 <p>Series</p>
//                                 <p>A Series</p>
//                             </div>
//                             <div className="card-actions justify-end">
//                                 <button className="btn btn-primary">Buy Now</button>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="carousel-item p-[10px] card bg-base-100 w-96 shadow-sm">
//                         <figure className='h-[305px]'>
//                             <a href="https://www.labordeproducts.com/engines/mitsubishi-marine-engines/s6r-y1mptaw-3?hsLang=en"
//                             >
//                                 <img
//                                     src="https://www.labordeproducts.com/hubfs/Imported%20images/S6R-Y1MPTA-3-768x624.png"
//                                     alt="S6R-Y1MPTAW-3" />
//                             </a>
//                         </figure>
//                         <div className="card-body">
//                             <h2 className="card-title">S6R-Y1MPTAW-3</h2>
//                             <div className='flex justify-between'>
//                                 <p>Power</p>
//                                 <p>590 HP</p>
//                             </div>
//                             <div className='flex justify-between'>
//                                 <p>Series</p>
//                                 <p>R Series</p>
//                             </div>
//                             <div className="card-actions justify-end">
//                                 <button className="btn btn-primary">Buy Now</button>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="carousel-item p-[10px] card bg-base-100 w-96 shadow-sm">
//                         <figure className='h-[305px]'>
//                             <a href="https://www.labordeproducts.com/engines/auxiliary/173-hp-bpu?hsLang=en"
//                             >
//                                 <img
//                                     src="https://www.labordeproducts.com/hubfs/Imported%20images/LPI-173-1-768x762.png"
//                                     alt="173 HP BPU" />
//                             </a>
//                         </figure>
//                         <div className="card-body">
//                             <h2 className="card-title">173 HP BPU</h2>
//                             <div className='flex justify-between'>
//                                 <p>Power</p>
//                                 <p>173 HP</p>
//                             </div>
//                             <div className='flex justify-between'>
//                                 <p>Series</p>
//                                 <p>BPU</p>
//                             </div>
//                             <div className="card-actions justify-end">
//                                 <button className="btn btn-primary">Buy Now</button>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="carousel-item p-[10px] card bg-base-100 w-96 shadow-sm">
//                         <figure className='h-[305px]'>
//                             <a href="https://www.labordeproducts.com/engines/auxiliary/429-hp-low-profile-bpu?hsLang=en"
//                             >
//                                 <img
//                                     src="https://www.labordeproducts.com/hubfs/Imported%20images/S6B3-429BPU-1-768x605.png"
//                                     alt="429 HP Low Profile BPU" />
//                             </a>
//                         </figure>
//                         <div className="card-body">
//                             <h2 className="card-title">429 HP Low Profile BPU</h2>
//                             <div className='flex justify-between'>
//                                 <p>Power</p>
//                                 <p>429 HP</p>
//                             </div>
//                             <div className='flex justify-between'>
//                                 <p>Series</p>
//                                 <p>BPU</p>
//                             </div>
//                             <div className="card-actions justify-end">
//                                 <button className="btn btn-primary">Buy Now</button>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="carousel-item p-[10px] card bg-base-100 w-96 shadow-sm">
//                         <figure className='h-[305px]'>
//                             <a href="https://www.labordeproducts.com/engines/auxiliary/429-hp-bpu?hsLang=en"
//                             >
//                                 <img
//                                     src="https://www.labordeproducts.com/hubfs/Imported%20images/DSC0022-768x623.png"
//                                     alt="429 HP BPU" />
//                             </a>
//                         </figure>
//                         <div className="card-body">
//                             <h2 className="card-title">429 HP BPU</h2>
//                             <div className='flex justify-between'>
//                                 <p>Power</p>
//                                 <p>429 HP</p>
//                             </div>
//                             <div className='flex justify-between'>
//                                 <p>Series</p>
//                                 <p>BPU</p>
//                             </div>
//                             <div className="card-actions justify-end">
//                                 <button className="btn btn-primary">Buy Now</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Engines

'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import ToastButton from '@/app/toastButton'

type Engine = {
  id: number
  name: string
  power: string
  series: string
  image_url: string
  link: string
  stock: number
}

function Engines() {
  const [engines, setEngines] = useState<Engine[]>([])
  const [toastVisible, setToastVisible] = useState(false)

  useEffect(() => {
    axios.get<Engine[]>('http://localhost:8000/engines')
      .then((res: { data: Engine[] }) => setEngines(res.data))
      .catch((err: unknown) => {
        if (axios.isAxiosError(err)) {
          console.error('Failed to fetch engines:', err.message)
        } else {
          console.error('Unexpected error:', err)
        }
      })
  }, [])

  const handleBuy = async (engineId: number) => {
    try {
      await axios.post('http://localhost:8000/orders', {
        engine_id: engineId,
        quantity: 1,
      })

      setToastVisible(true)
      setTimeout(() => setToastVisible(false), 3000)

      // Decrease stock count locally
      setEngines(prev =>
        prev.map(engine =>
          engine.id === engineId
            ? { ...engine, stock: engine.stock - 1 }
            : engine
        )
      )
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        console.error('Failed to place order:', err.message)
        alert('Order failed: ' + (err.response?.data?.detail || 'Unknown error'))
      } else {
        console.error('Unexpected error:', err)
        alert('Something went wrong.')
      }
    }
  }

  return (
    <div className='h-[85vh] flex justify-center items-start pt-10'>
      <div>
        {toastVisible && (
          <div className="toast toast-top toast-end z-50">
            <div className="alert alert-success">
              <span>Engine ordered successfully.</span>
            </div>
          </div>
        )}

        <div className="carousel rounded-box w-[85vw]">
          {engines.map(engine => (
            <div key={engine.id} className="carousel-item p-[10px] card bg-base-100 w-96 shadow-sm">
              <figure className='h-[305px]'>
                <a href={engine.link} target="_blank" rel="noopener noreferrer">
                  <img src={engine.image_url} alt={engine.name} />
                </a>
              </figure>
              <div className="card-body">
                <h2 className="card-title">{engine.name}</h2>
                <div className='flex justify-between'><p>Power</p><p>{engine.power}</p></div>
                <div className='flex justify-between'><p>Series</p><p>{engine.series}</p></div>
                <div className='flex justify-between'><p>In Stock</p><p>{engine.stock}</p></div>
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleBuy(engine.id)}
                    disabled={engine.stock < 1}
                  >
                    {engine.stock < 1 ? 'Out of Stock' : 'Buy Now'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Engines

