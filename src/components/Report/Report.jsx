import { iconsImgs } from "../../utils/images";
import "./Report.css";
import { reportData } from "../../data/data";

const Report = () => {
  return (
    <div className=" grid-common visitors ">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">Visitors</h3>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.chart } />
            </button>
        </div>
        <div className="grid-c3-content">
            <div className="grid-chart">
                <div className="chart-vert-value">
                    <span>80</span>
                    <span>70</span>
                    <span>60</span>
                    <span>50</span>
                    <span>40</span>
                    <span>30</span>
                    <span>20</span>
                    <span>10</span>
                    <span>0</span>
                </div>
                {
                    reportData.map((report) => (
                        <div className="grid-chart-bar" key={report.id}>
                            <div className="bar-wrapper">
                                <div className="bar-item1" style={{ height: `${report.value1}`}}></div>
                            </div>
                            <span className="grid-hortz-value">{report.month}</span>
                        </div>
                    ))
                }
                
            </div>
        </div>
    </div>
  )
}

export default Report
