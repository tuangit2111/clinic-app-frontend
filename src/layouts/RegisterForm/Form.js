import { useState, useEffect } from "react";
import { Form1 } from "./Form1";
import { Form2 } from "./Form2";


export const Form = () => {
  
  const [phieuDangKy, setPhieuDangKy] = useState({
    diadiemkham : "",
    dichvukham : "",
    chuyenkhoa_id : "",
    bacsi_id : "",
    thoigiankham : "",
    motatinhtrang : ""
  });
  const [showForm2, setShowForm2] = useState(false);
  const handleNext = () => {
    setShowForm2(true);
  };
  const handleBack = () => {
    setShowForm2(false);
  };
  
  const handlePhieuDangKy = (value) => {
    setPhieuDangKy((prevPhieuDangKy) => ({
      ...prevPhieuDangKy,
      diadiemkham: value.diadiemkham,
      dichvukham: value.dichvukham,
      chuyenkhoa_id: value.slchuyenkhoa,
      bacsi_id: value.slbacsi,
      thoigiankham: value.thoigian,
      motatinhtrang: value.mota
    }));
  };
  
  return (
    <div className="mx-auto" style={{ width: "50%", marginTop: "160px" }}>
      <h1 className="text-center fs-2">ĐĂNG KÝ KHÁM BỆNH</h1>
      <p>Quý khách hàng có nhu cầu đặt hẹn khám tại <a className="link-offset-2 link-underline link-underline-opacity-0">Hệ thống Bệnh viện Đa khoa Tâm Anh</a>, xin vui lòng thực hiện theo hướng dẫn:</p>
      <ul>
        <li>
          Đặt hẹn bằng cách gọi tổng đài Chăm sóc khách hàng tại số <strong>0287 102 6789 - 093 180 6858</strong> (Bệnh viện Đa khoa Tâm Anh TPHCM) hoặc <strong>024 3872 3872 - 024 7106 6858</strong> (Bệnh viện Đa khoa Tâm Anh Hà Nội)
        </li>
        <li>
          Đặt hẹn trực tuyến bằng cách điền thông tin vào mẫu bên dưới
        </li>
        <li>
          Xin lưu ý, trong các trường hợp khẩn cấp, quý khách vui lòng đến ngay cơ sở y tế gần nhất hoặc đến trực tiếp Hệ thống bệnh viện Đa khoa Tâm Anh
        </li>
      </ul>
      <div>
        <h6 className='bg-primary text-white p-3 mb-0'>ĐĂNG KÝ KHÁM BỆNH</h6>
        <div className='bg-info p-3'>
          {showForm2? <Form2 onBack={handleBack} phieuDangKy={phieuDangKy}/> : <Form1 onNext={handleNext} handlePhieuDangKy={handlePhieuDangKy}/>}
        </div>
      </div>
    </div>
  );
}