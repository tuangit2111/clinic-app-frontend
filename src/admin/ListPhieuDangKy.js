import { useEffect, useState } from 'react';
import { listByThoiGianKham, listPhieuDangKy, listThoiGianKham } from '../services/PhieuDangKyService';
import { ItemList } from './ItemList';
export const ListPhieuDangKy = () => {
  const [pdk, setPDK] = useState([]);
  const [tgk, setTGK] = useState([]);
  const [tg, setTG] = useState([]);
  const [isSelect, setIsSelect] = useState(false);
  useEffect(() => {
    listPhieuDangKy().then((response) => {
      setPDK(response.data);
    }).catch(error => {
      console.error(error);
    });
    listThoiGianKham().then((response) => {
      setTGK(response.data);
    }).catch(error => {
      console.error(error);
    });
  }, []);

  const handleThoiGianChange = (e) => {
    listByThoiGianKham(e.target.value).then((response) => {
      setTG(response.data);
    }).catch(error => {
      console.error(error);
    });
    setIsSelect(true);
  }

  useEffect(() => {
    console.log(tg);
  }, [tg]);
  return (
    <div style={{marginTop:"110px"}} className='p-5'>
      <div className='d-flex justify-content-between'>
        <h4>Danh sách đặt lịch khám</h4>
        <select onChange={handleThoiGianChange}>
          <option>Chọn ngày</option>
          {tgk.map((item) => (
            <option key={item} value={item}>{item}
            </option>
          ))}
        </select>
      </div>
      <ItemList pdk={isSelect?tg:pdk}/>
    </div>
  );
}