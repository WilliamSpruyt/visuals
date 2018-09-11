import React, { Component } from 'react';
import Face from './Face'
import './App.css';
import  TunnelCanvas from  './TunnelCanvas'
import FlyingTriangleCanvas from './flyingTiangleCanvas';
import faceListGenerate from './faceListGenerate'
import comps from './complimentaries'
import eagleEyes from './eagleeyes'
import vocate from "./vocate"
const faceNum = 9;
let newList=null;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faceList: this.flg(faceNum),
      loneface:this.flg(1),
      comps:this.cmp()
    };
   this.handleClick = this.handleClick.bind(this);}
    
    componentDidMount() {
      var phon = setInterval(() => {
        //if (count > faceNum - 1) count = 0;
        console.log(this.state.faceList)
  
       
     let newList=this.voc(
          Math.random() * 10 - 5,
          Math.random() * 40 - 20,
          Math.random() * 10 - 5,
          Math.random() * 10 - 5,
          Math.random() * 40 - 20,
          Math.random() * 10 - 5,
          1000,
  
          Math.floor(Math.random() * faceNum),
          this.state.faceList.slice());
          console.log("n "+newList)
          if(newList)newList=(this.ee(0, newList)).slice();
        ;
        if(newList){this.setState({faceList:newList})}
      }, 250);
    
    }
  render() {
    return (
      <div className="App"><div className="App-header"><FlyingTriangleCanvas width={200} height={250}  r={255} g={10} b={10} className="canvi" />
      <TunnelCanvas width={200} height={250} r={0} g={255} b={128} className="canvi" /><TunnelCanvas width={400} height={250} r={255} g={0} b={0} className="canvi" /><div className="App-header">{this.state.faceList.slice(0,1).map(ele => {
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
        <TunnelCanvas width={200} height={250} r={128} g={0} b={0} className="canvi" />
        <FlyingTriangleCanvas width={400} height={250}  r={10} g={10} b={255} className="canvi" />
        <TunnelCanvas width={200} height={250} r={null} g={null} b={255} className="canvi" /><FlyingTriangleCanvas width={400} height={250}  r={128} g={10} b={255} className="canvi" /><FlyingTriangleCanvas width={200} height={250}  r={255} g={255} b={100} className="canvi" />
      </div><div className="App-header">{(this.state.faceList)?this.state.faceList.slice(1).map(ele => {
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
        }):null}</div></div>
    );
  }
  flg=faceListGenerate;
  voc=vocate;
  cmp=comps;
  ee=eagleEyes;
  handleClick(event) {
    let tempFaceList = this.state.faceList.slice();
    tempFaceList[event.target.id].awake = !tempFaceList[event.target.id].awake;
    this.setState({ theList: tempFaceList });
  }
}

export default App;
