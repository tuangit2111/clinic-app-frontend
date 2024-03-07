import { ItemService } from "./ItemService";

export const Menu = () => {
  return (
    <div style={{marginTop:"100px"}} className="py-5 bg-light">
      <h1 className="text-center bg-white pt-4" style={{height:"90px"}}>DÀNH CHO KHÁCH HÀNG</h1>
      <div className="px-5 py-3">
        <div className="d-flex justify-content-between">
          <ItemService/>
          <ItemService/>
          <ItemService/>
        </div>
        <div className="d-flex justify-content-between">
          <ItemService/>
          <ItemService/>
          <ItemService/>
        </div>
        <div className="d-flex justify-content-between">
          <ItemService/>
          <ItemService/>
          <ItemService/>
        </div>
      </div>
    </div>
  );
}