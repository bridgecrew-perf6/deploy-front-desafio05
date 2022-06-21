import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setItem } from "../../utils/storage";
import "./style.css";

function Profile({
	image,
	imageArrow,
	imageEdit,
	imageLogout,
	setOpenProfileModal,
}) {
	const navigate = useNavigate();
	const [visible, setVisible] = useState(false);

	function handleLogOut() {
		try {
			setItem("token", "");
			navigate("/");
		} catch (error) {
			console.log(error.message);
		}
	}
	function handleVisible() {
		if (!visible) {
			return setVisible(true);
		}
		return setVisible(false);
	}

	return (
		<div className='container-box profile-gap'>
			<img src={image} alt='' />
			<span className='font-profile'>Lorena</span>
			<div className='container-arrow'>
				<img
					className={`cursor-pointer`}
					src={imageArrow}
					onClick={handleVisible}
					alt=''
				/>
				{visible && (
					<div className={`container-arrow-position `}>
						<div className='container-arrow-items'>
							<img
								className='cursor-pointer'
								src={imageEdit}
								alt=''
								onClick={() => {
									setOpenProfileModal(true); 
									handleVisible()
								}}
							/>
							<img
								className='cursor-pointer'
								src={imageLogout}
								onClick={handleLogOut}
								alt=''
							/>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default Profile;
