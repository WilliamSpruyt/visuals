import React, { Component } from 'react';
  

class FlyingTriangleCanavas extends React.Component {
  
    componentDidMount() {
      const canvas = this.refs.canvas
      const ctx = canvas.getContext("2d")
        
canvas.inCircleFinder=this.inCircleFinder;
canvas.triangle=this.triangle;
canvas.circle=this.circle;
canvas.dist=this.dist;
canvas.red=this.props.r;
canvas.green=this.props.g;
canvas.blue=this.props.b;
var xCentre = 600;
var yCentre = 375;
var xMiddle=this.props.width/2;
var yMiddle=this.props.height/2;
var mousePos=[xMiddle,yMiddle] 
canvas.addEventListener('mousemove', function(evt) {
  var rect = canvas.getBoundingClientRect()
   mousePos=[
    evt.clientX - rect.left,
   evt.clientY - rect.top]
   this.inCircleFinder(mousePos[0],mousePos[1], mousePos[0]+Math.sin((Math.PI/180)*(mousePos[0]))*100,mousePos[1]+Math.cos((Math.PI/180)*(mousePos[1]))*100,
          mousePos[0]+Math.cos((Math.PI/180)*(mousePos[0]))*100,mousePos[1]+Math.sin((Math.PI/180)*(mousePos[1]))*100,ctx,this.red,this.green,this.blue)
}, false); 
      
    }
    render() {
      return(
        <div>
          <canvas ref="canvas" width={this.props.width} height={this.props.height} />
          
        </div>
      )
    }
      dist(x, y, a, b) {
        return Math.sqrt((x - a) * (x - a) + (y - b) * (y - b));
      }
       
      
       
      getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return [
           evt.clientX - rect.left,
          evt.clientY - rect.top]
        ;
      }
      
      inCircleFinder(ax,ay, bx, by, cx, cy,ctx,red,green,blue){
        //background(255,255,255);
        //fill(ax%255,bx%255,cx%255);
        var posArr = 'vertex: ' +ax + ','+ ay;
            
            this.triangle(ax,ay,bx,by,cx,cy,ctx,ax%red,bx%green,cx%blue);
            let a=this.dist(bx,by,cx,cy);
            let b=this.dist(ax,ay,cx,cy);
            let c=this.dist(ax,ay,bx,by);
            let p= a+ b+  c;
            let dp= p/2;
            let ox=(( a*ax)+( b*bx)+( c*cx))/  p;
            let oy=((  a*ay)+(  b*by)+(  c*cy))/  p;
            let A= Math.sqrt( dp*( dp- a)*( dp-   b)*(   dp-  c));
            let r=(2*  A)/ p;
         
        //fill(ay%255,by%255,cy%255);
        
        this.circle(  ox,  oy,  r,ctx,ox%green,oy%blue,A%red);
        
        
      }
        triangle(ax,ay,bx,by,cx,cy,ctx,r,g,b){
        ctx.fillStyle='rgb('+r+','+g+','+b+')';
        
        ctx.beginPath();
        ctx.moveTo(ax, ay);
      ctx.lineTo(bx, by);
      ctx.lineTo(cx, cy);
      ctx.lineTo(ax, ay);
      ctx.closePath();
      ctx.fill();
      //ctx.stroke();
      
      }
      
       circle(x,y,r,ctx,red,g,b){
        ctx.fillStyle='rgb('+red+','+g+','+b+')';
        ctx.beginPath();
        ctx.arc(x,y,r,0,2*Math.PI);
        ctx.closePath();
        ctx.fill();
       // ctx.stroke();
        
      }
      
         radians(degrees){
        return degrees*(Math.PI/180)
      }
     
  }
  export default FlyingTriangleCanavas