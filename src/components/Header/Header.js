import './header.scss';
import './userbar.scss';
import logo from './logo.svg';
import notificationIcon from './bell-icon.svg';
import dropdownIcon from './dropdown-icon.svg';
import avatar from './user-avatar.svg';

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <img src={logo} alt="Logo" width="99px" height="24px" />
        <div className="header__user-box">
          <div className="header__notifications">
            <div className="header__notifications-inner">
              <img
                className="header__notifications-icon"
                width="18px"
                height="20px"
                src={notificationIcon}
                alt="notification icon"
              />
              <div className="header__notifications-text">Сообщений нет</div>
            </div>
          </div>
          <div className="userbar">
            <div className="userbar__info">
              <div className="userbar__name">Александр Александр</div>
              <div className="userbar__position">Frontend Разработчик</div>
            </div>
            <img
              className="userbar__avatar"
              src={avatar}
              alt="user avatar"
              width="36px"
              height="36px"
            />
            <div className="userbar__dropdown">
              <img src={dropdownIcon} alt="dropdown icon" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
