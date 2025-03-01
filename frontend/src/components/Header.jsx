import React from 'react'
import {assets} from '../assets/assets_frontend/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
        
        {/* Bên trái */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb[-30px]'>
            <p className='text-3x1 md:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leadingtight'>
                Đặt lịch hẹn với các <br />bác sĩ đáng tin cậy
            </p>
            <div>
                <img src={assets.group_profiles} alt="" />
                <p>Hãy lựa chọn một bác sĩ từ trang web của chúng tôi và đặt lịch hẹn <br /> ngay hôm nay để nhận được sự tư vấn và chăm sóc tốt nhất! </p>
            </div>
            <a href="">
                Đặt Lịch <img src={assets.arrow_icon} alt="" />
            </a>
        </div>

        {/* Bên phải */}

        <div className='md:w-1/2 relative'>
            <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
        </div>
    </div>
  )
}

export default Header