import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Banner = () => {
  return (
    <div>
        {/* Bên trái */}
        <div>
            <p>Đặt Lịch Khám Với</p>
            <p>Hơn 100 Bác Sĩ Đáng Tin Cậy</p>
        </div>
        <button>Đăng Ký</button>

        {/* Bên phải */}
        <div>
            <img src={assets.appointment_img} alt="" />
        </div>


    </div>
  )
}

export default Banner