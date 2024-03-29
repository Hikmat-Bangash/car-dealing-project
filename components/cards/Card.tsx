import Image from "next/image";
import React, { useState } from "react";
import styles from "../../styles/Cards.module.css";
import carimg from "../../public/assets/car icons/carimage.png"


const Card = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>        
        <div className={styles.card}>
          <div className={styles.imgcontainer}>
            <Image
              className={styles.image}
              src={carimg}
              width={100}
              alt="car image"
            />
            <div className={show ? styles.cardmenu : styles.cardmenuremove}>
              <div className={styles.menuItem}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.999"
                    height="20"
                    viewBox="0 0 19.999 20"
                  >
                    <g id="rz_email" transform="translate(-112.779 -154.99)">
                      <path
                        id="Path_1002"
                        data-name="Path 1002"
                        d="M131.175,164.709h-9.316l4.658,3.675Z"
                        transform="translate(-3.738 -4.004)"
                        fill="#6c757d"
                      />
                      <path
                        id="Path_1003"
                        data-name="Path 1003"
                        d="M131.443,165.7l-5.517,4.348-5.517-4.348v7.987h11.034Z"
                        transform="translate(-3.147 -4.408)"
                        fill="#6c757d"
                      />
                      <path
                        id="Path_1004"
                        data-name="Path 1004"
                        d="M122.779,154.99a10,10,0,1,0,10,10A10,10,0,0,0,122.779,154.99Zm6.433,15.221H116.346V159.77h12.866Z"
                        transform="translate(0)"
                        fill="#6c757d"
                      />
                    </g>
                  </svg>
                </span>
                <span>E-mail</span>
              </div>
              <div className={styles.menuItem}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="19.999"
                    viewBox="0 0 20 19.999"
                  >
                    <path
                      id="rz_link"
                      d="M134.605,124.607a10,10,0,1,0,10,10A10,10,0,0,0,134.605,124.607Zm0,14.8-1.262,1.263a3.394,3.394,0,0,1-4.8-4.8l1.262-1.262a3.393,3.393,0,0,1,3.2-.9l-3.315,3.311a1.766,1.766,0,0,0,2.5,2.5L135.5,136.2A3.391,3.391,0,0,1,134.606,139.405Zm1.718-7.758a.878.878,0,0,1,1.241,1.242l-4.677,4.678a.878.878,0,0,1-1.242-1.242Zm4.343,1.7-1.262,1.262a3.388,3.388,0,0,1-3.2.9l3.313-3.314a1.766,1.766,0,0,0-2.5-2.5l-3.312,3.313a3.387,3.387,0,0,1,.9-3.2l1.262-1.263a3.394,3.394,0,0,1,4.8,4.8Z"
                      transform="translate(-124.606 -124.607)"
                      fill="#6c757d"
                    />
                  </svg>
                </span>
                <span>Link kopieren</span>
              </div>
              <div className={styles.menuItem}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.999"
                    height="19.999"
                    viewBox="0 0 19.999 19.999"
                  >
                    <g id="facebook" transform="translate(0 -0.073)">
                      <path
                        id="Path_1001"
                        data-name="Path 1001"
                        d="M20,10.133a10.05,10.05,0,0,1-8.441,9.939V13.061h2.324l.442-2.9H11.558V8.278a1.446,1.446,0,0,1,1.625-1.567H14.44V4.241a15.236,15.236,0,0,0-2.232-.2c-2.278,0-3.766,1.389-3.766,3.9v2.211H5.909v2.9H8.441v7.011A10.056,10.056,0,1,1,20,10.133Z"
                        fill="#6c757d"
                      />
                    </g>
                  </svg>
                </span>
                <span>Facebook</span>
              </div>
              <div className={styles.menuItem}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.999"
                    height="19.999"
                    viewBox="0 0 19.999 19.999"
                  >
                    <path
                      id="icons8-whatsapp-480"
                      d="M13,3A9.983,9.983,0,0,0,4.426,18.125L3.09,23l4.979-1.307A10,10,0,1,0,13,3ZM9.577,8.335c.162,0,.329,0,.474.007.178,0,.372.017.558.428.221.488.7,1.713.763,1.837a.447.447,0,0,1,.019.433,1.816,1.816,0,0,1-.244.415c-.124.143-.26.321-.373.43-.124.124-.252.26-.109.508a7.409,7.409,0,0,0,1.377,1.714,6.724,6.724,0,0,0,1.992,1.229c.248.124.392.1.535-.062s.619-.72.786-.968.328-.205.553-.124,1.446.681,1.694.806.411.186.474.286a2.045,2.045,0,0,1-.142,1.178,2.491,2.491,0,0,1-1.67,1.175c-.457.042-.884.206-2.973-.617a10.151,10.151,0,0,1-4.233-3.74A4.8,4.8,0,0,1,8.05,10.711a2.789,2.789,0,0,1,.864-2.067A.91.91,0,0,1,9.577,8.335Z"
                      transform="translate(-3 -3)"
                      fill="#6c757d"
                    />
                  </svg>
                </span>
                <span>Whatsapp</span>
              </div>
            </div>
            <div className={styles.icons}>
              <span className={styles.icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16.372"
                  height="15"
                  viewBox="0 0 16.372 15"
                >
                  <path
                    id="favorite_FILL0_wght400_GRAD0_opsz48"
                    d="M12.185,20.3l-.839-.757a72.6,72.6,0,0,1-5.341-5.32A6.966,6.966,0,0,1,4,9.618,4.229,4.229,0,0,1,8.3,5.3a4.655,4.655,0,0,1,2.067.5,4.858,4.858,0,0,1,1.821,1.647A5.935,5.935,0,0,1,14.047,5.8a4.323,4.323,0,0,1,2.026-.5,4.229,4.229,0,0,1,4.3,4.318,6.966,6.966,0,0,1-2.005,4.6,72.6,72.6,0,0,1-5.341,5.32ZM12.185,12.605Zm0,6.078q3.11-2.865,5.034-4.973a6.207,6.207,0,0,0,1.924-4.093,2.976,2.976,0,0,0-3.069-3.09,3.279,3.279,0,0,0-1.924.634,4.623,4.623,0,0,0-1.473,1.821h-1a4.435,4.435,0,0,0-1.463-1.821A3.3,3.3,0,0,0,8.3,6.528a2.973,2.973,0,0,0-2.21.869,3.029,3.029,0,0,0-.859,2.221A6.207,6.207,0,0,0,7.151,13.71Q9.075,15.818,12.185,18.683Z"
                    transform="translate(-3.999 -5.299)"
                    fill="#fff"
                  />
                </svg>
              </span>
              <span
                onMouseOver={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
                className={styles.icon}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16.519"
                  height="15"
                  viewBox="0 0 13.519 15"
                >
                  <path
                    id="share_FILL0_wght400_GRAD0_opsz48"
                    d="M11.381,0a2.249,2.249,0,0,0-.425.039A1.995,1.995,0,0,0,10.2.353a2.367,2.367,0,0,0-.6.6,1.995,1.995,0,0,0-.314.755,2.249,2.249,0,0,0-.039.425q0,.033,0,.069t.005.074q0,.039.009.08t.012.086q.007.045.016.087t.019.084q.011.041.023.08t.026.077l-5.681,3.3a2.02,2.02,0,0,0-.149-.152,2.071,2.071,0,0,0-.165-.137q-.087-.064-.182-.121t-.2-.106a2.137,2.137,0,0,0-.207-.086,1.97,1.97,0,0,0-.21-.062,1.871,1.871,0,0,0-.427-.049,2.249,2.249,0,0,0-.425.039,1.995,1.995,0,0,0-.755.314,2.367,2.367,0,0,0-.6.6,1.995,1.995,0,0,0-.314.755A2.249,2.249,0,0,0,0,7.5a2.321,2.321,0,0,0,.039.432,2.019,2.019,0,0,0,.118.4,1.983,1.983,0,0,0,.2.362,2.21,2.21,0,0,0,.275.327,2.285,2.285,0,0,0,.33.271,2.011,2.011,0,0,0,.755.309,2.282,2.282,0,0,0,.425.039q.108,0,.213-.011a2.057,2.057,0,0,0,.412-.084,2.11,2.11,0,0,0,.2-.074q.1-.042.192-.094t.183-.112q.089-.061.173-.131t.164-.15l5.681,3.263q-.014.033-.026.068t-.023.073q-.011.037-.019.077t-.016.082q-.007.042-.012.083t-.009.081q0,.04-.005.079t0,.076a2.321,2.321,0,0,0,.039.432,2.019,2.019,0,0,0,.118.4,1.983,1.983,0,0,0,.2.362,2.21,2.21,0,0,0,.275.327,2.285,2.285,0,0,0,.33.271,2.011,2.011,0,0,0,.755.309,2.282,2.282,0,0,0,.425.039,2.356,2.356,0,0,0,.432-.039,2.042,2.042,0,0,0,.4-.116,1.993,1.993,0,0,0,.362-.193,2.265,2.265,0,0,0,.6-.6,1.993,1.993,0,0,0,.193-.362,2.042,2.042,0,0,0,.116-.4,2.356,2.356,0,0,0,.039-.432,2.282,2.282,0,0,0-.039-.425,2.011,2.011,0,0,0-.309-.755,2.285,2.285,0,0,0-.271-.33,2.21,2.21,0,0,0-.327-.275,1.983,1.983,0,0,0-.362-.2,2.019,2.019,0,0,0-.4-.118,2.321,2.321,0,0,0-.432-.039q-.108,0-.214.009t-.21.026q-.1.018-.207.044t-.2.062a1.676,1.676,0,0,0-.194.081,1.581,1.581,0,0,0-.342.23,1.659,1.659,0,0,0-.148.148L4.181,8.175q.009-.037.018-.078t.017-.084q.008-.043.016-.09t.015-.1q.007-.049.012-.094t.009-.086q0-.041.005-.078t0-.07q0-.033,0-.067t-.005-.069q0-.035-.009-.071t-.012-.074q-.007-.038-.015-.075l-.016-.075L4.2,6.994l-.018-.075L9.862,3.694q.07.066.146.125t.158.112q.082.053.17.1t.182.086a1.819,1.819,0,0,0,.195.07,2.032,2.032,0,0,0,.209.05q.108.02.223.03t.237.01a2.356,2.356,0,0,0,.432-.039,2.042,2.042,0,0,0,.4-.116,1.993,1.993,0,0,0,.362-.193,2.265,2.265,0,0,0,.6-.6,1.993,1.993,0,0,0,.193-.362,2.042,2.042,0,0,0,.116-.4,2.356,2.356,0,0,0,.039-.432,2.282,2.282,0,0,0-.039-.425,2.011,2.011,0,0,0-.309-.755A2.285,2.285,0,0,0,12.9.628a2.21,2.21,0,0,0-.327-.275,1.983,1.983,0,0,0-.362-.2,2.019,2.019,0,0,0-.4-.118A2.321,2.321,0,0,0,11.381,0Zm0,11.85a1.145,1.145,0,0,1,.207.018.978.978,0,0,1,.189.054.938.938,0,0,1,.172.091,1.047,1.047,0,0,1,.281.281.938.938,0,0,1,.091.172.978.978,0,0,1,.054.189,1.187,1.187,0,0,1,0,.414.978.978,0,0,1-.054.189.938.938,0,0,1-.091.172,1.047,1.047,0,0,1-.281.281.938.938,0,0,1-.172.091.978.978,0,0,1-.189.054,1.187,1.187,0,0,1-.414,0,.978.978,0,0,1-.189-.054.938.938,0,0,1-.172-.091,1.047,1.047,0,0,1-.281-.281.938.938,0,0,1-.091-.172.978.978,0,0,1-.054-.189,1.187,1.187,0,0,1,0-.414.978.978,0,0,1,.054-.189.938.938,0,0,1,.091-.172,1.047,1.047,0,0,1,.281-.281.938.938,0,0,1,.172-.091.978.978,0,0,1,.189-.054A1.145,1.145,0,0,1,11.381,11.85ZM2.137,6.487a1.145,1.145,0,0,1,.207.018.978.978,0,0,1,.189.054.938.938,0,0,1,.172.091,1.047,1.047,0,0,1,.281.281.938.938,0,0,1,.091.172.978.978,0,0,1,.054.189,1.187,1.187,0,0,1,0,.414.978.978,0,0,1-.054.189.938.938,0,0,1-.091.172,1.047,1.047,0,0,1-.281.281.938.938,0,0,1-.172.091.978.978,0,0,1-.189.054,1.187,1.187,0,0,1-.414,0,.978.978,0,0,1-.189-.054.938.938,0,0,1-.172-.091,1.047,1.047,0,0,1-.281-.281A.938.938,0,0,1,1.2,7.9a.978.978,0,0,1-.054-.189,1.187,1.187,0,0,1,0-.414A.978.978,0,0,1,1.2,7.1a.938.938,0,0,1,.091-.172,1.047,1.047,0,0,1,.281-.281.938.938,0,0,1,.172-.091.978.978,0,0,1,.189-.054A1.145,1.145,0,0,1,2.137,6.487Zm9.244-5.363a1.145,1.145,0,0,1,.207.018.978.978,0,0,1,.189.054.938.938,0,0,1,.172.091,1.047,1.047,0,0,1,.281.281.938.938,0,0,1,.091.172.978.978,0,0,1,.054.189,1.187,1.187,0,0,1,0,.414.978.978,0,0,1-.054.189.938.938,0,0,1-.091.172,1.047,1.047,0,0,1-.281.281.938.938,0,0,1-.172.091.978.978,0,0,1-.189.054,1.187,1.187,0,0,1-.414,0,.978.978,0,0,1-.189-.054.938.938,0,0,1-.172-.091,1.047,1.047,0,0,1-.281-.281.938.938,0,0,1-.091-.172.978.978,0,0,1-.054-.189,1.187,1.187,0,0,1,0-.414.978.978,0,0,1,.054-.189.938.938,0,0,1,.091-.172,1.047,1.047,0,0,1,.281-.281.938.938,0,0,1,.172-.091.978.978,0,0,1,.189-.054A1.145,1.145,0,0,1,11.381,1.125Zm0,11.738ZM2.137,7.5Zm9.244-5.363Z"
                    fill="#fff"
                  />
                </svg>
              </span>
            </div>
            <span className={styles.tag}>€ 213.520,-</span>
          </div>

          <div className={styles.content}>
            <h2 className={styles.heading}>Ferrari Italia</h2>
            <p className={styles.description}>Lorem ipsum, dolor sit amet </p>
            <div className={styles.flex}>
              <span>01/2002</span>
              <span>Benzen</span>
            </div>
            <div className={styles.flex3}>
              <span>125PS</span>
              <span>Gebraucht</span>
              <span>Automatik</span>
            </div>
            <span className={styles.km}>412.000 KM</span>
            <div className={styles.address}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16.808"
                  height="15"
                  viewBox="0 0 14.808 13"
                >
                  <path
                    id="store_FILL0_wght400_GRAD0_opsz48"
                    d="M6.694,9.219V8H19.734V9.219ZM6.8,21V15.759h-1V14.541l.894-4.1h13.02l.894,4.1v1.219h-1V21H18.394V15.759H14.555V21Zm1.219-1.219h5.322V15.759H8.014ZM7,14.541H7Zm0,0H19.409l-.63-2.884H7.628Z"
                    transform="translate(-5.8 -8)"
                    fill="#0067b8"
                  />
                </svg>
              </span>
              <span className={styles.addresstext}>
                Gigant Group Teknoloji A.S.
              </span>
            </div>
            <div className={styles.address}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10.4"
                  height="13"
                  viewBox="0 0 10.4 13"
                >
                  <path
                    id="home_pin_FILL0_wght400_GRAD0_opsz48"
                    d="M11.413,10.987V7.981L13.2,6.8l1.787,1.186v3.006h-.975V9.038H12.388v1.95ZM13.2,15.716a19.032,19.032,0,0,0,3.193-3.567A5.411,5.411,0,0,0,17.425,9.33,4.23,4.23,0,0,0,16.2,6.194a4.092,4.092,0,0,0-3-1.219,4.092,4.092,0,0,0-3,1.219A4.23,4.23,0,0,0,8.975,9.33a5.333,5.333,0,0,0,1.056,2.819A20.667,20.667,0,0,0,13.2,15.716ZM13.2,17a21.608,21.608,0,0,1-3.908-4.136A6.431,6.431,0,0,1,8,9.33,5.027,5.027,0,0,1,9.568,5.446a5.283,5.283,0,0,1,7.264,0A5.027,5.027,0,0,1,18.4,9.33a6.431,6.431,0,0,1-1.292,3.534A21.608,21.608,0,0,1,13.2,17Z"
                    transform="translate(-8 -4)"
                    fill="#0067b8"
                  />
                </svg>
              </span>
              <span className={styles.addresstext}>
                2700 Wiener Neutadt | AT
              </span>
            </div>
          </div>
        </div>   
        
    </>
  );
};

export default Card;