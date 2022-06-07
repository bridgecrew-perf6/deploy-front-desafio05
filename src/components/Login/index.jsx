import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setItem } from "../../utils/storage";
import "./style.css";

function Profile({ image, imageArrow, imageEdit, imageLogout }) {
	const navigate = useNavigate();
	const [visible, setVisible] = useState("");

	function handleLogOut() {
		try {
			setItem("token", "");
			navigate("/login");
		} catch (error) {
			console.log(error.message);
		}
	}

	function handleVisible() {
		console.log("passou");
		if (visible === "") {
			return setVisible("display-none");
		}
		return setVisible("");
	}
	return (
		<div className='container-box profile-gap'>
			<img src={image} alt='' />
			<span className='font-profile'>Lorena</span>
			<div className='container-arrow'>
				<img
					className={`cursor-pointer`}
					src={imageArrow}
					alt=''
					onClick={handleVisible}
				/>
				<div className={`${visible} container-arrow-position `}>
					<div className='container-arrow-items'>
						<img className='cursor-pointer' src={imageEdit} alt='' />
						<img
							className='cursor-pointer'
							src={imageLogout}
							onClick={handleLogOut}
							alt=''
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
