import PageHeader from "../../components/PageHeader/PageHeader";
import { FaSignal } from "react-icons/fa";
import MERNImageOne from "/portfolio_pic/MERN/s10.jpg"
import MERNImageTwo from "/portfolio_pic/MERN/s11.jpg"
import MERNImageThree from "/portfolio_pic/MERN/s12.jpg"
import BasicImageOne from "/portfolio_pic/Basic/s1.jpg"
import BasicImageTwo from "/portfolio_pic/Basic/s2.jpg"
import BasicImageThree from "/portfolio_pic/Basic/s3.jpg"
import BasicImageFour from "/portfolio_pic/Basic/s4.jpg"
import BasicImageFive from "/portfolio_pic/Basic/s5.jpg"
import BasicImageSix from "/portfolio_pic/Basic/s6.jpg"
import { useState } from "react";
import { Link } from "react-router-dom";
import { Animate } from "react-simple-animate";
import LazyLoad from 'react-lazy-load';

const portfolioData = [
    {
        id: 3,
        name: 'Rhythmax',
        image: MERNImageThree,
        description: 'Course marketplace with dashboards',
        client: 'https://github.com/joychandradas/rhythmax-client-side',
        server: 'https://github.com/joychandradas/rhythmax-server-side',
        liveSite: 'https://rhythmax-80178.web.app'
    },
    {
        id: 3,
        name: 'Puzzle Playground',
        image: MERNImageTwo,
        description: 'Toy marketplace with user auth and CRUD',
        client: 'https://github.com/joychandradas/puzzle-playground-client',
        server: 'https://github.com/joychandradas/puzzle-playground-server',
        liveSite: 'https://puzzle-playground.web.app'
    },
    {
        id: 3,
        name: 'Chef Hut',
        image: MERNImageOne,
        description: 'Recipe website with user auth and routing',
        client: 'https://github.com/joychandradas/taco-town-client-side',
        server: 'https://github.com/joychandradas/taco-town-server-side',
        liveSite: 'https://chef-hat-a10.web.app'
    },
    {
        id: 2,
        name: 'Mindset',
        image: BasicImageOne,
        description: 'My First Website Using HTML5 and CSS3',
        client: 'https://github.com/joychandradas/my-first-assignment',
        liveSite: 'https://joychandradas.github.io/my-first-assignment'
    },
    {
        id: 2,
        name: 'G3 Architects',
        image: BasicImageTwo,
        description: 'Responsive Web Layout Using HTML5 and CSS3',
        client: 'https://github.com/joychandradas/g3-architects',
        liveSite: 'https://joychandradas.github.io/g3-architects'
    },
    {
        id: 2,
        name: 'Legal Solution',
        image: BasicImageThree,
        description: 'CSS Frameworks Using Bootstrap',
        client: 'https://github.com/joychandradas/legal-solution',
        liveSite: 'https://legal-solution1.netlify.app'
    },
    {
        id: 2,
        name: 'Geometry Genius',
        image: BasicImageFour,
        description: 'Integrate Vanilla JavaScript',
        client: 'https://github.com/joychandradas/geometry-genius',
        liveSite: 'https://gorgeous-begonia-3b0cee.netlify.app'
    },
    {
        id: 2,
        name: 'AI Universe Hub',
        image: BasicImageFive,
        description: 'Using JavaScript and API',
        client: 'https://github.com/joychandradas/AI-universe-hub',
        liveSite: 'https://ai-universe-hub-411c57.netlify.app'
    },
    {
        id: 2,
        name: 'Network-Hub',
        image: BasicImageSix,
        description: 'Using Basic React and React Router',
        client: 'https://github.com/joychandradas/b7a9-career-hub-joychandradas',
        liveSite: 'https://venerable-croissant-69a151.netlify.app'
    },
]

const categorysData = [
    {
        filterId: 1,
        label: "ALL"
    },
    {
        filterId: 2,
        label: "BASIC"
    },
    {
        filterId: 3,
        label: "MERN"
    }
]

const Portfolio = () => {
    const [filteredValue, setFilteredValue] = useState(1);

    const handleFilteredValue = currentId => {
        setFilteredValue(currentId);
    }


    const filteredItem = filteredValue === 1 ? portfolioData : portfolioData.filter(item => item.id === filteredValue)


    return (
        <div>
            <PageHeader headerText="Portfolio" icon={<FaSignal size={40} />} />

            <Animate
                play
                duration={1}
                start={{ transform: "translateX(-200px)" }}
                end={{ transform: "translateX(0px)" }}
            >
                <ul className="flex items-center gap-x-10 mx-auto mt-8 md:mt-6 text-white border border-dotted rounded-full border-green-300 w-56 px-4 py-2">
                    {
                        categorysData.map((category) => (
                            <li onClick={() => handleFilteredValue(category.filterId)} className={category.filterId === filteredValue ? 'active cursor-not-allowed' : 'cursor-pointer'} key={category.filterId}>
                                {category.label}
                            </li>
                        ))
                    }
                </ul>
            </Animate>

            <Animate
                play
                duration={1}
                start={{ transform: "translateY(500px)" }}
                end={{ transform: "translateX(0px)" }}
            >
                <div className="grid md:grid-cols-3 gap-5 mt-8 p-4 mx-auto max-w-[1320px]">
                    {
                        filteredItem.length !== 0 ? <>
                            {
                                filteredItem.map(item => (
                                    <div key={item.name.trim()} className="card bg-slate-900 mb-8 shadow-2xl">
                                        <LazyLoad>
                                            <div className="h-64 w-full">
                                                <img className="h-full w-full object-cover" src={item.image} alt={item.name} />
                                            </div>
                                        </LazyLoad>
                                        <div className="card-body">
                                            <h2 className="card-title">{item.name}</h2>
                                            <p>{item.description}</p>
                                            <div className="flex justify-between mt-2 items-center gap-6">
                                                <Link to={item.client} className="font-thin text-[#8103e1]">#Client</Link>
                                                {
                                                    portfolioData.server !== item.server ? <Link to={item.server} className="font-thin text-[#C62A88]">#Server</Link> : ''
                                                }
                                                <Link to={item.liveSite} className="font-thin text-[#03C4A1]">Live Preview</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </> : <p className="mx-8">No Items Found</p>
                    }
                </div>
            </Animate>
        </div>
    );
};
export default Portfolio;