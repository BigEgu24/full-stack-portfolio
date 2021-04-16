import React, {useState} from 'react';
import "./Project.scss";
import Icon from '@mdi/react';
import { 
    mdiGithub,
    mdiWeb,
    mdiMagnify
} from '@mdi/js';
import { useAppContext } from '../Context/app-context';

export default function Project({
    img,
    type,
    title,
    description,
    slugs,
    github,
    siteURL
}) {
    const [hover, setHover] = useState(false);
    const {functions, values} = useAppContext();
    const {project} = values;
    const {setModal, setProject} = functions;

    const openModal = () => {
        setProject({
            ...project,
            img: img,
            type: type,
            title: title,
            description: description,
            slugs: slugs,
            github: github,
            siteURL: siteURL
        })
        setModal('project')
    }
    
    return (
        <div className="project flex pointer" onMouseEnter={() => setHover(!hover)} onMouseLeave={() => setHover(!hover)} style={{ backgroundImage: hover ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("images/${img}")` : `url("images/${img}")` }} onClick={() => openModal()}>
            {/* Site as background with search icon in center */}
            <Icon 
            path={mdiMagnify}
            size={1.7}
            color="#fff"
            className="icon"/>
            {/* <div className="image" style={{ backgroundImage: `url("images/${img}")` }}>Replace With a gif</div>
            <div className="content relative">
                <h1 className="type">
                    {type}
                </h1>
                <h1 className="title">
                    {title}
                </h1>
                <p className="description">
                    {description}
                </p>
                <ul className="slugs flex">
                    {
                       slugs.map((slug, index) => {
                           return(
                               <li key={index} className="flex items-center">
                                   {slug}
                               </li>
                           )
                       }) 
                    }
                </ul>
                <ul className="links flex absolute">
                    <li>
                        <Link to={{ pathname: github }} target="__blank" title="View the Code" className="flex items-center">
                            <Icon 
                            path={mdiGithub}
                            size={0.9}
                            color="#000"/>
                            <p>View the Code</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={{ pathname: siteURL }} target="__blank" title="Go to the Website" className="flex items-center">
                            <Icon 
                            path={mdiWeb}
                            size={0.9}
                            color="#000"/>
                            <p>Lauch Site</p>
                        </Link>
                    </li>
                </ul>
            </div> */}
        </div>
    )
}
