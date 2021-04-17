
import { NavLink } from 'react-router-dom';
import Header from '../Header/Header';
import styleNavbar from './Navbar.module.css';

function Navbar() {
	return (
		<section className={styleNavbar.wrapper}>
			<NavLink className={styleNavbar.navBtn} to={"#"}>Блог</NavLink>
			<NavLink className={styleNavbar.navBtn} to={"#"}>Друзья</NavLink>
			<NavLink className={styleNavbar.navBtn} to={"#"}>Имя Фамилия</NavLink>
			<NavLink className={styleNavbar.navBtn} to={"#"}>Фото</NavLink>
			<NavLink className={styleNavbar.navBtn} to={"#"}>Сообщения</NavLink>
		</section>
	);
}

export default Navbar;