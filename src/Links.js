import { Outlet, Link } from "react-router-dom";
import './component/css/style.css'
function Links(){
    return (
        <>
          {/* <nav>
            <ul>
              <li>
                <Link to="/">หน้าแรก</Link>
              </li>
              <li>
                <Link to="/Name">Blogs</Link>
              </li>
              <li>
                <Link to="/Botton">Botton</Link>
              </li>
            </ul>
          </nav> */}

          <div className="navbar">
            <ul>
                <li><Link style={{ textDecoration: 'none',color:"black" }} to="/">หน้าแรก</Link></li>
                <li><Link style={{ textDecoration: 'none',color:"black" }} to="/Name">งาน React ที่ 1 (สุ่มชื่อ)</Link></li>
                <li><Link style={{ textDecoration: 'none',color:"black" }} to="/Botton">งาน React ที่ 2 (ปุ่ม)</Link></li>
            </ul>
          </div>
    
          <Outlet />
        </>
      );
}


export default Links;