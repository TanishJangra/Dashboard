import "./ContentMain.css";
import Cards from "../Cards/Cards";
import Report from "../Report/Report";
import { iconsImgs, personsImgs } from "../../utils/images";
import Graph from "../Graph/Graph.jsx";
import Sale from "../Sales/Sale.jsx";
import CourseTable from "../Course-Status-Table/CourseTable.jsx";
import StudentTable from "../Student-Query-table/StudentTable.jsx";
import WeekSale from "../Weekly-Sale-Table/WeekSale.jsx";


const ContentMain = () => {
  return (
    <div className="main-content-holder">
      <div className="content-grid-one">
        <Cards name="Impressions" />
        <Cards name="Total Audience" />
        <Cards name="Engagements" />
        <Cards name="Engaged audience" />
      </div>
      <div className="content-grid-two">
        <Graph className='graph' />
        <Report />
      </div>
      <div className="content-grid-three">
        <div className="salesdoughnut same">
            <div className="top">
              <h3>Sales</h3>
              <img className="dot" src={iconsImgs.dots} alt="" />
            </div>
            <Sale className="sale" />
            <div className="sale-content pos">
              <p>Current Week</p>
              <p>2000</p>
              <img className="img-trend" src={iconsImgs.trend} alt="" />
              <p>+0.3%</p>
            </div>
        <div className="sale-content">
            <p>Last Week</p>
            <p>1500</p>
            <img className="img-trend" src={iconsImgs.trend} alt="" />
            <p>+0.3%</p>
        </div>
        </div>
        <div className="sales-stats same">
          <div className="top">
              <h3>Weekly Sales Stats</h3>
              <img className="dot" src={iconsImgs.dots} alt="" />
          </div>
          <WeekSale/>
        </div>
        <div className="queries same">
          <div className="top">
              <h3>Student Queries</h3>
              <img className="dot" src={iconsImgs.dots} alt="" />
          </div>
          <StudentTable/>
        </div>
      </div>

      <CourseTable />
    </div>
  );
};

export default ContentMain;