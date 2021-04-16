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
        <div className="project flex pointer" onMouseEnter={() => setHover(!hover)} onMouseLeave={() => setHover(!hover)} style={{ backgroundImage: hover ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${process.env.PUBLIC_URL}/images/${img}")` : `url("${process.env.PUBLIC_URL}/images/${img}")` }} onClick={() => openModal()}>
            {/* Site as background with search icon in center */}
            <Icon 
            path={mdiMagnify}
            size={1.7}
            color="#fff"
            className="icon"/>
        </div>
    )
}
