import styleUser from './User.module.css';
import userBack from '../../icons/UserBackground.png';
import userAva from '../../icons/UserAva.png';

function User() {
	return (
		<section className={styleUser.user}>
			<img src={userBack} alt="" />
			<img className={styleUser.ava} src={userAva} alt="" />
		</section>
	);
}

export default User;