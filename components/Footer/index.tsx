import Image from 'next/image'
import React from 'react'
import styles from './Footer.module.css'
import logo from './logo.png'
import google from './google.png'
import appstore from './appstore.png'
import world from './world.png'
type Props = {}

// tabs / links
const Links = [
    {
        link: "E GIGANT."
    },
    {
        link: "IMMO GIGANT."
    },
    {
        link: "GASTRO GIGANT."
    },
    {
        link: "HOSTING GIGANT."
    },
    {
        link: "GIGANT SHOP."
    },

]

const Footer = (props: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>

                {/* footer 1st section */}
                <div className={styles.footer_first_sec}>

                    <div className={styles.img_tabs}>

                        <div className={styles.img}>
                            <Image src={logo} width="252" height={82} alt="logo" />
                            <p style={{ color: "white", fontSize: "13px" }}>IS A COMPANY OF THE GIGANT GROUP</p>
                        </div>

                        <div className={styles.line}>

                        </div>

                        <div className={styles.tabs}>
                            <ul className={styles.cardUl}>
                                <li style={{ fontWeight: "bold", color: "white" }}>
                                    GIGANT WORLD
                                </li>
                                {Links.map((list, index: number) => (

                                    <li className={styles.gigant_links} key={index}><svg style={{ marginRight: "4px" }} xmlns="http://www.w3.org/2000/svg" width="6" height="10.007" viewBox="0 0 6 10.007">
                                        <path id="expand_more_FILL0_wght500_GRAD0_opsz48" d="M16.7,22.3l-5-5,1-1L16.7,20.327,20.71,16.32l1,1Z" transform="translate(-16.3 21.707) rotate(-90)" fill="#fff" />
                                    </svg>{list.link}</li>
                                ))}
                            </ul>
                        </div>

                    </div>

                    <div className={styles.social_tabs}>
                        {/* app and google buttos */}
                        <div className={styles.storebtns}>
                            <p style={{ color: "white", marginBottom: "8px" }}>Jetzt App kostenlos downloaden!</p>
                            <div className={styles.btns}>
                                <Image src={google} width="120" height={40} alt="lo" />
                                <Image src={appstore} width="120" height={40} alt="logo" />
                            </div>
                        </div>

                        {/* social icons section */}
                        <div className={styles.social_icons}>
                            <h3 style={{ color: "white", marginBottom: "5px", fontWeight: "bold" }}> <span style={{ color: "yellow" }}> EINFACH </span> GIGANTISCH.</h3>
                            <div className={styles.social_links}>
                                {/* facebook */}
                                <svg className={styles.media_icon} xmlns="http://www.w3.org/2000/svg" width="40.198" height="39.954" viewBox="0 0 40.198 39.954">
                                    <path id="facebook" d="M90.9,71.423a20.1,20.1,0,0,0-3.141,39.954V97.332h-5.1v-5.81h5.1V87.094c0-5.037,3-7.82,7.592-7.82a30.912,30.912,0,0,1,4.5.393v4.946H97.319c-2.5,0-3.276,1.549-3.276,3.139v3.77h5.574l-.891,5.81H94.043v14.045A20.1,20.1,0,0,0,90.9,71.423Z" transform="translate(-70.804 -71.423)" fill="#6c757d" />
                                </svg>
                                {/* instagram */}
                                <svg className={styles.media_icon} id="instagram" xmlns="http://www.w3.org/2000/svg" width="40.199" height="40.198" viewBox="0 0 40.199 40.198">
                                    <path id="Path_1132" data-name="Path 1132" d="M90.809,70.423a20.1,20.1,0,1,0,20.1,20.1A20.1,20.1,0,0,0,90.809,70.423ZM103.387,95.74a9.278,9.278,0,0,1-.588,3.072,6.468,6.468,0,0,1-3.7,3.7,9.288,9.288,0,0,1-3.072.588c-1.35.062-1.781.076-5.218.076s-3.868-.014-5.218-.076a9.3,9.3,0,0,1-3.072-.588,6.471,6.471,0,0,1-3.7-3.7,9.285,9.285,0,0,1-.588-3.072c-.062-1.35-.076-1.781-.076-5.217s.014-3.868.076-5.218a9.291,9.291,0,0,1,.588-3.072,6.471,6.471,0,0,1,3.7-3.7,9.278,9.278,0,0,1,3.072-.588c1.35-.062,1.781-.076,5.218-.076s3.868.014,5.218.076a9.282,9.282,0,0,1,3.072.588,6.468,6.468,0,0,1,3.7,3.7,9.27,9.27,0,0,1,.588,3.072c.062,1.35.077,1.781.077,5.218S103.45,94.39,103.387,95.74Z" transform="translate(-70.709 -70.423)" fill="#6c757d" />
                                    <g id="Group_2141" data-name="Group 2141" transform="translate(9.725 9.724)">
                                        <ellipse id="Ellipse_131" data-name="Ellipse 131" cx="4.218" cy="4.218" rx="4.218" ry="4.218" transform="translate(6.157 6.157)" fill="#6c757d" />
                                        <path id="Path_1133" data-name="Path 1133" d="M125.672,109.97a7,7,0,0,0-.436-2.35,4.194,4.194,0,0,0-2.4-2.4,7.011,7.011,0,0,0-2.35-.436c-1.334-.06-1.735-.073-5.113-.073s-3.78.013-5.114.073a7.012,7.012,0,0,0-2.35.436,4.194,4.194,0,0,0-2.4,2.4,7.009,7.009,0,0,0-.435,2.35c-.061,1.334-.074,1.735-.074,5.114s.013,3.779.074,5.114a7.008,7.008,0,0,0,.435,2.35,4.191,4.191,0,0,0,2.4,2.4,7,7,0,0,0,2.35.436c1.334.061,1.734.074,5.114.074s3.779-.013,5.113-.074a7,7,0,0,0,2.35-.436,4.191,4.191,0,0,0,2.4-2.4,7.006,7.006,0,0,0,.436-2.35c.06-1.335.073-1.735.073-5.114S125.733,111.3,125.672,109.97Zm-10.3,11.612a6.5,6.5,0,1,1,6.5-6.5A6.5,6.5,0,0,1,115.371,121.582Zm6.755-11.735a1.519,1.519,0,1,1,1.519-1.519A1.519,1.519,0,0,1,122.126,109.847Z" transform="translate(-104.996 -104.709)" fill="#6c757d" />
                                    </g>
                                </svg>
                                {/* youtube */}
                                <svg className={styles.media_icon} id="youtube" xmlns="http://www.w3.org/2000/svg" width="40.199" height="40.198" viewBox="0 0 40.199 40.198">
                                    <path id="Path_1134" data-name="Path 1134" d="M90.457,70.423a20.1,20.1,0,1,0,20.1,20.1A20.1,20.1,0,0,0,90.457,70.423ZM103.3,96.972a3.355,3.355,0,0,1-2.369,2.369c-2.09.56-10.47.56-10.47.56s-8.38,0-10.47-.56a3.356,3.356,0,0,1-2.369-2.369,37.416,37.416,0,0,1,0-12.9A3.355,3.355,0,0,1,79.986,81.7c2.09-.56,10.47-.56,10.47-.56s8.38,0,10.47.56a3.355,3.355,0,0,1,2.369,2.369,37.415,37.415,0,0,1,0,12.9Z" transform="translate(-70.357 -70.423)" fill="#6c757d" />
                                    <path id="Path_1135" data-name="Path 1135" d="M131.774,135.156l6.962-4.02-6.962-4.02Z" transform="translate(-114.355 -111.037)" fill="#6c757d" />
                                </svg>

                                {/* tiktok */}
                                <svg className={styles.media_icon} xmlns="http://www.w3.org/2000/svg" width="40.199" height="40.198" viewBox="0 0 40.199 40.198">
                                    <path id="tiktok" d="M90.578,70.423a20.1,20.1,0,1,0,20.1,20.1A20.1,20.1,0,0,0,90.578,70.423Zm11.046,17.8a9.862,9.862,0,0,1-2.216-.267,10.627,10.627,0,0,1-3.483-1.5c-.055-.037-.115-.115-.174-.088-.076.035-.036.132-.036.2,0,2.883.01,5.765-.006,8.648a8.246,8.246,0,0,1-7.292,8.194,8.163,8.163,0,0,1-4.693-.83,4.314,4.314,0,0,1-.684-.418l-.2-.18h0a1.947,1.947,0,0,1-.425-.293,8.155,8.155,0,0,1-3.116-5.71,8.242,8.242,0,0,1-.017-1.274,8.185,8.185,0,0,1,5.391-7.152,8.144,8.144,0,0,1,2.178-.462,8.4,8.4,0,0,1,1.618.037c.073.009.116.023.113.11-.006.3-.005.6-.007.9.006.005.044,2.275.044,3.315,0,.037,0,.073,0,.11-.005.1-.058.139-.156.111a3.929,3.929,0,0,0-.87-.134,3.318,3.318,0,0,0-1.33.2,3.693,3.693,0,0,0-.833,6.586c.1.071.21.138.306.219l.07.064a5.065,5.065,0,0,0,.879.289,3.73,3.73,0,0,0,4.514-3.714q0-8.683,0-17.366c0-.27-.038-.236.231-.236h4.1c.136,0,.139,0,.138.141a8.847,8.847,0,0,0,.139,1.093c.577,2.927,3.988,4.717,5.04,4.875a5.539,5.539,0,0,0,.875.076c.123,0,.126,0,.126.12,0,.272.053,3.07.052,4.095C101.893,88.209,101.861,88.221,101.624,88.221Z" transform="translate(-70.479 -70.423)" fill="#6c757d" />
                                </svg>
                            </div>
                        </div>

                    </div>

                </div>

                {/* middle line */}
                <div className={styles.horizantLine}>

                </div>
                {/* footer 2nd section */}

                <div className={styles.footer_last_section}>
                   <div className={styles.info}>
                    <div className={styles.firstLine}>
                        <p>© 2023 AUTO GIGANT.  |  ALLE RECHTE VORBEHALTEN.  |  COOKIE HINWEISE  |  DATENSCHUTZ  |  NUTZUNGSBEDINGUNGEN  |  ÜBER UNS  |  IMPRESSUM  |  KONTAKT</p>
                         <p>MADE WITH 💖 IN AUSTRIA  |  IN COOPERATION WITH HGMEDIA ADVERTISING AGENCY.</p>
                    </div>
                   </div>

                   <div className={styles.lang}>
                    <Image src={world} width={25} height={25} alt="worldpic" />
                    <p style={{color: "white",}}>DEUTSCH</p>
                   </div>
                 </div>
            </div>
        </div>
    )
}

export default Footer