"use client"
import React from 'react'
import { useState } from 'react'

function ToastButton() {

    const [purchased, setPurchased] = useState('')


    // function toastAfterPurchase() {

    //     if (purchased) {
            return (
                <div className="toast toast-top toast-end w-[110px] h-[110px] mr-[50px]">
                    <div className="alert alert-info">
                        <span>New mail arrived.</span>
                    </div>
                    <div className="alert alert-success">
                        <span>Message sent successfully.</span>
                    </div>
                </div>
            )
        }

//     }
// }

export default ToastButton