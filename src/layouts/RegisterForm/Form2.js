import { useEffect,useState } from "react";
import { createPhieuDangKy } from "../../services/PhieuDangKyService";
import { sendMail } from "../../services/EmailService";
import { useNavigate } from "react-router-dom";
import { listHuyen, listProvince, listXa } from "../../services/AddressService";
export const Form2 = (props) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(0);
  const [hovaten, setHoVaTen] = useState("");
  const [sodienthoai, setSoDienThoai] = useState("");
  const [gmail, setEmail] = useState("");
  const [ngaysinhx, setNgaySinh] = useState("");
  const [quoctich, setQuocTich] = useState("");
  const [tinh, setTinh] = useState("");
  const [quan, setQuan] = useState("");
  const [xa, setXa] = useState("");
  const [soNha, setSoNha] = useState("");
  const [provinces, setProvinces] = useState([]);
  const [huyen, setHuyen] = useState([]);
  const [xan, setXan] = useState([]);

  useEffect(() => {
    listProvince().then((response) => {
      setProvinces(response.data.results);
    }).catch(error => {
      console.error(error);
    })
  }, []);

  const getHuyen = (id) => {
    listHuyen(id)
      .then((response) => {
        setHuyen(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getXa = (id) => {
    listXa(id)
      .then((response) => {
        setXan(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSoDienThoai = (e) => {
    setSoDienThoai(e.target.value);
  }
  const handleNgaySinh = (e) => {
    setNgaySinh(e.target.value);
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handleQuocTich = (e) => {
    setQuocTich(e.target.value);
  }
  const handleTinh = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const provinceName = selectedOption.text;
    
    setTinh(provinceName);
    const idd = e.target.value;
    getHuyen(idd);
  }
  const handleQuan = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const quanName = selectedOption.text;
    
    setQuan(quanName);
    const idd = e.target.value;
    getXa(idd);
  }
  const handleXa = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const xaName = selectedOption.text;
    
    setXa(xaName);
  }
  const handleSoNha = (e) => {
    setSoNha(e.target.value);
  }
  const handleHoVaTen = (e) => {
    setHoVaTen(e.target.value);
  }
  const saveDB = () => {
    const gioitinh = selected === 1 ? "Nam" : "Nữ";
    const diachi = soNha + " " + xa + " " + quan + " " + tinh;
    const [year, month, day] = ngaysinhx.split("-");
    const ngaysinh = `${day}-${month}-${year}`;
    const trangthai = "Chờ khám";
    const khachhang = {hovaten, sodienthoai, gmail, ngaysinh, gioitinh, quoctich, diachi, trangthai};
    const phieudangky = props.phieuDangKy;
    const pdk = {
      ...khachhang,
      ...phieudangky
    };
    const recipient = gmail;
    const msgBody = `Chúng tôi đã ghi nhận quý khách đặt lịch khám bệnh thành công.
    Họ và tên: ${hovaten}
    Ngày khám: ${props.phieuDangKy.thoigiankham}
    Hẹn gặp quý khách tại khung giờ trên tại Bệnh viện Đa khoa Tâm Anh
    Địa chỉ: 108 Phố Hoàng Như Tiếp, P.Bồ Đề, Q.Long Biên`;
    const subject = "Thông báo đặt lịch khám thành công";
    const mail = {recipient, msgBody, subject};
    createPhieuDangKy(pdk);
    sendMail(mail);
    navigate('/danh-cho-khach-hang');
  }
  return (
    <form>
      <div>
        <p className="text-white">Đối với các khách hàng lần đầu đến khám và sử dụng dịch vụ tại Hệ thống Bệnh viện Đa khoa Tâm Anh, 
          xin vui lòng cung cấp đầy đủ các thông tin của người đến khám theo mẫu bên dưới. Việc cung cấp đầy đủ
          thông tin sẽ giúp Quý khách tiết kiệm được thời gian làm hồ sơ khách hàng tại bệnh viện.</p>
      </div>
      <div className='d-flex'>
        <div className='w-50'>
          <label>Số điện thoại</label>
          <div className='pe-2' style={{ height: "40px" }}>
            <input className='w-100 h-100 rounded border-0' type="text" placeholder="Nhập số điện thoại" value={sodienthoai} onChange={handleSoDienThoai}/>
          </div>
        </div>
        <div className='w-50 ps-2'>
          <label>Ngày sinh</label>
          <div style={{ height: "40px" }}>
            <input className='w-100 h-100 rounded border-0' type="date" value={ngaysinhx} onChange={handleNgaySinh}/>
          </div>
        </div>
      </div>
      <div className='mt-2'>
        <label>Email</label>
        <div className='pe-2' style={{ height: "40px" }}>
          <input className='w-100 h-100 rounded border-0' type="text" placeholder="Nhập địa chỉ email" value={gmail} onChange={handleEmail}/>
        </div>
      </div>
      <div className='mt-2'>
        <label>Họ và tên</label>
        <div className='pe-2' style={{ height: "40px" }}>
          <input className='w-100 h-100 rounded border-0' type="text" placeholder="Nhập họ và tên" value={hovaten} onChange={handleHoVaTen}/>
        </div>
      </div>
      <div className="d-flex mt-2">
        <div className="w-50 pe-2">
          <label>Giới tính</label>
          <div className='d-flex bg-white rounded'>
            <div className={`w-50 text-center border-end rounded-start p-2 hover ${selected === 1 ? 'bg-primary text-white' : ''}`} onClick={() => setSelected(1)}>
              <span>Nam</span>
            </div>
            <div className={`w-50 text-center rounded-end p-2 hover ${selected === 2 ? 'bg-primary text-white' : ''}`} onClick={() => setSelected(2)}>
              <span>Nữ</span>
            </div>
          </div>
        </div>
        <div className='w-50 ps-2'>
          <label>Quốc tịch</label>
          <div className='pe-2' style={{ height: "40px" }}>
            <select className='w-100 h-100 rounded border-0' value={quoctich} onChange={handleQuocTich}>
              <option value="Việt Nam">VIET NAM (Việt Nam)</option>
              <option value="Mỹ">USA (Mỹ)</option>
              <option value="Anh">ENGLAND (Anh)</option>
            </select>
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-between mt-2'>
        <div style={{width:"32%"}}>
          <label>Tỉnh thành</label>
          <div className='pe-2' style={{ height: "40px" }}>
            <select className='w-100 h-100 rounded border-0' value={tinh} onChange={handleTinh}>
              <option>Chọn tỉnh</option>
                {provinces.map((item) => (
                  <option key={item.province_id} value={item.province_id}>
                    {item.province_name}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div style={{width:"32%"}}>
          <label>Quận huyện</label>
          <div className='pe-2' style={{ height: "40px" }}>
            <select className='w-100 h-100 rounded border-0' value={quan} onChange={handleQuan}>
              <option>Chọn quận/huyện</option>
                {huyen.map((item) => (
                  <option key={item.district_id} value={item.district_id}>
                    {item.district_name}
                  </option>
              ))}
            </select>
          </div>
        </div>
        <div style={{width:"32%"}}>
          <label>Phường xã</label>
          <div className='pe-2' style={{ height: "40px" }}>
            <select className='w-100 h-100 rounded border-0' value={xa} onChange={handleXa}>
              <option>Chọn xã/phường</option>
                {xan.map((item) => (
                  <option key={item.ward_id} value={item.ward_id}>
                    {item.ward_name}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <label>Số nhà, tên đường</label>
        <div style={{ height: "40px" }}>
          <input className='w-100 h-100 rounded border-0' type="text" placeholder="Số nhà, tên đường" value={soNha} onChange={handleSoNha}/>
        </div>
      </div>
      <div className="d-flex justify-content-between mt-4">
        <div className="w-50 pe-2">
          <button type='submit' className='w-100 border-0 btn btn-light' onClick={props.onBack}>QUAY LẠI</button>
        </div>
        <div className="w-50 ps-2">
          <a className='w-100 border-0 btn btn-primary' onClick={saveDB}>ĐẶT HẸN</a>
        </div>
      </div>
    </form>
  );
}