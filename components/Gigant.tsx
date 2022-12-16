import React from 'react'
import styles from '../styles/Gigant.module.css'
import { AUDI, BMW, FORD, Mercedes, VW, Aufbautypen, MARKEN, MARKEN_ASIEN, Autohäuser, GIGANT_WORLD } from '../Data'

const Gigant = () => {
    return (
        <>
            <div className={styles.gigant_container}>
                <div className={styles.header}>
                <p style={{color: "#6C757D"}}>Wir bieten eine große Auswahl an beliebten Modellen, Marken und Autohäusern.</p>
                </div>

                <div className={styles.car_types}>
                    {/* AUDI TYPES */}
                    <ul className={styles.cars}>
                        <li style={{ fontWeight: "bold" }} className={styles.head}>Audi</li>
                        {AUDI.map((list, index: number) => (
                            <li key={index}>{list.audi}</li>
                        ))}
                    </ul>

                    {/* BMW TYPES */}
                    <ul className={styles.cars}>
                        <li style={{ fontWeight: "bold" }} className={styles.head}>BMW</li>
                        {BMW.map((list, index: number) => (
                            <li key={index}>{list.BMW}</li>
                        ))}
                    </ul>

                    {/* Mercedes-Benz TYPES */}
                    <ul className={styles.cars}>
                        <li style={{ fontWeight: "bold" }} className={styles.head}>Mercedes-Benz</li>
                        {Mercedes.map((list, index: number) => (
                            <li key={index}>{list.Mercedes}</li>
                        ))}
                    </ul>

                    {/* VW TYPES */}
                    <ul className={styles.cars}>
                        <li style={{ fontWeight: "bold" }} className={styles.head}>VW</li>
                        {VW.map((list, index: number) => (
                            <li key={index}>{list.VW}</li>
                        ))}
                    </ul>


                    {/* FORD TYPES */}
                    <ul className={styles.cars}>
                        <li style={{ fontWeight: "bold" }} className={styles.head}>Ford</li>
                        {FORD.map((list, index: number) => (
                            <li key={index}>{list.Ford}</li>
                        ))}
                    </ul>


                    {/* Aufbautypen TYPES */}
                    <ul className={styles.cars}>
                        <li style={{ fontWeight: "bold" }} className={styles.head}>Aufbautypen</li>
                        {Aufbautypen.map((list, index: number) => (
                            <li key={index}>{list.auf}</li>
                        ))}
                    </ul>
                    {/* Marken Europa TYPES */}
                    <ul className={styles.cars}>
                        <li style={{ fontWeight: "bold" }} className={styles.head}>Marken Europa</li>
                        {MARKEN.map((list, index) => (
                            <li key={index}>{list.marken}</li>
                        ))}
                    </ul>
                    {/* Marken Asien TYPES */}
                    <ul className={styles.cars}>
                        <li style={{ fontWeight: "bold" }} className={styles.head}>Marken Asien</li>
                        {MARKEN_ASIEN.map((list, index: number) => (
                            <li key={index}>{list.asien}</li>
                        ))}
                    </ul>
                    {/* Autohäuser TYPES */}
                    <ul className={styles.cars}>
                        <li style={{ fontWeight: "bold" }} className={styles.head}>Autohäuser</li>
                        {Autohäuser.map((list, index: number) => (
                            <li key={index}>{list.auto}</li>
                        ))}
                    </ul>

                       {/* GIGANT WORLD TYPES */}
                       <ul className={styles.cars}>
                        <li style={{ fontWeight: "bold" }} className={styles.head}>FGIGANT WORLD</li>
                        {GIGANT_WORLD.map((list, index: number) => (
                            <li key={index}>{list.gigant}</li>
                        ))}
                    </ul>


                </div>


                <div className={styles.header}>
                    <p style={{color: "#6C757D"}}> Autogigant.at wird bald auch in Deutschland, der Schweiz, Türkiye und Qatar verfügbar sein.</p>
                </div>

                {/* news latter */}
                <div className={styles.news_latter}>
                    <div className={styles.wrapper}>
                        <h2 style={{ color: "#6C757D" }}>GIGANT WORLD - aktuell. gigantisch. kostenlos.</h2>
                        <p style={{ color: "#6C757D" }}>Newsletter abonnieren, immer informiert bleiben und € 50,- GIGA COINS gewinnen!*</p>

                        <div className={styles.newspaper}>
                            <input className={styles.input} type="text" placeholder='Deine E-Mail Adresse' />
                            <button className={styles.submit}>Newsletter Anmelden</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Gigant