import React from 'react'
import loading from '../1.png';

export default function Spinner() {
  return (
    <div className="text-center">
      <img src={loading} alt="Loading" />
    </div>
  )
}
