import { iconsImgs, personsImgs } from "../../utils/images";
import "./ContentTop.css";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebarContext";

const ContentTop = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  return (
    <div className="main-content-top">
        <div className="content-top-left">
            <button type="button" className="sidebar-toggler" onClick={() => toggleSidebar() }>
                <img src={ iconsImgs.menu } alt="" />
            </button>
            <h3 className="content-top-title">Hello Mad🖐️</h3>
            <input type="text" className="search-input" placeholder="  Search here" />
        </div>
        <div className="content-top-btns">
            <ul className="right-nav btn">
                <ul className="uploadbtn">
                    <li><img className="upload" src={iconsImgs.upload} alt="" /></li>
                    <li>New Upload</li>
                </ul>
                <li className="bell" ><img src={iconsImgs.notification_bell} alt="" /></li>
                <li className="mssg"><img className="mssg" src={iconsImgs.mssg} alt="" /></li>
                <li className="sound"><img src={iconsImgs.sound} alt="" /></li>
                <ul className="name">
                    <li className="p-name"><p><strong>TheMad</strong> Designer</p></li>
                    <li className=""><img className="person" src={personsImgs.person_one} alt="" /></li>
                </ul>
                
                
            </ul>
            
        </div>
    </div>
  )
}

export default ContentTop
