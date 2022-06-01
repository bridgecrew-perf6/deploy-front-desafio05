import DocumentImgCaution from "../../assets/document-caution.svg";
import DocumentImgDanger from "../../assets/document-danger.svg";
import DocumentImgSuccess from "../../assets/document-success.svg";
import DocumentImg from "../../assets/documents.svg";
import HomeImg from "../../assets/home.svg";
import ProfileImg from "../../assets/profile.svg";
import CardCharge from "../../components/CardCharge";
import NavLink from "../../components/NavLinks";
import TableCharge from "../../components/TableCharge";
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
			<div className='container-tables'>
				<div className='column'>
					<div className='row jc-center gap-charge-cards'>
						<CardCharge bgColor='bg-card-default' image={DocumentImgSuccess} />
						<CardCharge bgColor='bg-card-danger' image={DocumentImgCaution} />
						<CardCharge bgColor='bg-card-caution' image={DocumentImgDanger} />
					</div>
					<div className='row jc-center gap-table-cards'>
						<TableCharge />
						<TableCharge />
						<TableCharge />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
