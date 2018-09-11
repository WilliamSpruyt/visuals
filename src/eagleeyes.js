

export default function eagleEyes(num, tempFaceList) {
    if (tempFaceList[num].glanceX >= 5.0) tempFaceList[num].eyeMotionX *= -1;
    else if (tempFaceList[num].glanceX <= -5.0)
      tempFaceList[num].eyeMotionX *= -1;

    tempFaceList[num].glanceX += tempFaceList[num].eyeMotionX;

    if (tempFaceList[num].glanceY >= tempFaceList[num].eyeHeight)
      tempFaceList[num].eyeMotionY *= -1;
    else if (tempFaceList[num].glanceY <= tempFaceList[num].eyeHeight * -1)
      tempFaceList[num].eyeMotionY *= -1;

    tempFaceList[num].glanceY += tempFaceList[num].eyeMotionY;

    //Math.sin(Date.now() * 5);
   return  tempFaceList 
  }
