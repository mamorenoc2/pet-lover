import React from 'react'
import './Home.css'
import logoPerro from '../../../assets/img/dog-1.jpg'
import Perro1 from '../../../assets/img/dog-3.jpg'
import Perro2 from '../../../assets/img/dog-4.jpg'
import Perro3 from '../../../assets/img/dog-5.jpg'
import Perro4 from '../../../assets/img/dog-6.jpg'
import logoGato from '../../../assets/img/dog-2.jpg'
const Home = () => {
  return (
    <div className='home'>
        <h1 className='title'>Adopta una adorable mascota</h1>
        <div className="pets">
            <h4 className='subtitle'>categoría de mascotas</h4>
            <div className="pets__buttons-group">
                <div className="pets__buttons">
                    <div className="pets__buttons-logo">
                        <img src={logoPerro} alt="" />
                    </div>
                    <div className='pets__buttons-category'>
                        <p>Perros</p>
                    </div>
                </div>
                <div className="pets__buttons">
                    <div className="pets__buttons-logo">
                        <img src={logoGato} alt="" />
                    </div>
                    <div className='pets__buttons-category'>
                        <p>Gatos</p>
                    </div>
                </div>
            </div>
            <div className="pets__panel">
                <div className="pets__card">
                    <img src={Perro1} alt="" />
                    <p className="pet-name">Nombre del Perro</p>
                </div>
                <div className="pets__card">
                    <img src={Perro2} alt="" />
                    <p className="pet-name">Nombre del Perro</p>
                </div>
                
            </div>
            <div className="pets__panel">
                <div className="pets__card">
                    <p className="pet-name">Nombre del Perro</p>
                    <img src={Perro3} alt="" />
                </div>
                <div className="pets__card">
                    <p className="pet-name">Nombre del Perro</p>
                    <img src={Perro4} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home