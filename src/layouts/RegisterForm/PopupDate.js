import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { ItemPopup } from './ItemPopup';

export const PopupDate = (props) => {
  const [daySelected, setDaySelected] = useState(0);
  const weekdays = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
  const ngaylamviec = props.nlv;
  const [days, setDays] = useState([]);
  const [timeSelected, setTimeSelected] = useState(0);
  const customStyles = {
    content: {
      top: '60%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '40%',
      height: '65%',
    },
  };

  Modal.setAppElement('#root');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    const ngaykham = daySelected;
    const thangkham = currentMonth;
    const namkham = currentYear;
    let buoikham = "";
    if (timeSelected === 1) {
      buoikham = "Sáng";
    } else if (timeSelected === 2) {
      buoikham = "Trưa";
    } else {
      buoikham = "Chiều";
    }
    const thoigiankham = buoikham + "-" + ngaykham + "-" + thangkham + "-" + namkham;
    props.handleThoiGianKham(thoigiankham);
    setModalIsOpen(false);
  };

  useEffect(() => {
    const dds = [];
    ngaylamviec.forEach(dateStr => {
      const parts = dateStr.split("-");
      const month = parseInt(parts[1].trim());
      if (month === currentMonth) {
        const day = parseInt(parts[0].trim());
        dds.push(day);
      }
    });
    setDays(dds);
  }, [ngaylamviec, currentMonth]);

  const renderCalendar = () => {
    const firstDayOfMonth = new Date(currentYear, currentMonth - 1, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
    const calendar = [];
    let dayCount = 1;
    for (let i = 0; i < 6; i++) {
      const row = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDayOfMonth - 1) {
          row.push(<td key={`blank-${j}`}></td>);
        } else if (dayCount <= daysInMonth) {
          const isExcluded = days.includes(dayCount);
          row.push(
            <ItemPopup key={dayCount} isExcluded={isExcluded} giaTri={dayCount} daySelected={daySelected} setDaySelected={setDaySelected}/>
          );
          dayCount++;
        }
      }
      calendar.push(<tr key={`row-${i}`}>{row}</tr>);
      if (dayCount > daysInMonth) break;
    }
    return calendar;
  };

  const goToPreviousMonth = () => {
    if (currentMonth === 1) {
      setCurrentMonth(12);
      setCurrentYear(currentYear - 1);
      setDaySelected(0);
    } else {
      setCurrentMonth(currentMonth - 1);
      setDaySelected(0);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 12) {
      setCurrentMonth(1);
      setCurrentYear(currentYear + 1);
      setDaySelected(0);
    } else {
      setCurrentMonth(currentMonth + 1);
      setDaySelected(0);
    }
  };

  return (
    <div style={{ height: '45px' }}>
      <div className="bg-white w-100 rounded h-100 pt-2" onClick={openModal}>
        {daySelected === 0 || timeSelected === 0 ? 'Chọn ngày - khung giờ muốn khám' : 
        timeSelected === 1? 'Sáng' + "-" + daySelected + "-" + currentMonth + "-" + currentYear :
        timeSelected === 2? 'Trưa' + "-" + daySelected + "-" + currentMonth + "-" + currentYear:
                'Chiều' + "-" + daySelected + "-" + currentMonth + "-" + currentYear}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <div className="d-flex">
            <button className='w-25 btn border' onClick={goToPreviousMonth}>Prev</button>
            <span className='w-50 text-center'>{`Tháng ${currentMonth}/${currentYear}`}</span>
            <button className='w-25 btn border' onClick={goToNextMonth}>Next</button>
          </div>
          <table className='table table-border'>
            <thead>
              <tr className='text-center'>
                {weekdays.map((weekday, index) => (
                  <th key={index}>{weekday}</th>
                ))}
              </tr>
            </thead>
            <tbody>{renderCalendar()}</tbody>
          </table>
        </div>
        <div>
          <label>Chọn khung giờ khám</label>
          <div className='d-flex bg-white border rounded hover'>
            <div className={`rounded-start text-center flex-fill border-end p-2 ${timeSelected === 1 ? 'bg-primary text-white' : ''}`} onClick={() => setTimeSelected(1)}>
              <span>Sáng</span>
            </div>
            <div className={`text-center flex-fill border-end p-2 ${timeSelected === 2 ? 'bg-primary text-white' : ''}`} onClick={() => setTimeSelected(2)}>
              <span>Trưa</span>
            </div>
            <div className={`rounded-end text-center flex-fill p-2 ${timeSelected === 3 ? 'bg-primary text-white' : ''}`} onClick={() => setTimeSelected(3)}>
              <span>Chiều</span>
            </div>
          </div>
        </div>
        <button className='w-100 rounded btn btn-primary mt-3' onClick={closeModal}>{(timeSelected === 0 || daySelected === 0) ? 'Vui lòng chọn đầy đủ ngày và khung giờ khám' : 'Tiếp tục'}</button>
      </Modal>
    </div>
  );
};