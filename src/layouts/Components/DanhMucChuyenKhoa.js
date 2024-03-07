import { ItemDMCK } from "./ItemDMCK";

export const DanhMucChuyenKhoa = () => {
  return (
    <div style={{marginTop:"100px"}} className="py-5 bg-light">
      <h1 className="text-center bg-white pt-4" style={{height:"90px"}}>DANH SÁCH CHUYÊN KHOA</h1>
      <div className="px-5 py-3">
        <div className="d-flex justify-content-between">
          <ItemDMCK/>
          <ItemDMCK/>
          <ItemDMCK/>
          <ItemDMCK/>
        </div>
        <div className="d-flex justify-content-between">
          <ItemDMCK/>
          <ItemDMCK/>
          <ItemDMCK/>
          <ItemDMCK/>
        </div>
        <div className="d-flex justify-content-between">
          <ItemDMCK/>
          <ItemDMCK/>
          <ItemDMCK/>
          <ItemDMCK/>
        </div>
      </div>
    </div>
  );
}