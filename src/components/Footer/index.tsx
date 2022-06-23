import { faDribbble, faFacebook, faGoogle, faSkype } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import { faUsersGear } from '@fortawesome/free-solid-svg-icons';

import { bindClass } from '~/lib/classNames';

import Container from '../Container';
import Image from '../Image';

import { logo } from '~/assets/images';
import styles from './Footer.module.scss';

const cx = bindClass(styles);

const Footer = () => {
  return (
    <div className={cx('footer')}>
      <div className={cx('footer-background-shape')} />

      <Container>
        <div className={cx('card-list')}>
          {/* <div className={cx('card')}>
            <FontAwesomeIcon className={cx('card-icon')} icon={faFileLines} />
            <div className={cx('card-info')}>
              <h4 className={cx('card-title')}>70+ example pages</h4>
              <p className={cx('card-desc')}>
                You get 70+ pre-built pages for a variety of purposes that makes it the ideal point
                to start building websites of any kind.
              </p>
            </div>
          </div>

          <div className={cx('card')}>
            <FontAwesomeIcon className={cx('card-icon')} icon={faUsersGear} />
            <div className={cx('card-info')}>
              <h4 className={cx('card-title')}>6 months technical support</h4>
              <p className={cx('card-desc')}>
                Use our dedicated support email to send your issues or suggestions. We are here to
                help anytime: support@example.io
              </p>
            </div>
          </div> */}
        </div>

        <div className={cx('row')}>
          <div className={cx('col-left')}>
            <Image className={cx('logo')} src={logo} alt='Logo' />
            <p>
              Hello, we are going to host a Job Matching Fair for our mentees from MentorME ICT On
              Job Training program with tech startups/employers. Please register or share to anyone
              interested.
            </p>
          </div>

          <div className={cx('col-right')}>
            <ul className={cx('link-list')}>
              <li className={cx('link-item')}>Account</li>
              <li className={cx('link-item')}>
                <a href='#/'>Profile</a>
              </li>
              <li className={cx('link-item')}>
                <a href='#/'>Settings</a>
              </li>
              <li className={cx('link-item')}>
                <a href='#/'>Billing</a>
              </li>
              <li className={cx('link-item')}>
                <a href='#/'>Notifications</a>
              </li>
            </ul>
            <ul className={cx('link-list')}>
              <li className={cx('link-item')}>About</li>
              <li className={cx('link-item')}>
                <a href='#/'>Services</a>
              </li>
              <li className={cx('link-item')}>
                <a href='#/'>Contact</a>
              </li>
              <li className={cx('link-item')}>
                <a href='#/'>Careers</a>
              </li>
            </ul>
            <ul className={cx('link-list')}>
              <li className={cx('link-item')}>Company</li>
              <li className={cx('link-item')}>
                <a href='#/'>Terms</a>
              </li>
              <li className={cx('link-item')}>
                <a href='#/'>Privacy</a>
              </li>
              <li className={cx('link-item')}>
                <a href='#/'>Support</a>
              </li>
            </ul>
          </div>
        </div>

        <ul className={cx('social-list')}>
          <a href='#/'>
            <FontAwesomeIcon className={cx('social-icon')} icon={faDribbble} />
          </a>
          <a href='https://www.facebook.com/helloMentorME' target='_blank'>
            <FontAwesomeIcon className={cx('social-icon')} icon={faFacebook} />
          </a>
          <a href='#/'>
            <FontAwesomeIcon className={cx('social-icon')} icon={faGoogle} />
          </a>
          <a href='#/'>
            <FontAwesomeIcon className={cx('social-icon')} icon={faSkype} />
          </a>
        </ul>
      </Container>
    </div>
  );
};

export default Footer;
