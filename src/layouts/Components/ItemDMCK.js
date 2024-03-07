import { useState } from "react";
export const ItemDMCK = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{width:"24%"}} className="rounded-3 my-3 bg-white">
      <div className={`rounded-circle border border-5 mx-auto mt-3 ${isHovered ? "bg-info text-white" : ""}`} style={{ width: "115px", height: "115px"}}>
        <img width={"80px"} className="mt-3 ms-3" src="https://tamanhhospital.vn/wp-content/uploads/2023/12/khoa-rang-ham-mat.png"/>
      </div>
      <h6 className="text-center my-4 mt-3 mb-5">KHOA RĂNG HÀM MẶT</h6>
    </div>
  );
}