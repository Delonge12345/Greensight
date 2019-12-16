import React from 'react';
import style from './App.module.css';
import Switch from "./components/Switch/Switch";
import {Route} from "react-router-dom";
import {withSuspense} from "./components/withSuspense/withSuspense";


const PickUp = React.lazy(() => import('./components/Pickup/Pickup'));
const Delivery = React.lazy(() => import('./components/Delivery/Delivery'));



const App = (props) => {
	const path1 = '/delivery';
	const path2 = '/pickup';
	return <div className={style.appWrap}>
		<div  className={style.container}>
			<div>
				<div className={style.wraps}><h2>Выберите способ доставки</h2></div>
				<div className={style.switch}><Switch/></div>
				{
					<div className={style.mainContent}>


						<Switch>
						<Route path={path1}
									 render={withSuspense(Delivery)}/>
						<Route path={path2}
									 render={withSuspense(PickUp)}/>
						</Switch>
					</div>
				}
			</div>
		</div>
	</div>
}
export default App;
