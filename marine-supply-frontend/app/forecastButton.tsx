import React, { useState } from 'react'
import axios from 'axios'

// Defines the type for forecast data
type ForecastData = {
    [engine: string]: number;
}

function HourlyDemandForecastButton() {

    // State that controls if the modal is opened or closed
    const [isModalOpen, setIsModalOpen] = useState(false)
    // Stores the forecast data from the backend
    const [forecastData, setForecastData] = useState<ForecastData | null>(null)

    // Call the API endpoint for hourly demand forecast
    const handleForecastClick = async () => {
        try {
            const response = await axios.get<ForecastData>('http://localhost:8000/forecast_hourly_demand')
            setForecastData(response.data)
            setIsModalOpen(true)
        } catch (err) {
            console.error('Error fetching forecast:', err)
            alert('Failed to fetch hourly demand forecast.')
        }
    }

    // Closes the modal
    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    return (
        <div className="flex justify-center items-center ">
            <button className="btn btn-primary" onClick={handleForecastClick}>
                Show Hourly Demand Forecast
            </button>
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
                    <div className="modal modal-open">
                        <div className="modal-box">
                            <h2 className="text-xl font-bold">Hourly Demand Forecast</h2>
                            <div className="mt-4">
                                {forecastData ? (
                                    <ul>
                                        {Object.entries(forecastData).map(([engine, qty], index) => (
                                            <li key={index} className="flex justify-between">
                                                <span>{engine}</span>
                                                <span>{qty} unit(s) expected in next hour</span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>No data available</p>
                                )}
                            </div>
                            <div className="modal-action">
                                <button className="btn" onClick={handleCloseModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default HourlyDemandForecastButton
