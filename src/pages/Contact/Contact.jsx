import { useRef } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import { FaHandsHelping } from "react-icons/fa";
import { Animate } from "react-simple-animate";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

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
                icon={<FaHandsHelping size={40} />}
            />
            <Animate
                play
                duration={0.8}
                start={{ transform: "translateX(200px)" }}
                end={{ transform: "translateX(0px)" }}
            >
                <h1 className="text-xl md:text-2xl text-green-300 mb-4 md:mb-4 mt-12 mx-12 md:mx-24">Let's Talk</h1>
            </Animate>

            <Animate
                play
                duration={0.7}
                start={{ transform: "translateY(200px)" }}
                end={{ transform: "translateX(0px)" }}
            >
                <div className="mx-12 md:mx-24">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="mb-4">
                            <label className="block mb-2">Name</label>
                            <input required type="text" name="from_name" className="w-60 md:w-1/2 bg-slate-900 border-b-2 border-green-400 mb-2 focus:outline-none " />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Email</label>
                            <input required type="email" name="from_email" className="w-60 md:w-1/2 bg-slate-900 border-b-2 border-green-400 mb-2 focus:outline-none " />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Message</label>
                            <textarea required name="message" className="w-60 md:w-1/2 bg-slate-900 border-b-2 border-green-400 mb-2 focus:outline-none h-16 md:h-28" />
                        </div>
                        <input className="mb-4 btn hover:bg-green-500 bg-green-400 text-black px-12" type="submit" value="Send" />
                    </form>
                </div>
            </Animate>

        </div>
    );
};

export default Contact;