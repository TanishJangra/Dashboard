import { iconsImgs } from "../../utils/images";
import "./Cards.css";

const Cards = ({name}) => {
    const val=832;
  return (
    <div className="item">
        <div className="bar"></div>
        <div className="categories">
            <h6 className="category pix">{name}</h6>
            <h6 className="pix">{val}</h6>
        </div>
        <img className="progress" src={iconsImgs.sw} alt="" />
    </div>
  )
}

export default Cards
