export const ItemPopup = (props) => {
  return (
    <td style={{ cursor: props.isExcluded ? '' : 'not-allowed' }} className={`${props.isExcluded ? '' : 'opacity-25'} text-center hover ${props.daySelected === props.giaTri ? 'bg-primary text-white' : ''}`} onClick={() => {if (props.isExcluded) {props.setDaySelected(props.giaTri);}}}>
      {props.giaTri}
    </td>
  );
}