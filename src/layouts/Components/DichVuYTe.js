import { ItemDVYT } from "./ItemDVYT";

export const DichVuYTe = () => {
  return(
    <div style={{marginTop:"160px"}} className="bg-light">
      <img width={"100%"} src='https://tamanhhospital.vn/wp-content/uploads/2021/02/dich-vu-dac-biet-mobile.jpg'/>
      <h1 className="text-center bg-white py-3">DỊCH VỤ ĐẶC BIỆT</h1>
      <div className="p-4">
        <div className="d-flex justify-content-between p-3">
          <ItemDVYT/>
          <ItemDVYT/>
          <ItemDVYT/>
          <ItemDVYT/>
        </div>
        <div className="d-flex justify-content-between p-3">
          <ItemDVYT/>
          <ItemDVYT/>
          <ItemDVYT/>
          <ItemDVYT/>
        </div>
      </div>
    </div>
  );
}