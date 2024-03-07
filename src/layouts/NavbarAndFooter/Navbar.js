import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const navigator = useNavigate();
  const dangKyKham = () => {
    navigator('/dang-ky-kham');
  }
  const danhChoKhachHang = () => {
    navigator('/danh-cho-khach-hang');
  }
  return (
    <nav className="navbar navbar-expand-lg text-bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand ps-3" href="#"><img src="https://tamanhhospital.vn/wp-content/uploads/2023/05/logo-ta.png" width="135" height="82.7"/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item d-flex">
              <img width={"18px"} height={"24px"} className="mt-2" src="https://tamanhhospital.vn/wp-content/uploads/2020/11/i_customer.png"/>
              <button style={{color: "white"}} className="nav-link active" aria-current="page" onClick={danhChoKhachHang}>Dành cho khách hàng</button>
            </li>
            <li className="nav-item d-flex">
              <img width={"24px"} height={"24px"} className="mt-2" src="https://tamanhhospital.vn/wp-content/uploads/2020/11/i_faq.png"/>
              <button style={{color: "white"}} className="nav-link" >Hỏi đáp</button>
            </li>
            <li className="nav-item d-flex">
              <img width={"22px"} height={"24px"} className="mt-2" src="https://tamanhhospital.vn/wp-content/uploads/2020/11/i_calendar.png"/>
              <button style={{color: "white"}} className="nav-link" onClick={dangKyKham}>Đặt lịch khám</button>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button style={{color: "white"}} className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}