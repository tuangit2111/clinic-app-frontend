import { Nav } from "./layouts/NavbarAndFooter/Nav";
import { Form } from "./layouts/RegisterForm/Form";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Menu } from "./layouts/Customer/Menu";
import { DanhMucChuyenKhoa } from "./layouts/Components/DanhMucChuyenKhoa";
import { GioiThieu } from "./layouts/Components/GioiThieu";
import { ChuyenGiaBacSi } from "./layouts/Components/ChuyenGiaBacSi";
import { DichVuYTe } from "./layouts/Components/DichVuYTe";
import { TienNghi } from "./layouts/Components/TienNghi";
import './App.css';
import { TrangChu } from "./admin/TrangChu";
import { LichKhamBenh } from "./layouts/Components/LichKhamBenh";
import { ListPhieuDangKy } from "./admin/ListPhieuDangKy";
import { ListBacSi } from "./admin/bacsi/ListBacSi";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/dang-ky-kham" element={<Form/>}></Route>
          <Route path="/danh-cho-khach-hang" element={<Menu/>}></Route>
          <Route path="/danh-sach-chuyen-khoa" element={<DanhMucChuyenKhoa/>}></Route>
          <Route path="" element={<GioiThieu/>}></Route>
          <Route path="/chuyen-gia-bac-si" element={<ChuyenGiaBacSi/>}></Route>
          <Route path="/dich-vu-y-te" element={<DichVuYTe/>}></Route>
          <Route path="/tien-nghi" element={<TienNghi/>}></Route>
          <Route path="/admin" element={<TrangChu/>}></Route>
          <Route path="/lich-kham-benh" element={<LichKhamBenh/>}></Route>
          <Route path="/admin/danh-sach-dat-lich" element={<ListPhieuDangKy/>}></Route>
          <Route path="/admin/danh-sach-bac-si" element={<ListBacSi/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}