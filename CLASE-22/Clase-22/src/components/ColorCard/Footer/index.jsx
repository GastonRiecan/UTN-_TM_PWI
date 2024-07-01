import "./styles.css";

const Footer = (props) => {
  return (
    <div className="footer-container">
      <div className="likes">
        <div className="heart">
         <i class="bi bi-heart"></i>
        </div>
        <div>{props.likes}</div>
      </div>
      <div className="fecha">{props.fecha}</div>
    </div>
  );
};

export default Footer;
