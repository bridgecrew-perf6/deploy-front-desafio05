import DocumentImgCaution from "../../assets/document-caution.svg";
import DocumentImgDanger from "../../assets/document-danger.svg";
import DocumentImgSuccess from "../../assets/document-success.svg";
import CardCharge from "../../components/CardCharge";
import "./style.css";
function Profile() {
	return (
		<div class='container'>
			<CardCharge bgColor='bg-card-default' image={DocumentImgSuccess} />
			<CardCharge bgColor='bg-card-danger' image={DocumentImgCaution} />
			<CardCharge bgColor='bg-card-caution' image={DocumentImgDanger} />
		</div>
	);
}

export default Profile;
