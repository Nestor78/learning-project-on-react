import { NavLink } from 'react-router-dom';
import logo from '../../icons/orange.png';
import styleHeader from './Header.module.css';
import settings from '../../icons/settings.png';
function Header() {
	return (
		<header className={styleHeader.header}>
			<section className={styleHeader.wrapper}>
				<a href="#" className={styleHeader.title}><img src={logo} alt="" /><span>range</span>Blog</a>
				<NavLink to={"#"}> <img className={styleHeader.set} src={settings} /> </NavLink>
				<a href="#" className={styleHeader.exit}>ВЫХОД</a>
			</section>
		</header>
	);
}

export default Header;