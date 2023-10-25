import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Section from "./section";

const Fullpage = (props) => (
  <ReactFullpage
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000}
    navigation = {true}
    render={({ state, fullpageApi }) => {
        return (
            <>                
                <ReactFullpage.Wrapper>
                    {props.data.map((value, key) => <Section data={value} key={key}/> )}
                </ReactFullpage.Wrapper>
                <div className="slidingArrow" onClick={() => fullpageApi.moveSectionDown()}></div>
            </>            
        );
    }}
  />
);

export default Fullpage;