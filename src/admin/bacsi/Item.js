import { useEffect, useState } from "react";
import { nameCK } from "../../services/ChuyenKhoaService";

export const Item = (props) => {
  const [chuyenkhoa, setChuyenKhoa] = useState();
  useEffect(() => {
    nameCK(props.id).then((response) => {
      setChuyenKhoa(response.data);
    }).catch(error => {
      console.error(error);
    });
  }, [])
  return (
    <td>{chuyenkhoa}</td>
  );
}