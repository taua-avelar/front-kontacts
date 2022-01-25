import "./styles.css";

export default function SideImage({ image }) {
  return (
    <div className="container-image">
      <img src={image} alt="" />
    </div>
  );
}
