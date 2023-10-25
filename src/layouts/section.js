import React from 'react';
import Video from '../components/video';
import Carousel from '../components/carousel';
import Image from "../components/image";
import Logo from "../components/logo";
import 'animate.css';

const Section = (props) => {
    const containerClass = props.data.hasVideo? "container video-content": "container";
    return (
        
        <section className="section" data-anchor={props.data.pageName}>            
            <Logo data="logo" theme={props.data.themeColor} />            
            {
                props.data.hasSecondaryLink ?
                <a className="secondaryLink" href={props.data.secondaryLink.link}>{props.data.secondaryLink.text}</a>
                : ""                
            }
            {
                props.data.hasVideo ? 
                <>
                    <Video data={props.data} />
                    <div className={containerClass}>
                        <h2 className="animate__animated animate__animated animate__backInRight">{props.data.header}</h2>
                        <p className="animate__animated animate__animated animate__backInLeft">{props.data.description}</p>
                    </div>
                </> :
                <>
                    <Image data={props.data.image} />
                    <div className={containerClass}>
                        {
                            props.data.hasCarousel ? 
                            <Carousel data={props.data}/> :
                            <>
                                <h2>{props.data.header}</h2>
                                <p>{props.data.description}</p>
                            </>
                        }
                        
                    </div>
                </>
            }
        </section>
        
    );
};

export default Section;