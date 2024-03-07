export const ItemList = (props) => {
  return (
    <table className='table table-border'>
      <tr>
        <th>ID</th>
        <th>Họ và tên</th>
        <th>Địa điểm khám</th>
        <th>Dịch vụ khám</th>
        <th>Thời gian khám</th>
        <th>Trạng thái</th>
        <th></th>
        <th></th>
      </tr>
      {props.pdk.map((item) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.hovaten}</td>
          <td>{item.diadiemkham}</td>
          <td>{item.dichvukham}</td>
          <td>{item.thoigiankham}</td>
          <td>{item.trangthai}</td>
          <td><button className='btn btn-primary py-1 mt-2'>Đã tới</button></td>
          <td><button className='btn btn-primary py-1 mt-2'>Không tới</button></td>
        </tr>
      ))}
    </table>
  );
}