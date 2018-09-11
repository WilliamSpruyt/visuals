import React, { Component } from 'react';
import pool  from './images/poolscene.JPG'
import Missile  from  './Missile'

class TunnelCanvas extends React.Component {
  
    componentDidMount() {
      const canvas = this.refs.canvas
      const ctx = canvas.getContext("2d")
      const img = this.refs.image
      const missileArr=[];
      for(let i=0;i<100;i++){
        missileArr.push(new Missile(canvas.width,canvas.height,
          canvas.width/2,canvas.height/2,20+(Math.random()* 50),  20+(Math.random()* 50), Math.random()*360, 2, 2,Math.random()<0.5? false:true,(Math.random()* this.props.r),(Math.random()* this.props.g),(Math.random()* this.props.b)
        ))
      }
        
      setInterval(() => {
         missileArr.forEach((ele)=>{ele.update(ctx)})
      }, 0);
    }
    render() {
      return(
        <div>
          <canvas ref="canvas" width={this.props.width} height={this.props.height} />
          
        </div>
      )
    }
    circle(x,y,r,ctx,red,g,b){
      ctx.fillStyle='rgb('+red+','+g+','+b+')';
      ctx.beginPath();
      ctx.arc(x,y,r,0,2*Math.PI);
      ctx.closePath();
      ctx.fill();
     // ctx.stroke();
      
    }
     
  }
  export default TunnelCanvas