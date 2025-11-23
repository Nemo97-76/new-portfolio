import img1 from '../../assets/7 Life lately ✨ plannen afleveren, hoekjes….png'
import img2 from '../../assets/5 object.png'
import img3 from '../../assets/4 Illuminate your living space with this….png'
import img4 from '../../assets/9 Transform your living room into an urban oasis….png'
import img5 from '../../assets/8   61c6f546-f97b-44b9-9d98-afcba2f44f98.png'
import img6 from '../../assets/2 Afralia™ Nordic Wooden Art Iron LED Desk Lamp for Home Decor & Reading - Pink _ 3 Color switching _ AU Plug .png';
import AnimatedContent from '../AnimatedContent';
const MiniProjects = () => {
    return (
        <AnimatedContent
        distance={500}
direction='vertical'
reverse={false}
duration={1.2}
ease='bounce.out'
initialOpacity={0.2}
animateOpacity
scale={1.1}
threshold={0.2}
delay={0.3}
        >
        <div className="mini tab">
 <div className="mini1 grid-item">
    <div className="grid-item-text">
    <h3>text</h3>
    <span>textlk;sd......dsad</span>
</div>
    <img src={img1} alt="grid-item"/>
 </div>
    <div className="mini2 grid-item">
        <div className="grid-item-text">
    <h3>text</h3>
    <span>textlk;sd......dsad</span>
</div>
        <img src={img2} alt='grid-item'/>
    </div>
    <div className="mini3 grid-item">
        <div className="grid-item-text">
    <h3>text</h3>
    <span>textlk;sd......dsad</span>
</div>
        <img src={img3} alt='grid-item'/>
    </div>
    <div className="mini4 grid-item">
        <div className="grid-item-text">
    <h3>text</h3>
    <span>textlk;sd......dsad</span>
</div>
        <img src={img4} alt='grid-item'/>
    </div>
    <div className="mini5 grid-item">
        <div className="grid-item-text">
    <h3>text</h3>
    <span>textlk;sd......dsad</span>
</div>
        <img src={img5} alt='grid-item'/>
    </div>
    <div className="mini6 grid-item">
        <div className="grid-item-text">
    <h3>text</h3>
    <span>textlk;sd......dsad</span>
</div>
        <img src={img6} alt="grid-item"/>
    </div>
        </div>

        </AnimatedContent>
    )
}
export default MiniProjects;
        