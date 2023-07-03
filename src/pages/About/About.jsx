import PageHeader from "../../components/PageHeader/PageHeader";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Animate } from "react-simple-animate";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
    return (
        <div className="overflow-hidden">
            <PageHeader
                headerText="About me"
                icon={<FaInfoCircle size={40} />}
            />

            <div className="md:flex flex-row-reverse justify-center items-center">
                <div className="w-1/2">
                    <Animate
                        play
                        duration={1}
                        start={{ transform: "translateX(900px)" }}
                        end={{ transform: "translateX(0px)" }}
                    >
                        <img src="/joychandradas.png" className="md:p-4 mt-4 mx-20 md:mx-0" alt="" />
                    </Animate>
                </div>
                <div className="md:w-1/2 p-4 md:p-12 md:mx-12">
                    <Animate
                        play
                        duration={1}
                        delay={0.5}
                        start={{ transform: "translateX(-800px)" }}
                        end={{ transform: "translateX(0px)" }}
                    >
                        <h1 className="text-xl md:text-2xl text-green-300 mb-2 pb-2 border-b-2 border-dotted border-green-500">Front End Developer</h1>
                        <p className="text-justify leading-relaxed">Highly motivated and dedicated Frontend Developer with a strong focus on the React framework. With adeep understanding of React's component-based architecture and virtual DOM, I have successfully developed and delivered dynamic and responsive web applications.
                        </p>
                    </Animate>
                    <Animate
                        play
                        duration={1}
                        delay={0.5}
                        start={{ transform: "translateY(500px)" }}
                        end={{ transform: "translateX(0px)" }}
                    >
                        <h1 className="mt-8 border-b-2 border-dotted border-green-300 pb-2">Personal Information</h1>
                        <ul className="mt-2 leading-loose">
                            <li>Name: Joy Chandra Das</li>
                            <li>Phone: +880 1610950440</li>
                            <li>Email: joychandradas007@gmail.com</li>
                            <li>Address: Mirpur, Dhaka, Bangladesh.</li>
                        </ul>
                        <div className="flex justify-start items-center my-4 gap-5 text-xl text-green-300">
                            <Link to="https://www.facebook.com/joychandradas007" target="_blank"><FaFacebook></FaFacebook></Link>
                            <Link to="https://www.linkedin.com/in/joychandradas" target="_blank"><FaLinkedin></FaLinkedin></Link>
                            <Link to="https://github.com/joychandradas" target="_blank"><FaGithub></FaGithub></Link>
                        </div>
                    </Animate>
                </div>
            </div>
        </div>
    );
};

export default About;