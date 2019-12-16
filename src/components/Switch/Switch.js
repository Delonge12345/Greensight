/**
 * Created by Максим on 04.12.2019.
 */
import React from 'react';
import style from './Switch.module.css'
import {NavLink} from "react-router-dom";


const Switch = () => {
	return (
		<nav className={style.nav}>

			<div className={style.navLinkPosition}>
				<div className={style.navLinkA}><NavLink to='/delivery'activeClassName={style.activeLink}>Доставка</NavLink></div>

				<div className={style.navLinkA}><NavLink to='/pickup'activeClassName={style.activeLink}>Самовывоз</NavLink></div>
			</div>



		</nav>
	)
}
export default Switch;