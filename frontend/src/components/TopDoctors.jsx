import React from 'react'
import { doctors } from '../assets/assets_frontend/assets'

const TopDoctors = () => {
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
        <h1 className='text-3xl font-medium'>Bác Sĩ Hàng Đầu Để Đặt Lịch</h1>
        <p className='sm:w-1/3 text-center text-sm'>Dễ dàng duyệt qua danh sách bác sĩ đáng tin cậy của chúng tôi.</p>
        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {doctors.slice(0,10).map((item,index)=>(
                <div className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all' key={index}>
                    <img src={item.image} alt="" />
                    <div>
                        <div>
                            <p></p><p>Available</p>
                        </div>
                        <p>{item.name}</p>
                        <p>{item.speciality}</p>
                    </div>
                </div>
            ))}
        </div>
        <button>xem thêm</button>
    </div>
  )
}

export default TopDoctors