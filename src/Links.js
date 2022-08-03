import { Outlet, Link } from "react-router-dom";
import './component/css/style.css'
function Links(){
    return (
        <>

          <div className="navbar">
            <ul>
                <li><Link style={{ textDecoration: 'none',color:"black" }} to="/">หน้าแรก</Link></li>
                <li><Link style={{ textDecoration: 'none',color:"black" }} to="/Botton">งาน React ที่ 1 (ปุ่ม)</Link></li>
                <li><Link style={{ textDecoration: 'none',color:"black" }} to="/Name">งาน React ที่ 2 (สุ่มชื่อ)</Link></li>

            </ul>
          </div>
    
          <Outlet />
        </>
      );
}


export default Links;