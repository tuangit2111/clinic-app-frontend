import { ItemTienNghi } from "./ItemTienNghi";

export const TienNghi = () => {
  return (
    <div style={{ marginTop: "160px" }}>
      <h1 className="text-center">TIỆN NGHI</h1>
      <div className="p-5">
        <p>
          <div className="d-flex">
            <img className="my-auto" width={"30px"} height={"30px"} src="https://tamanhhospital.vn/icon/i_thietbi.jpg" />
            <a class="btn flex-fill text-start py-auto" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">TRANG THIẾT BỊ</a>
          </div>
          <hr className="my-0" />
        </p>
        <div class="collapse multi-collapse" id="multiCollapseExample1">
          <div class="card card-body bg-light border-0 p-0">
            <div className="d-flex justify-content-end mt-3">
              <select style={{ width: "160px", height: "30px" }} className="me-2 border-0 bg-white">
                <option>ĐỊA ĐIỂM</option>
              </select>
              <select style={{ width: "160px", height: "30px" }} className="me-2 border-0 bg-white">
                <option>CHUYÊN KHOA</option>
              </select>
              <select style={{ width: "160px", height: "30px" }} className="border-0 bg-white">
                <option>DỊCH VỤ</option>
              </select>
            </div>
            <div className="d-flex mt-3">
              <div style={{ width: "70%" }} className="me-1">
                <ItemTienNghi img="https://tamanhhospital.vn/wp-content/uploads/2023/08/thiet-bi-robot-modus-v-synaptive.jpg" title="Hệ thống Robot Modus V Synaptive duy nhất tại Việt Nam" caption="Hệ thống Robot Modus V Synaptive được sử dụng trong mổ não duy nhất tại Việt Nam hiện nay. Trên thế giới hiện chỉ mới có 10 nước sử dụng robot này. Sự ra đời của robot mổ não thế hệ mới Modus V Synaptive là cuộc cách mạng trong ngành phẫu thuật thần kinh - sọ não khi mang lại hiệu quả điều trị tối ưu với các ưu điểm vượt trội mà các phương pháp mổ não kinh điển (như định vị Navigation, kính vi phẫu… ) không có.
                    Thông qua robot, bác sĩ có thể nhìn thấy toàn diện không gian, tổ chức não, đặc biệt thấy rõ các bó sợi thần kinh, các mô não lành xung quanh khối u, vùng tổn thương não cả trước, trong và sau mổ trên cùng một hình ảnh nhờ khả năng hòa hình (merge) từ nhiều nguồn khác nhau như MRI, DTI, CT, DSA.... Từ đó, robot cho phép mổ mô phỏng 3D trước khi mổ chính thức - đây là sự độc nhất mà trước đây chưa có máy móc mổ não kinh điển nào làm được. Robot còn hỗ trợ giám sát trong quá trình mổ nhằm đảm bảo bác sĩ tuân thủ đường mổ đã xác lập khi mổ mô phỏng. Tất cả những điều này mang đến hiệu quả vượt trội, giúp người bệnh phục hồi nhanh.
                    Robot còn có khả năng nổi bật cho phép bác sĩ mổ não khi bệnh nhân tỉnh và giao tiếp, áp dụng trong phẫu thuật xuất huyết não hoặc mổ vùng não chức năng vận động, ngôn ngữ... Bác sĩ có thể giao tiếp, yêu cầu người bệnh thao tác khi cần để kiểm tra, đảm bảo không làm tổn thương các dây thần kinh hay mô não lành tương ứng."/>
              </div>
              <div style={{ width: "30%" }}>
                <div className="d-flex">
                  <div className="w-50 me-1">
                    <ItemTienNghi img="https://tamanhhospital.vn/wp-content/uploads/2020/12/He-thong-phau-thuat-robot.jpg"
                      title="Hệ thống phẫu thuật robot"
                      caption="BVĐK Tâm Anh đầu tư phòng mổ Hybrid vô khuẩn hiện đại nhất hiện nay kết hợp công nghệ phẫu thuật..." />
                  </div>
                  <div className="w-50">
                    <ItemTienNghi
                      img="https://tamanhhospital.vn/wp-content/uploads/2020/12/He-thong-chu-mri-the-he-moi.jpg"
                      title="Hệ thống chụp MRI thế hệ mới" 
                      caption="MAGNETOM Amira BioMatrix (Siemens - Đức) là hệ thống chụp Cộng hưởng từ (MRI) đa lát cắt đầu tiên..." 
                    />
                  </div>
                </div>
                <div>
                  <ItemTienNghi
                    img="https://tamanhhospital.vn/wp-content/uploads/2020/12/He-thong-nuoi-cay-phoi-ung-dung-ai.jpg"
                    title="Hệ thống nuôi cấy phôi ứng dụng trí tuệ nhân tạo"
                    caption="Tủ nuôi cấy phôi Timelapse Geri®️+ kết hợp trí tuệ nhân tạo AI (với phần mềm đánh giá phôi tự động Eeva) được trang bị kính hiển vi riêng biệt, camera độ phân giải cao 2K cho hình ảnh, video sống động về quá trình phát triển phôi. Từ đó, đánh giá chính xác khả năng và chất lượng làm tổ của phôi thai qua hình thái và động học, không cần đem phôi ra môi trường bên ngoài, tăng tỷ lệ IVF thành công."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}