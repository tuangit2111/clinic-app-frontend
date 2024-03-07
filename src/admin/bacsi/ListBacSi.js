import { useState, useEffect } from "react";

import { listChuyenKhoa } from "../../services/ChuyenKhoaService";
import { ItemList } from "./ItemList";

export const ListBacSi = () => {
  
  const [chuyenkhoa, setChuyenKhoa] = useState([]);
  const [slchuyenkhoa, setSLChuyenKhoa] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  
  useEffect(() => {
    listChuyenKhoa().then((response) => {
      setChuyenKhoa(response.data);
    }).catch(error => {
      console.error(error);
    });
  }, []);
  const handleChuyenKhoaChange = (e) => {
    setSLChuyenKhoa(e.target.value);
    setPageNumber(0);
  }
  const handlePageNumberChange = (num) => {
    setPageNumber(num);
  }
  return (
    <div style={{ marginTop: "160px" }} className="p-5">
      <div className="d-flex justify-content-between">
        <h4>Danh sách bác sĩ</h4>
        <select onChange={handleChuyenKhoaChange}>
          <option>Chọn chuyên khoa</option>
          {chuyenkhoa.map((item) => (
            <option key={item.id} value={item.id}>{item.name}</option>
          ))}
        </select>
      </div>
      <ItemList id={slchuyenkhoa} pageNumber={pageNumber} handlePageNumberChange={handlePageNumberChange}/>
    </div>
  );
}