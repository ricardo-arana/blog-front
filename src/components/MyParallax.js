import React from 'react';
import { Parallax, Background } from 'react-parallax';
import { blue50 } from '@material-ui/core/colors'
export default class MyParallax extends React.Component{
    render(){
      return(
    <div>
            {/*-----dynamic blur-----*/}
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={process.env.PUBLIC_URL + '/images/bg-home.jpg'}
                bgImageAlt="the dog"
                strength={600}
            >
                <div style={{ height: '200px' }}>

                </div>
                <h1 className="Parallax-text"> Bienvenidos a mi Blog :) </h1>
            </Parallax>
        </div>
      );
    }
}
