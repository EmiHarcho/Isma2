import React from "react"
import style from './Header.module.scss'
import bg_video from '../../assets/header/bg_video.mp4'

function Header(){
   return(
    <div className={style.header}>
      
      <video className={style.bg_video} autoPlay muted loop>
        <source src={bg_video} type='video/mp4' />
      </video>

      {/* TOP CONTENT */}
      <div className={style.topContent}>
        <h2 className={style.logo}>LOGO</h2>
        {/* <a href="tel:79637093146">7963 709 31 46</a> */}
        <ul className={style.menuList}>
          <li>Контакты</li>
          <li>Каталог</li>
          <li>О компании</li>
        </ul>
      </div>

      {/* LEFT CONTENT */}
      <div className={style.leftContent}>
        <h1>Ангенсво недвижимости</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas quisquam, quasi at natus animi libero non repudiandae odit impedit eaque</p>
        <a className={style.whatsAppBtn} href="tel:79637093146">Связаться</a>
      </div>

    </div>
    
   )
}
export default Header