import React from 'react';
import Img from '../../../components/image';

function ProjectCard(props) {
    return <div className="single-portfolio col-sm-4 all projects">
        <div className="relative">
            <div className="thumb">
                <a href={props.deployedUrl}>
                    <Img src={props.imgSrc} classes="" />
                </a>
            </div>
        </div>
        <div className="p-inner">
            <h4>{props.title}</h4>
            {!!props.githubUrl && <a className="btn btn-secondary mb-2 mr-3" href={props.githubUrl}>github</a>}
            <a className="btn btn-secondary mb-2" href={props.deployedUrl}>website</a>
            <div className="cat">{props.category}</div>
        </div>
    </div>
}

export default ProjectCard