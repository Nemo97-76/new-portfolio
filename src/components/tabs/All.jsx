import img1 from "../../assets/1 Maximize your small kitchen with these brilliant….png";
import img2 from "../../assets/2 Afralia™ Nordic Wooden Art Iron LED Desk Lamp for Home Decor & Reading - Pink _ 3 Color switching _ AU Plug .png";
import img4 from "../../assets/4 Illuminate your living space with this….png";
import img5 from "../../assets/5 object.png";
import img6 from "../../assets/6  2296b543-1362-4c3c-afdf-92a7d619b827.png";
import img7 from "../../assets/7 Life lately ✨ plannen afleveren, hoekjes….png";
import img8 from "../../assets/8   61c6f546-f97b-44b9-9d98-afcba2f44f98.png";
import AnimatedContent from "../AnimatedContent";

const All = () => {
  return (
    <AnimatedContent
      distance={500}
      direction="vertical"
      reverse={false}
      duration={1.2}
      ease="bounce.out"
      initialOpacity={0.2}
      animateOpacity
      scale={1.1}
      threshold={0.2}
      delay={0.3}
    >
      <div className="All tab">
        
        <div className="All1 grid-item">
          <div className="grid-item-text">
            <h3>text</h3>
            <span>textlk;sd......dsad</span>
          </div>
          <img src={img1} />
        </div>

        <div className="All2 grid-item">
          <div className="grid-item-text">
            <h3>text</h3>
            <span>textlk;sd......dsad</span>
          </div>
          <img src={img2} />
        </div>

        <div className="All4 grid-item">
          <div className="grid-item-text">
            <h3>text</h3>
            <span>textlk;sd......dsad</span>
          </div>
          <img src={img4} />
        </div>

        <div className="All5 grid-item">
          <div className="grid-item-text">
            <h3>text</h3>
            <span>textlk;sd......dsad</span>
          </div>
          <img src={img5} />
        </div>

        <div className="All6 grid-item">
          <div className="grid-item-text">
            <h3>text</h3>
            <span>textlk;sd......dsad</span>
          </div>
          <img src={img6} />
        </div>

        <div className="All7 grid-item">
          <div className="grid-item-text">
            <h3>text</h3>
            <span>textlk;sd......dsad</span>
          </div>
          <img src={img7} />
        </div>

        <div className="All8 grid-item">
          <div className="grid-item-text">
            <h3>text</h3>
            <span>textlk;sd......dsad</span>
          </div>
          <img src={img8} />
        </div>
      </div>
    </AnimatedContent>
  );
};
export default All;
