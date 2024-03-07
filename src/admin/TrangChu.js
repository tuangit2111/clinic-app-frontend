import { useEffect, useState } from 'react';
import { listChuyenKhoa } from '../services/ChuyenKhoaService';
import { listBacSi } from '../services/BacSiService';
import { createLichLamViec } from '../services/LichLamViecService';
export const TrangChu = () => {
  const [slbacsi, setSlBacSi] = useState();
  const [tgk, setThoiGian] = useState("");
  const [ghiChu, setGhiChu] = useState();
  const [chuyenKhoa, setChuyenKhoa] = useState([]);
  const [bacSi, setBacSi] = useState([]);

  const handleBacSi = (e) => {
    setSlBacSi(e.target.value);
  }
  const handleThoiGian = (e) => {
    setThoiGian(e.target.value);
  }
  const handleGhiChu = (e) => {
    setGhiChu(e.target.value);
  }
  useEffect(() => {
    listChuyenKhoa().then((response) => {
      setChuyenKhoa(response.data);
    }).catch(error => {
      console.error(error);
    })
  }, [])

  const getBacSiByChuyenKhoa = (id) => {
    listBacSi(id)
      .then((response) => {
        setBacSi(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleChuyenKhoaChange = (event) => {
    const selectedChuyenKhoaId = event.target.value;
    getBacSiByChuyenKhoa(selectedChuyenKhoaId);
  };

  const saveLichLamViec = () => {
    const [year, month, day] = tgk.split("-");
    const thoigian = `${day}-${month}-${year}`;
    const lichLamViec = { 
      bacsi_id: slbacsi, 
      ngaylamviec: thoigian,
      ghichu: ghiChu };
    createLichLamViec(lichLamViec);
  }
  return (
    <div style={{marginTop:"160px"}}>
      <form>
        <div>
          <div className='d-flex'>
            <div className='w-50'>
              <label>Chọn chuyên khoa</label>
              <div className='pe-2' style={{ height: "40px" }}>
                <select className='w-100 h-100 rounded border-0' onChange={handleChuyenKhoaChange}>
                  <option>Chọn chuyên khoa</option>
                  {chuyenKhoa.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className='w-50 ps-2'>
              <label>Chọn bác sĩ</label>
              <div style={{ height: "40px" }}>
                <select className='w-100 h-100 rounded border-0' onChange={handleBacSi}>
                  <option>Chọn bác sĩ</option>
                  {bacSi.map((item) => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div>
            <label>Chọn ngày làm việc</label>
            <div style={{ height: "40px" }}>
              <input className='w-100 h-100 rounded border-0' type='date' value={tgk} onChange={handleThoiGian} />
            </div>
          </div>
        </div>
        <div>
          <label>Nhập ghi chú</label>
          <div>
            <textarea rows={4} placeholder='Ghi chú' className='w-100 rounded border-0' value={ghiChu} onChange={handleGhiChu} />
          </div>
        </div>
        <button type='submit' className='w-100 border-0 btn btn-primary mt-3' onClick={saveLichLamViec}>THÊM</button>
      </form>
    </div>
  );
}