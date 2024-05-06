import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";

import "./footer.css";
const Footer = () => {
	return (
		<div className="footer_outer_container">
			<div className="footer_inner_container">
				<div className="footer_icons">
					<FacebookOutlinedIcon />
					<InstagramIcon />
					<YouTubeIcon />
				</div>
				<div className="footer_data">
					<div>
						<ul>
							<li>Audio Descriptions</li>
							<li>Investor Relations</li>
							<li>Legal Notice</li>
						</ul>
					</div>
					<div>
						<ul>
							<li>Help Centers</li>
							<li>Jobs</li>
							<li>Cookies Preference</li>
						</ul>
					</div>
					<div>
						<ul>
							<li>Gift Cards</li>
							<li>Terms of Uses</li>
							<li>Corporate Informations</li>
						</ul>
					</div>
					<div>
						<ul>
							<li>Media Centers</li>
							<li>Privacy</li>
							<li>Contact Us</li>
						</ul>
					</div>
				</div>
				<div className="service_code">
					<p>Service Code</p>
				</div>
				<div className="copywrite">&copy;1997-2024 Netflix, Inc.</div>
			</div>
		</div>
	);
};

export default Footer;
