import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div className='container py-5 my-5'>
        <div className='row'>
            <div className='col-md-6'>
                <h1 className='text-primary fw-bold mb-4'>About Us</h1>
                <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ad reprehenderit sit tempore quidem deleniti laudantium quod minima nesciunt atque vel animi incidunt id laboriosam, qui distinctio magnam ducimus voluptates?</p>
                <NavLink to='/contact' className='btn btn-outline-primary px-3'>Contact US</NavLink>
            </div>
            <div className='col-md-6 d-flex justify-content-center'>
                <img src='/assets/images/about.png' alt='About Us'
                height='400px' width='400px' />
            </div>
        </div>
    </div>
  )
}

export default About