import React, { Component } from 'react';
import Face from './Face'
import './App.css';
import  TunnelCanvas from  './TunnelCanvas'
import FlyingTriangleCanvas from './flyingTiangleCanvas';
import faceListGenerate from './faceListGenerate'
import comps from './complimentaries'
import mouthSetter from "./mouthSetter";
import browSetter from "./browSetter";
import vocate from "./vocate"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faceList: this.flg(8),
      loneface:this.flg(1),
      comps:this.cmp()
    };}
   /* componentDidMount() {
      var phon = setInterval(() => {
        if (count > faceNum - 1) count = 0;
  
       // this.eagleEyes(Math.floor(Math.random() * faceNum), this.state.faceList);
        this.setState({faceList:this.vocate(
          Math.random() * 10 - 5,
          Math.random() * 40 - 20,
          Math.random() * 10 - 5,
          Math.random() * 10 - 5,
          Math.random() * 40 - 20,
          Math.random() * 10 - 5,
          1000,
  
          Math.floor(Math.random() * faceNum),
          this.state.faceList.slice())}
        );
      }, 0);
    }*/
  render() {
    return (
      <div className="App"><div className="App-header"><FlyingTriangleCanvas width={200} height={250}  r={255} g={10} b={10} className="canvi" />
      <TunnelCanvas width={200} height={250} r={0} g={255} b={128} className="canvi" /><TunnelCanvas width={400} height={250} r={255} g={0} b={0} className="canvi" /><div className="App-header">{this.state.loneface.map(ele => {
          return (
            <div >
              <Face
                className="face"
                width={200}
                height={250}
                key={ele.label}
                label={ele.label}
                cols={ele.cols}
                greyCols={ele.greyCols}
                faceFat={ele.faceFat}
                faceHeight={ele.faceHeight}
                eyeHeight={ele.eyeHeight}
                eyeSquiff={ele.eyeSquiff}
                mouthPath={ele.mouth}
                nose={ele.nose}
                bosseye={ele.bosseye}
                glanceX={ele.glanceX}
                glanceY={ele.glanceY}
                brow={ele.brow}
                awake={ele.awake}
                handleClick={this.handleClick}
                lights={ele.lights}
              />
            </div>
          );
        })}</div><TunnelCanvas width={400} height={250} r={128} g={255} b={0} className="canvi" /></div>
      <div className="App-header">
        <TunnelCanvas width={200} height={500} r={128} g={0} b={0} className="canvi" />
        <FlyingTriangleCanvas width={400} height={500}  r={10} g={10} b={255} className="canvi" />
        <TunnelCanvas width={200} height={500} r={255} g={255} b={0} className="canvi" /><FlyingTriangleCanvas width={400} height={500}  r={128} g={10} b={255} className="canvi" /><FlyingTriangleCanvas width={200} height={500}  r={255} g={255} b={100} className="canvi" />
      </div><div className="App-header">{this.state.faceList.map(ele => {
          return (
            <div >
              <Face
                className="face"
                width={200}
                height={400}
                key={ele.label}
                label={ele.label}
                cols={ele.cols}
                greyCols={ele.greyCols}
                faceFat={ele.faceFat}
                faceHeight={ele.faceHeight}
                eyeHeight={ele.eyeHeight}
                eyeSquiff={ele.eyeSquiff}
                mouthPath={ele.mouth}
                nose={ele.nose}
                bosseye={ele.bosseye}
                glanceX={ele.glanceX}
                glanceY={ele.glanceY}
                brow={ele.brow}
                awake={ele.awake}
                handleClick={this.handleClick}
                lights={ele.lights}
              />
            </div>
          );
        })}</div></div>
    );
  }
  flg=faceListGenerate;
  voc=vocate;
  cmp=comps;
}

export default App;
