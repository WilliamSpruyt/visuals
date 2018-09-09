class Missile {
  constructor(w,h,x, y, sx, sy, a, dx, dy, ir,r,g,b) {
    this.xpos = x;
    this.ypos = y;
    this.speedx = sx;
    this.speedy = sy;
    this.initialX = x;
    this.initialY = y;
    this.diamX = dx;
    this.diamY = dy;
    this.initDX = dx;
    this.initDY = dy;
    this.isRect = ir;
    this.angle = a;
    this.g = g;
    this.b = b;
    this.r = r;
    this.width=w;
    this.height=h;
    this.twist = (0.5 - Math.random()) / 100;
    this.old = true;
  }
  update(ctx) {
    if (this.isRect && this.old) { /*fill(0,0,r,225)*/
      ;
      ctx.rect(this.xpos, this.ypos, this.diamX, this.diamY);
      ctx.fill();
    }
    else if (this.old) { /*fill(r,g,b,r)*/
      ;
      this.circle(this.xpos, this.ypos, this.diamX, ctx, this.r, this.g, this.b);
    }
    this.xpos += Math.cos(this.radians(this.angle) * this.speedy);
    this.ypos += Math.sin(this.radians(this.angle) * this.speedx);
    this.diamX += (1 / this.diamY);
    this.diamY += (1 / this.diamX);
    //this.angle+=this.twist;
    if (this.xpos < 0-this.diamX | this.ypos < 0-this.diamY| this.xpos > this.width+this.diamX | this.ypos> this.height+this.diamY ) {
      this.xpos = this.width/2;
      this.ypos = this.height/2;
      this.angle = (Math.random() * 360);
      this.diamX = 2;
      this.diamY = 2;
      this.old = true;        
       
    }
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
}export default Missile