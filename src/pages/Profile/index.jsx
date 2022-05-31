import DocumentImg from "../../assets/documents.svg";
import HomeImg from "../../assets/home.svg";
import ProfileImg from "../../assets/profile.svg";
import NavLink from "../../components/NavLinks";
import DocumentImgCaution from "../../assets/document-caution.svg";
import DocumentImgDanger from "../../assets/document-danger.svg";
import DocumentImgSuccess from "../../assets/document-success.svg";
import CardCharge from "../../components/CardCharge";
import "./style.css";

function Profile() {
	return (
		<div className='row'>
			<navbar className='column ai-center gap-nav-items'>
				<NavLink image={HomeImg} text='Home' color='main-pink' />
				<NavLink
					image={ProfileImg}
					text='Clientes'
					color='color-navbar-text-default'
					display='hidden'
				/>
				<NavLink
					image={DocumentImg}
					text='Cobranças'
					color='color-navbar-text-default'
					display='hidden'
				/>
			</navbar>
			<div className='row'>
				<CardCharge bgColor='bg-card-default' image={DocumentImgSuccess} />
				<CardCharge bgColor='bg-card-danger' image={DocumentImgCaution} />
				<CardCharge bgColor='bg-card-caution' image={DocumentImgDanger} />
			</div>
		</div>
	);
}

export default Profile;
