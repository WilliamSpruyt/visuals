import comps from "./complimentaries";
import mouthMaker from "./mouthmaker";
import browMaker from "./browmaker";
const maxFaceWidth = 55;
const maxFaceHeight = 84;


export default function faceListGenerate(num) {
    let theList = [];
    for (let i = 0; i < num; i++) {
      let faceWidthVar = Math.random() * -20;
      let faceheightVar = Math.random() * -20;
      let compsCols = comps(0);
      theList.push({
        width: ["5%", "10%", "15%"][Math.floor(Math.random() * 3)],
        height: ["25%", "10%", "15%", "20%"][0],
        label: i,
        key: i,
        bosseye: Math.random() > 0.2 ? 1 : -1,
        glanceX: Math.random() * 10 - 5,
        glanceY: Math.random() * 6 - 3,
        cols: compsCols.awake,
        greyCols: compsCols.asleep,
        mouth: mouthMaker(
          maxFaceWidth + faceWidthVar,
          maxFaceHeight + faceheightVar
        ),
        nose: 3 + Math.random() * 3,
        brow: browMaker(),
        faceFat: maxFaceWidth + faceWidthVar,
        faceHeight: maxFaceHeight + faceheightVar,
        eyeSquiff: Math.random() * 10 - 5,
        eyeHeight: 0.5 + Math.random() * 1.5,
        eyeMotionX: Math.random() - 0.5,
        eyeMotionY: Math.random() - 0.5,
        lights: true,
        awake: true
      });
    }
    return theList;
  }