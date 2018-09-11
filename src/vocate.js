import mouthSetter from "./mouthSetter";
import browSetter from "./browSetter";



export default function vocate(mouthWidth,
    mouthMood,
    mouthCurl,
    endMouthWidth,
    endMouthMood,
    endMouthCurl,
    numFrames,
    faceNum,
    tempFaceList) {
     // console.log("before"+tempFaceList)
        let widthInc = endMouthWidth / numFrames;
        let moodInc = endMouthMood / numFrames;
        let curlInc = endMouthCurl / numFrames;
    
        if (mouthWidth < endMouthWidth) {
          mouthWidth += widthInc;
          mouthMood += moodInc;
          mouthCurl += curlInc;
          tempFaceList[faceNum].mouth = mouthSetter(
            mouthWidth,
            mouthMood,
            mouthCurl
          );
          if (Math.abs(mouthMood) / 10 > 1)
            tempFaceList[faceNum].eyeHeight = Math.abs(mouthMood) / 10;
    
          tempFaceList[faceNum].brow = browSetter(
            Math.random() > 0.5 ? true : false,
            tempFaceList[faceNum].brow.thickness,
            mouthMood / 2,
            mouthCurl / 2,
            mouthCurl / 2,
            mouthMood / 2
          );
          console.log("after"+tempFaceList)
          return tempFaceList 
        }
      }
  