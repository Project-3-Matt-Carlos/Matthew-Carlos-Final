import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="app-footer">
      <h3>Created By</h3>
      <div className="footer-flex">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/matthew-whitely/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href="https://github.com/Matthew-Whitely" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <p>Matthew Whitely</p>
          </li>
        </ul>
        <ul>
          <li>|</li>
        </ul>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/luis-carlos-barrero/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href="https://github.com/carlosbarrero" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <p>Luis Carlos Barrero</p>
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
