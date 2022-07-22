import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';

import './Footer.css';

export default function Footer() {
  return (
    <>
      <footer>
        <p>
          2022 © Risky Quizness. Created by{' '}
          <a href="https://github.com/BenTidball" target="_blank" rel="noreferrer">
            Ben
          </a>
          ,{' '}
          <a href="https://github.com/abscoding" target="_blank" rel="noreferrer">
            Abigail
          </a>
          ,{' '}
          <a href="https://github.com/Tari38" target="_blank" rel="noreferrer">
            Sam
          </a>{' '}
          and{' '}
          <a href="https://github.com/CrookedTimber" target="_blank" rel="noreferrer">
            Edgar
          </a>
        </p>
        <div>
          <a
            href="https://github.com/CrookedTimber/LAP-3_Team-Project_Quiz-App"
            target="_blank" rel="noreferrer"
          >
            <FontAwesomeIcon className="fa-icon" icon={faGithub} />
          </a>
          
          <a
            href="https://github.com/BenTidball/LAP-3_Team-Project_Quiz-Server"
            target="_blank" rel="noreferrer"
          >
            <FontAwesomeIcon className="fa-icon" icon={faServer} />
          </a>
        </div>
      </footer>
    </>
  );
}
