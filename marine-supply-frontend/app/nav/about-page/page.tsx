import React from 'react'

function AboutPage() {
  return (
    <div className='h-[85vh] flex justify-center items-start pt-10'>
      <div className="w-[50%] h-[75vh] boatPhotoDiv bg-no-repeat bg-cover bg-center">

      </div>
      <div className='bg-blue-200 h-[75vh] w-[50%] flex items-center justify-center'>
        <div className="max-w-4xl mx-auto text-center text-blue-900">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-2xl mb-6">
            Welcome to K & Y Marine Supply — your trusted source for high-performance marine engines and parts. We specialize in providing top-quality propulsion systems that power the maritime industry, from workboats to barge operations.
          </p>
          <p className="text-2xl mb-6">
            Our platform makes it easy to browse engine specs, track your orders in real-time, and stay ahead of demand with our intelligent forecasting tools. Whether you're maintaining your fleet or outfitting a new vessel, we&apos;re here to help you operate at full power.
          </p>
          <p className="text-2xl">
            Backed by reliable data and responsive support, we&apos;re more than a supplier — we're your marine operations partner.
          </p>
        </div>
      </div>

    </div>
  )

}

export default AboutPage