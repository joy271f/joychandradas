import { useRef } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import { FaHandsHelping } from "react-icons/fa";
import { Animate } from "react-simple-animate";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lkcck8r', 'template_9jc71t7', form.current, 'hsMu-xWtSZiI-nL7C')
            .then((result) => {
                toast.success('Successfully Send')
            }, (error) => {
                toast.error(`Error: ${error}`)
            });
    };
    return (
        <div className="overflow-hidden">
            <PageHeader
                headerText="Contact me"
                icon={<div className="flex justify-start items-center gap-2 md:gap-5 text-green-300">
                    <Link to="https://www.facebook.com/joychandradas007" target="_blank"><FaFacebook size={25}></FaFacebook></Link>
                    <Link to="https://www.linkedin.com/in/joychandradas" target="_blank"><FaLinkedin size={25}></FaLinkedin ></Link>
                    <Link to="https://github.com/joychandradas" target="_blank"><FaGithub size={25}></FaGithub></Link>
                </div>}
            />
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <Animate
                        play
                        duration={0.8}
                        start={{ transform: "translateX(200px)" }}
                        end={{ transform: "translateX(0px)" }}
                    >
                        <h1 className="text-xl md:text-2xl text-green-300 mb-4 md:mb-4 mt-8 mx-12 md:mx-24">Let's Talk</h1>
                    </Animate>

                    <Animate
                        play
                        duration={0.7}
                        start={{ transform: "translateY(200px)" }}
                        end={{ transform: "translateX(0px)" }}
                    >
                        <div className="mx-auto p-12 pt-2 md:pl-24">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="mb-4">
                                    <label className="block mb-2">Name</label>
                                    <input required type="text" name="from_name" className=" w-full bg-slate-900 border-b-2 border-green-400 mb-2 focus:outline-none " />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2">Email</label>
                                    <input required type="email" name="from_email" className="w-full bg-slate-900 border-b-2 border-green-400 mb-2 focus:outline-none " />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2">Message</label>
                                    <textarea required name="message" className="w-full bg-slate-900 border-b-2 border-green-400 mb-2 focus:outline-none h-16 md:h-28" />
                                </div>
                                <input className="btn hover:bg-green-500 bg-green-400 text-black px-12" type="submit" value="Send" />
                            </form>
                        </div>
                    </Animate>
                </div>
                <div className="my-4 md:my-12">
                    <Animate
                        play
                        duration={0.8}
                        start={{ transform: "translateX(500px)" }}
                        end={{ transform: "translateX(0px)" }}
                    >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4588.340597487356!2d90.37289500116013!3d23.79925484516149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1f3bba97017%3A0xc0a72d917e86f6ce!2sKazipara%20Metro%20Station!5e0!3m2!1sen!2sbd!4v1688364199647!5m2!1sen!2sbd" className="mx-auto border-0 w-3/4 h-[250px] md:w-3/4 md:h-[450px]" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Animate>
                </div>
            </div>
        </div>
    );
};

export default Contact;