import { Item } from "./Item";
import { useState, useEffect } from "react";
import { listAllBacSi, listBacSiById } from "../../services/BacSiService";

export const ItemList = (props) => {
  const [bs, setBS] = useState([]);
  const [pages, setPages] = useState([]);
  const [totalPages, setTotalPages] = useState();

  useEffect(() => {
    const parsedPageNumber = parseInt(props.pageNumber, 10);
    if (props.id === 0) {
      listAllBacSi(parsedPageNumber).then((response) => {
        setBS(response.data.content);
        setTotalPages(response.data.totalPages);
      }).catch(error => {
        console.error(error);
      });
    } else {
      listBacSiById(props.id, parsedPageNumber)
      .then((response) => {
        setBS(response.data.content);
        setTotalPages(response.data.totalPages);
      })
      .catch((error) => {
        console.error(error);
      });
    }
    
  }, [props.pageNumber, props.id]);

  useEffect(() => {
    const total = parseInt(totalPages, 10);
    const parsedPageNumber = parseInt(props.pageNumber, 10);
    if (total <= 4) {
      switch(total) {
        case 1:
          setPages([1]);
          break;
        case 2:
          setPages([1,2]);
          break;
        case 3:
          setPages([1,2,3]);
          break;
        case 4:
          setPages([1,2,3,4]);
          break;
        default:
          break;
      }
    } else {
      if (parsedPageNumber >= 3) {
        if (parsedPageNumber < total - 2) {
          setPages([parsedPageNumber-1, parsedPageNumber, parsedPageNumber+1, parsedPageNumber+2, parsedPageNumber+3]);
        } else if (parsedPageNumber - 1 < total - 2) {
          setPages([parsedPageNumber-2, parsedPageNumber-1, parsedPageNumber, parsedPageNumber+1, parsedPageNumber+2]);
        }
      } else {
        if (parsedPageNumber <= 2) {
          setPages([1,2,3,4,5]);
        }
      }
    }
  },[props.pageNumber, totalPages]);
  const handleChangePageDown = () => {
    const parsedPageNumber = parseInt(props.pageNumber, 10);
    if (parsedPageNumber > 1) {
      props.handlePageNumberChange(parsedPageNumber-1);
    }
  }

  const handleChangePageUp = () => {
    const parsedPageNumber = parseInt(props.pageNumber, 10);
    const total = parseInt(totalPages, 10);
    if (parsedPageNumber < total) {
      props.handlePageNumberChange(parsedPageNumber+1);
    }
  }
  const handleChangePage = (e) => {
    const parsedPageNumber = parseInt(e.target.innerText, 10);
    props.handlePageNumberChange(parsedPageNumber - 1);
  }
  return (
    <div>
      <table className="table table-bordered border text-center mt-3">
        <tr>
          <th>ID</th>
          <th>Họ và tên</th>
          <th>Chuyên khoa</th>
        </tr>
        {bs.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <Item id={item.chuyenkhoa_id}/>
          </tr>
        ))}
      </table>
      <nav aria-label="Page navigation example" className="float-end">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous" onClick={handleChangePageDown}>
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {pages.map((item) => (
            <li key={item} className="page-item"><a className="page-link" onClick={handleChangePage}>{item}</a></li>
          ))}
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next" onClick={handleChangePageUp}>
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}