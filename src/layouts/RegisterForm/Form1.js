import { useEffect, useState } from 'react';
import { listChuyenKhoa } from '../../services/ChuyenKhoaService';
import { listBacSi } from '../../services/BacSiService';
import { PopupDate } from './PopupDate';
import { findNLV } from '../../services/LichLamViecService';

export const Form1 = (props) => {
  const [slchuyenkhoa, setSlChuyenKhoa] = useState();
  const [slbacsi, setSlBacSi] = useState();
  const [thoigian, setThoiGian] = useState("");
  const [mota, setMoTa] = useState();
  const [selected, setSelected] = useState(0);
  const [serviceSelected, setServiceSelected] = useState(0);
  const [chuyenKhoa, setChuyenKhoa] = useState([]);
  const [bacSi, setBacSi] = useState([]);
  const [nlv, setNLV] = useState([]);

  const handleBacSi = (e) => {
    setSlBacSi(e.target.value);
    findNLV(e.target.value).then((response) => {
      setNLV(response.data);
    }).catch(error => {
      console.error(error);
    })
  }
  const handleThoiGianKham = (thoigiankham) => {
    setThoiGian(thoigiankham);
  }
  const handleMoTa = (e) => {
    setMoTa(e.target.value);
  }
  useEffect(() => {
    listChuyenKhoa().then((response) => {
      setChuyenKhoa(response.data);
    }).catch(error => {
      console.error(error);
    })
  }, []);
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
    setSlChuyenKhoa(selectedChuyenKhoaId);
    getBacSiByChuyenKhoa(selectedChuyenKhoaId);
  };

  const savePhieuDangKy = () => {
    const diadiemkham = selected === 1 ? "Hà Nội" : "TP.HCM";
    const dichvukham = serviceSelected === 1 ? "Khám trong giờ" : (serviceSelected === 2 ? "Khám ngoài giờ" : "Khám online");
    const phieuDangKy = { diadiemkham, dichvukham, slchuyenkhoa, slbacsi, thoigian, mota };
    props.onNext();
    props.handlePhieuDangKy(phieuDangKy);
  }
  return (
    <form>
      <div>
        <label>Chọn địa điểm khám</label>
        <div className='d-flex bg-white rounded'>
          <div className={`w-50 text-center border-end p-2 hover ${selected === 1 ? 'bg-primary text-white' : ''}`} onClick={() => setSelected(1)}>
            <span>BVĐK Tâm Anh Hà Nội</span>
          </div>
          <div className={`w-50 text-center p-2 hover ${selected === 2 ? 'bg-primary text-white' : ''}`} onClick={() => setSelected(2)}>
            <span>BVĐK Tâm Anh TP.HCM</span>
          </div>
        </div>
      </div>
      <div>
        <label>Chọn loại dịch vụ khám</label>
        <div className='d-flex bg-white rounded'>
          <div className={`text-center flex-fill border-end p-2 hover ${serviceSelected === 1 ? 'bg-primary text-white' : ''}`} onClick={() => setServiceSelected(1)}>
            <span>Khám trong giờ</span>
          </div>
          <div className={`text-center flex-fill border-end p-2 hover ${serviceSelected === 2 ? 'bg-primary text-white' : ''}`} onClick={() => setServiceSelected(2)}>
            <span>Khám ngoài giờ</span>
          </div>
          <div className={`text-center flex-fill p-2 hover ${serviceSelected === 3 ? 'bg-primary text-white' : ''}`} onClick={() => setServiceSelected(3)}>
            <span>Khám online</span>
          </div>
        </div>
      </div>
      <div style={{ cursor: selected === 0 ? 'not-allowed' : '', opacity: selected === 0 ? '0.2' : '1' }}>
        <div className='d-flex'>
          <div className='w-50'>
            <label style={{ cursor: selected === 0 ? 'not-allowed' : '' }}>Chọn chuyên khoa</label>
            <div className='pe-2' style={{ height: "40px" }}>
              <select style={{ cursor: selected === 0 ? 'not-allowed' : '' }} className='w-100 h-100 rounded border-0' onChange={handleChuyenKhoaChange}>
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
            <label style={{ cursor: selected === 0 ? 'not-allowed' : '' }}>Chọn bác sĩ</label>
            <div style={{ height: "40px" }}>
              <select style={{ cursor: selected === 0 ? 'not-allowed' : '' }} className='w-100 h-100 rounded border-0' onChange={handleBacSi}>
                <option>Chọn bác sĩ</option>
                {bacSi.map((item) => (
                  <option key={item.id} value={item.id}>{item.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div>
          <label style={{ cursor: selected === 0 ? 'not-allowed' : '' }}>Chọn ngày - khung giờ muốn khám</label>
          <PopupDate selected={selected} nlv={nlv} handleThoiGianKham={handleThoiGianKham}/>
        </div>
      </div>
      <div>
        <label>Nhập vấn đề sức khỏe cần khám</label>
        <div>
          <textarea rows={4} placeholder='Nhập tình trạng sức khỏe của bạn, câu hỏi dành cho bác sĩ và các vấn đề sức khỏe cần khám' className='w-100 rounded border-0' value={mota} onChange={handleMoTa} />
        </div>
      </div>
      <a className='w-100 border-0 btn btn-primary mt-3' onClick={savePhieuDangKy}>TIẾP THEO</a>
    </form>
  );
}