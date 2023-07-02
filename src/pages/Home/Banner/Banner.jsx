import { FaCloudDownloadAlt } from 'react-icons/fa';
import Lottie from "lottie-react";
import developer from "../../../../public/developer.json"
import { Typewriter } from 'react-simple-typewriter'
import Marquee from "react-fast-marquee";
import { Animate } from "react-simple-animate";

const Banner = () => {
    return (
        <div className="grid md:grid-cols-2 items-center overflow-hidden">
            <div className="mx-8 mt-8 md:mt-12 md:mx-24 md:text-2xl">
                <Animate
                    play
                    duration={1}
                    delay={0.5}
                    start={{ transform: "translateX(-900px)" }}
                    end={{ transform: "translateX(0px)" }}
                >
                    <div className='bg-slate-900 p-4 md:p-6 rounded-2xl'>
                        <h1 className="font-extrabold md:text-5xl text-green-300">Hello, I'm Joy</h1>
                        <h1 className='text-green-300 text-xs md:text-2xl mt-2 md:mt-4'>
                            Front-end Developer {' '}
                            <span className="font-extrabold text-transparent text-[0.74rem] md:text-2xl  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['Passionate!', 'Adaptable!', 'Proactive!']}
                                    loop={0}
                                    cursor
                                    cursorColor='cyan'
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1500}
                                />
                            </span>
                        </h1>
                        <a href="/JoyChandraDas_Resume.pdf" download className="btn btn-grad btn-xs md:btn-md mt-4 mb-2 md:mt-8"><FaCloudDownloadAlt /> Download Resume</a>
                    </div>
                </Animate>
                <Animate
                    play
                    duration={1.5}
                    delay={0.5}
                    start={{ transform: "translateY(900px)" }}
                    end={{ transform: "translateX(0px)" }}
                >
                    <div className='mt-12 bg-slate-900 py-6 px-2 rounded-2xl'>
                        <Marquee autoFill={true} pauseOnHover>
                            <img className='rounded-full md:p-2 w-10 md:w-20' src="/mrq_pic/html.png" alt="" />
                            <img className='rounded-full md:p-2 w-10 md:w-20' src="/mrq_pic/css.png" alt="" />
                            <img className='rounded-full md:p-2 w-10 md:w-20' src="/mrq_pic/js.png" alt="" />
                            <img className='rounded-full md:p-2 w-10 md:w-20' src="/mrq_pic/bt.png" alt="" />
                            <img className='rounded-full md:p-2 w-10 md:w-20' src="/mrq_pic/tl.png" alt="" />
                            <img className='rounded-full md:p-2 w-10 md:w-20' src="/mrq_pic/react.png" alt="" />
                            <img className='rounded-full md:p-2 w-10 md:w-20' src="/mrq_pic/fire.png" alt="" />
                            <img className='rounded-full md:p-2 w-10 md:w-20' src="/mrq_pic/express.png" alt="" />
                            <img className='rounded-full md:p-2 w-10 md:w-20' src="/mrq_pic/mongo.png" alt="" />
                            <img className='rounded-full md:p-2 w-10 md:w-20' src="/mrq_pic/node.png" alt="" />
                        </Marquee>
                    </div>
                </Animate>
            </div>
            <Animate
                play
                duration={0.6}
                delay={0.5}
                start={{ transform: "translateX(900px)" }}
                end={{ transform: "translateX(0px)" }}
            >
                <div className="md:w-3/4 bg-slate-900 m-8 md:m-0 p-4 md:p-0 md:px-12 md:mt-12 rounded-2xl">
                    <Lottie animationData={developer} loop={true} />
                </div>
            </Animate>
        </div>
    );
};

export default Banner;