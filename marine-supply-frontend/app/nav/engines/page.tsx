'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

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

