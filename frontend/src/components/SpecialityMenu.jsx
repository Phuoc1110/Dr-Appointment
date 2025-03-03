import React from 'react'
import {Link} from 'react-router-dom'
import {specialityData} from '../assets/assets_frontend/assets'

const SpecialityMenu = () => {
  return (
    <div id='speciality'>
        <h1>Tìm kiếm qua chuyên môn</h1>
        <p>Hãy lựa chọn một bác sĩ từ trang web của chúng tôi và đặt lịch hẹn ngay để nhận được sự tư vấn và chăm sóc tốt nhất!</p>
        <div>
            {specialityData.map((item,index)=>(
                <Link key={index} to={`/doctors/${item.speciality}`}>
                    <img src={item.image} alt="" />
                    <p>{item.speciality}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default SpecialityMenu