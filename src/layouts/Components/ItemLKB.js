import { findBS } from "../../services/LichLamViecService";
import { useEffect, useState } from 'react';
export const ItemLKB = (props) => {
  const [bacSi, setBacSi] = useState([]);
  useEffect(() => {
    findBS(props.idCK, props.nlv)
      .then((response) => {
        setBacSi(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <table style={{fontSize:"12px"}}>
      {bacSi.map((item) => (
        <tr key={item.id}>
          <td>{item.name}</td>
        </tr>
      ))}
    </table>
  );
}