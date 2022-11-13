import "../style/Footer.css";
import logo from "../images/logo.png"

 function Footer() {
	return (
		<footer>
			<div className="container">
				<div className="row">
					<div className="col-md-4 mb-4">
						<img
							src={logo}
							alt="WorkZone"
							height="250"
							width="75%"
							style={{borderRadius:"10%"}}
						/>
					</div>
                    <div className="col-md-4 mb-4 text-light">
						<h3>About :</h3>
                        <p>Our mission is to change the way education meets the future; to foster interdisciplinary, integrated thinking and innovative leadership; to engage fully in the global community; and to facilitate lifelong learning.</p>
					</div>
					<div className="col-md-4 pl-5">
						<h4 className="text-light">Follow Us</h4>
						<div className="d-flex">
							<a
								href="#"
								className="social-round-icon rounded-circle fa-icon d-block align-center"
								title=""
							>
								<i
									className="fab fa-facebook-f w-100 align-bottom text-center"
									aria-hidden="true"
								></i>
							</a>
							
							<a
								href="#"
								className="social-round-icon rounded-circle fa-icon d-block"
								title=""
							>
								<i
									className="fab fa-linkedin-in w-100 align-bottom text-center"
									aria-hidden="true"
								></i>
							</a>

							<a
								href="https://twitter.com/_adarsh_dubey?t=m-iADINO6lPOoJXxO-W10g&s=08"
								className="social-round-icon rounded-circle fa-icon d-block"
								title=""
							>
								<i
									className="fab fa-twitter w-100 align-bottom text-center"
									aria-hidden="true"
								></i>
							</a>

							<a
								href="https://www.instagram.com/adarsh_.dubey_/"
								className="social-round-icon rounded-circle fa-icon d-block"
								title=""
							>
								<i
									className="fab fa-instagram w-100 align-bottom text-center"
									aria-hidden="true"
								></i>
							</a>

						</div>
						<p style={{ marginTop: "1em", color: "white" }}>
							<small>© SBPS 2022</small>
						</p>
						<div className="google-map-code">
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28789.04793208419!2d82.60580051562499!3d25.5839408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39902348f3a3bfff%3A0xb5005a4e7eaed5f2!2sS.B%20PUBLIC%20SCHOOL!5e0!3m2!1sen!2sin!4v1668179981612!5m2!1sen!2sin"  style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"> </iframe>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
export default  Footer;