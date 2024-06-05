import React from 'react'
import Typewriter from 'typewriter-effect'
import { ParticlesComponents } from './particles'
import AOS from 'aos'
import 'aos/dist/aos.css'
import proyectos from './projects.json'
import "./css/styleHomeScreen.css"
import "./css/cardProject.css"

const project = proyectos.proyectos;

const HomeScreen = () => {

    AOS.init();

    return (
        <main>
            <div data-aos="fade-in" className='home__title'>
                <ParticlesComponents id='particles' />
                <h1 className='text__home'>

                    Hola 👋,
                    <br />
                    <span className='typewriter'>
                        Me llamo
                        <Typewriter className="home__title-text" options={
                            {
                                strings: ['Pedro', 'Pepo', 'Pepe', 'Pepix'],
                                autoStart: true,
                                loop: true,
                                wrapperClassName: 'text-home'
                            }

                        } />
                    </span>
                    Y soy desarrollador Front-End
                </h1>
            </div>
            <div className='home__project' data-aos="fade-in" data-aos-duration="1100">
                <section className='section__project'>
                    <h1>Mi portafolio</h1>
                    <p>
                        En los siguientes cuadros, se mostará todo mi progeso
                        y puesto a prueba los conocimientos que he adquirido
                    </p>
                    <div className='card__container .bg-black.bg-gradient'>
                        {/* cards project */}
                        {project.map((pjt, id) =>
                            <div className='card card-body bg-dark' key={id}>
                                <img src={pjt.img} alt={pjt.name} className='card__img card-img-top' />
                                <h1>
                                    {pjt.name}
                                </h1>
                                <p className='card-text'>{pjt.description}</p>
                                <button className='btn btn-primary align-self-end' onClick={() => alert('ola')}>Click</button>
                            </div>
                        )}

                    </div>
                </section>
            </div>
        </main >
    )
}

export default HomeScreen
