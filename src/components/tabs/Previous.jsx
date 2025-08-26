import img1 from "../../assets/prev1.png";
 import img2 from "../../assets/prev2.png";
import img3 from "../../assets/prev3.png";
import img4 from "../../assets/prev4.png";
import img5 from '../../assets/5 object.png'
import img6 from '../../assets/3 download.png'
import img7 from '../../assets/1 Maximize your small kitchen with these brilliant….png'

const Previous=()=>{
    return(
    <div className="previous tab">
        <div className="prev1 grid-item">
<div className="grid-item-text">
    <h3>text</h3>
    <span>textlk;sd......dsad</span>
</div>
<img src={img1} alt='grid-item'/>
        </div>
        <div className="prev2 grid-item">
          <div className="grid-item-text">
    <h3>text</h3>
    <span>textlk;sd......dsad</span>
</div>
          <img src={img2} alt='grid-item'/>  
        </div>
        <div className="prev3 grid-item">
            <div className="grid-item-text">
    <h3>text</h3>
    <span>textlk;sd......dsad</span>
</div>
            <img src={img3} alt='grid-item'/>
        </div>
        <div className="prev4 grid-item">
            <div className="grid-item-text">
    <h3>text</h3>
    <span>textlk;sd......dsad</span>
</div>
            <img src={img4} alt='grid-item'/>
        </div>
        <div className="prev5 grid-item">
            <div className="grid-item-text">
    <h3>text</h3>
    <span>textlk;sd......dsad</span>
</div>
            <img src={img5} alt='grid-item'/>
        </div>
        <div className="prev6 grid-item">
            <div className="grid-item-text">
    <h3>text</h3>
    <span>textlk;sd......dsad</span>
</div>
            <img src={img6} alt='grid-item'/>
        </div>
        <div className="prev7 grid-item">
          <div className="grid-item-text">
    <h3>text</h3>
    <span>textlk;sd......dsad</span>
</div>
          <img src={img7} alt='grid-item'/>  
        </div>
    
    </div>
    
    )
}
export default Previous;