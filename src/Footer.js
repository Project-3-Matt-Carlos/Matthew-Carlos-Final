import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-flex">
        <ul>
          <li>
            <a href="" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <p>Matthew Whitely</p>
          </li>
        </ul>
      </div>
      <div className="footer-flex">
        <ul>
          <li>
            <a href="" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <p>Luis Carlos Berrera</p>
          </li>
        </ul>
      </div>
      <div className="footer-flex">
        <ul>
          <li>
            <a
              href="https://junocollege.com/"
              rel="nooppener noreferrer"
              target="_blank"
            >
              Copyright © Juno College
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
