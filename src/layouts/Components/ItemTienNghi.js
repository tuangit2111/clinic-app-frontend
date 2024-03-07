export const ItemTienNghi = (props) => {
  return (
    <span class="image-container">
      <img class="image-default" src={props.img} alt="Ảnh" />
      <p class="image-caption w-100 h-100">{props.title}<br/>{props.caption}</p>
    </span>
  );
}