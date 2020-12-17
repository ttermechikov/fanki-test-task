import ellipseIcon from './img/ellipse-icon.svg';
import avatar from './img/avatar-big.svg';

import './User.scss';

function User({ isCompactMode }) {
  if (isCompactMode) {
    return (
      <div className="user user--compact">
        <div className="user__avatar  user__avatar--compact">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="user__info">
          <div className="user__name  user__name--compact">
            Александров Александр Александрович
          </div>
          <div className="user__description  user__description--compact">
            <div>
              <div className="user__position  user__position--compact">
                <span>Frontend Разработчик</span>
                <span>•</span>
                <span>Frontend Department</span>
              </div>
              <div className="user__dob">
                <span>Дата рождения: </span>
                <span>1 января 1990</span>
              </div>
              <div className="user__status  user__status--compact">
                <img src={ellipseIcon} alt="ellipse icon" />
                <span>Работает</span>
                <span>
                  - <span className="user__text">Оклад:</span> 100 000 руб.
                </span>
              </div>
            </div>
            <div>
              {/* <!-- <div> --> */}
              <div className="user__text  user__text--compact">
                Дата начала работы:
              </div>
              <span className="user__text user__text--bold">
                20 октября 2018
              </span>
              {/* <!-- </div> --> */}
              <div>
                <span className="user__text">
                  Отпускные - доступно / использовано:
                </span>
                <span className="user__text user__text--bold">
                  21,4 дн. / 1,6 дн.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="user">
      <div className="user__avatar">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="user__name">Александров Александр Александрович</div>
      <div className="user__description">
        <div>
          <div className="user__position">
            <span>Frontend Разработчик</span>
            <span>•</span>
            <span>Frontend Department</span>
          </div>
          <div className="user__dob">
            <span>Дата рождения: </span>
            <span>1 января 1990</span>
          </div>
        </div>
        <div>
          <div className="user__status">
            <img src={ellipseIcon} alt="ellipse icon" />
            <span>Работает</span>
            <span>
              &nbsp;-&nbsp;
              <span className="user__text">Оклад:</span> 100 000 руб.
            </span>
          </div>
          <div>
            <span className="user__text">Дата начала работы:</span>
            <span className="user__text user__text--bold">
              &nbsp; 20 октября 2018
            </span>
          </div>
          <div>
            <span className="user__text">
              Отпускные - доступно / использовано:
            </span>
            <span className="user__text user__text--bold">
              &nbsp;21,4 дн. / 1,6 дн.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
