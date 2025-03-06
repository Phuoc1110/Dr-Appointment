import React from 'react'
import {assets} from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div>
        <div>
            {/* LEFT */}
            <div>
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt blanditiis officiis repellat iusto quo amet quos veniam neque molestiae. Et aliquid nobis hic unde eveniet. Necessitatibus recusandae deserunt aliquid autem.</p>
            </div>
            {/* CENTER */}
            <div>
                <p>COMPANY</p>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            {/* RIGHT */}
            <div>
                <p>GET IN TOUCH</p>
                <ul>
                    <li>+84 335 435 578</li>
                    <li>phuoc11102004@gmail.com</li>
                </ul>
            </div>
            {/* COPYRIGHT */}
            <div>
                <p>Copyright 2024@ Prescripto - All right reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer