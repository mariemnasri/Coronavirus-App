import React from "react";
import "../Css/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <span className="copyright">Copyright &copy; CoronaVirus</span>
      </div>
      <div>
        <ul className="list-inline quicklinks">
          <li className="list-inline-item">
            <a className="text-dark" href="#something">
              Privacy Policy
            </a>
          </li>
          <li className="list-inline-item">
            <a className="text-dark" href="#something">
              Terms of Use
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
