import { useEffect, useState } from 'react';
import { listChuyenKhoa } from '../../services/ChuyenKhoaService';
import { ItemLKB } from './ItemLKB';
export const LichKhamBenh = () => {
  const [chuyenKhoa, setChuyenKhoa] = useState([]);
  useEffect(() => {
    listChuyenKhoa().then((response) => {
      setChuyenKhoa(response.data);
    }).catch(error => {
      console.error(error);
    })
  }, []);
  return (
    <div style={{marginTop:"160px"}} className='p-3'>
      <h4 className='text-center'>LỊCH KHÁM KHOA KHÁM BỆNH</h4>
      <h4 className='text-center'>BỆNH VIỆN ĐA KHOA TÂM ANH</h4>
      <h5 className='text-center'>Tuần từ 26/02/2024 đến 02/3/2024</h5>
      <table className='table table-bordered text-center'>
        <thead>
          <tr>
            <th>CHUYÊN KHOA</th>
            <th>Thứ 2</th>
            <th>Thứ 3</th>
            <th>Thứ 4</th>
            <th>Thứ 5</th>
            <th>Thứ 6</th>
            <th>Thứ 7</th>
          </tr>
        </thead>
        <tbody>
        {chuyenKhoa.map((item) => (
          <tr key={item.id}>
            <td className='align-middle'>{item.name}</td>
            <td>
              <ItemLKB idCK={item.id} nlv='26-02-2024'/>
            </td>
            <td>
              <ItemLKB idCK={item.id} nlv='27-02-2024'/>
            </td>
            <td>
              <ItemLKB idCK={item.id} nlv='28-02-2024'/>
            </td>
            <td>
              <ItemLKB idCK={item.id} nlv='29-02-2024'/>
            </td>
            <td>
              <ItemLKB idCK={item.id} nlv='01-03-2024'/>
            </td>
            <td>
              <ItemLKB idCK={item.id} nlv='02-03-2024'/>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}