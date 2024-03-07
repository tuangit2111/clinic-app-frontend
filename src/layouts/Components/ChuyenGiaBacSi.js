import { ItemCGBS } from "./ItemCGBS";

export const ChuyenGiaBacSi = () => {
  return (
    <div style={{marginTop:"160px"}}>
      <img width={"100%"} src="https://tamanhhospital.vn/wp-content/uploads/2020/12/banner-chuyen-gia-bac-si-desk.jpg"/>
      <form className="d-flex mx-auto mt-3" role="search" style={{width:"200px"}}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      </form>
      <h1 className="text-center mt-3 mb-3">CHUYÊN GIA - BÁC SĨ</h1>
      <div className="d-flex justify-content-center">
        <button className="me-2 border-0 btn btn-primary">TOÀN HỆ THỐNG</button>
        <button className="me-2 border-0 btn btn-primary">HÀ NỘI</button>
        <button className="border-0 btn btn-primary">TP.HCM</button>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <select className="me-2" style={{width:"220px", height:"30px"}}>
          <option disabled selected>CHUYÊN KHOA</option>
        </select>
        <select className="me-2" style={{width:"220px"}}>
          <option disabled selected>CHỨC VỤ</option>
        </select>
        <select className="me-2" style={{width:"220px"}}>
          <option disabled selected>HỌC HÀM</option>
        </select>
        <select style={{width:"220px"}}>
          <option disabled selected>HỌC VỊ</option>
        </select>
      </div>
      <ItemCGBS/>
      <ItemCGBS/>
      <ItemCGBS/>
      <ItemCGBS/>
      <ItemCGBS/>
      <ItemCGBS/>
      <ItemCGBS/>
      <ItemCGBS/>
      <ItemCGBS/>
      <ItemCGBS/>
    </div>
  );
}