import { useNavigate } from "react-router-dom";
export const Menu = () => {
  const navigator = useNavigate();
  const danhSachChuyenKhoa = () => {
    navigator('/danh-sach-chuyen-khoa');
  }
  const gioiThieu = () => {
    navigator('');
  }
  const chuyenGiaBacSi = () => {
    navigator('/chuyen-gia-bac-si')
  }
  const dichVuYTe = () => {
    navigator('/dich-vu-y-te');
  }
  const tienNghi = () => {
    navigator('/tien-nghi');
  }
  const lichKhamBenh = () => {
    navigator('/lich-kham-benh');
  }
  return (
    <div className="d-none d-lg-block bg-white">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item" key={1}><button className="nav-link px-2" onClick={gioiThieu}>GIỚI THIỆU</button></li>
        <li className="nav-item" key={2}><button className="nav-link px-2" onClick={danhSachChuyenKhoa}>CHUYÊN KHOA</button></li>
        <li className="nav-item" key={3}><button className="nav-link px-2" onClick={chuyenGiaBacSi}>CHUYÊN GIA - BÁC SĨ</button></li>
        <li className="nav-item" key={4}><button className="nav-link px-2" onClick={dichVuYTe}>DỊCH VỤ ĐẶC BIỆT</button></li>
        <li className="nav-item" key={5}><button className="nav-link px-2" onClick={tienNghi}>TIỆN NGHI</button></li>
        <li className="nav-item" key={6}><button className="nav-link px-2" onClick={lichKhamBenh}>LỊCH KHÁM BỆNH</button></li>
        <li className="nav-item" key={7}><button className="nav-link px-2">TIN TỨC</button></li>
        <li className="nav-item" key={8}><button className="nav-link px-2">LIÊN HỆ</button></li>
      </ul>
    </div>
  );
}