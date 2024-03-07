import ReactPlayer from 'react-player/youtube';
import { ItemGioiThieu } from './ItemGioiThieu';
export const GioiThieu = () => {
  return (
    <div style={{marginTop:"150px"}}>
      <div>
        <img width={"100%"} src="https://tamanhhospital.vn/wp-content/uploads/2020/12/banner-trang-chu-pc-1.jpg"/>
      </div>
      <h1 className="text-center py-4">VỀ CHÚNG TÔI</h1>
      <div>
        <ReactPlayer className="mx-auto" url={"https://youtu.be/Ef83M9iiJh0"} />
      </div>
      <div style={{padding:"70px"}}>
        <h5>SỨ MỆNH - TẦM NHÌN</h5>
        <p>Dựa trên nền tảng truyền thống, các giá trị lớn của ngành y Việt Nam từ xưa đến nay, đồng thời 
          mong muốn mang lại cho người dân dịch vụ khám chữa bệnh chất lượng cao về y khoa, tiếp cận phương
          pháp, kỹ thuật và phác đồ hiện đại, được hưởng các dịch vụ cao cấp như ở nước ngoài, bệnh viện Đa 
          Khoa Tâm Anh đã được thành lập. Ngay từ khi mới bắt đầu đi vào hoạt động, bệnh viện Tâm Anh đã chú
          trọng việc xây dựng đội ngũ chuyên gia bác sĩ giỏi về chuyên môn, nhiều kinh nghiệm, bệnh viện đã
          quy tụ được đội ngũ chuyên gia hàng đầu từ nhiều lĩnh vực như nam khoa tiết niệu, sản phụ khoa, 
          nhi khoa, hô hấp, cơ xương khớp, hỗ trợ sinh sản, tai mũi họng, thần kinh…</p>
        <ItemGioiThieu/>
        <ItemGioiThieu/>
        <ItemGioiThieu/>
        <ItemGioiThieu/>
        <ItemGioiThieu/>
        <ItemGioiThieu/>
        <ItemGioiThieu/>
        <ItemGioiThieu/>
        <ItemGioiThieu/>
      </div>
    </div>
  );
}