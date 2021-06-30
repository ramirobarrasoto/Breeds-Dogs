import React from 'react'
import style from './About.module.css'

function About() {


    return (
        // este esta en home
        <div className={style.body}> 
        {/* este esta en el return */}
            <div className={style.container_card}>
                {/* este esta ya dentro de la funcion */}
                <div className={style.card_father}>
                    {/* este le da el formato a la card */}
                    <div className={style.card}>
                        {/* le doy estilo al front */}
                        <div className={style.card_front}>
                            <div className={style.bg}></div>
                            {/* este ataca el cuerpo frontal */}
                            <div className={style.body_card_front}>
                                <h1>Ramiro</h1> 
                            </div>
                        </div> 
                        <div className={style.card_back}>
                            <div className={style.body_card_back}>
                                <h1>WEB</h1> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.card_father}>
                    <div className={style.card}>
                        <div className={style.card_front}>
                            <div className={style.bg}></div>
                            <div className={style.body_card_front}>
                                <h1>Barra</h1> 
                            </div>
                        </div> 
                        <div className={style.card_back}>
                            <div className={style.body_card_back}>
                                <h1>Developer</h1> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.card_father}>
                    <div className={style.card}>
                        <div className={style.card_front}>
                            <div className={style.bg}></div>
                            <div className={style.body_card_front}>
                                <h1>Soto</h1> 
                            </div>
                        </div> 
                        <div className={style.card_back}>
                            <div className={style.body_card_back}>
                                <h1>HENRY</h1> 
                            </div>
                        </div>
                    </div>
                </div>         
            </div>
        </div>
        
    )
}

export default About