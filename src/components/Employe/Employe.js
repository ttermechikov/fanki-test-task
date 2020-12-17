import { Link, useLocation } from 'react-router-dom';
import EmployeDocuments from '../EmployeDocuments/EmployeDocuments.js';
import EmployeDetails from '../EmployeDetails/EmployeDetails.js';
import User from '../User/User.js';

import penIcon from './img/pen-icon.svg';
import moreIcon from './img/more-icon.svg';

import './Employe.scss';
import './nav.scss';
import './tabs.scss';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Employe() {
  const isDocumentsTab = useQuery().get('selectedTab') === 'documents';

  return (
    <section className="employe">
      <nav className="nav">
        <div className="nav__controls">
          <div className="nav__back">
            <Link to="/employes">← Назад</Link>
          </div>
          <a href="?action=edit" className="nav__btn">
            <img src={penIcon} alt="edit button" />
          </a>
          <a href="?action=more" className="nav__btn">
            <img src={moreIcon} alt="more button" />
          </a>
        </div>
      </nav>

      {isDocumentsTab ? <User isCompactMode={true} /> : <User />}

      <div className="tabs">
        <div className="tabs__header">
          <div
            className={
              isDocumentsTab ? 'tabs__item' : 'tabs__item  tabs__item--active'
            }
          >
            <div className="tabs__title">
              <Link to="?selectedTab=main">Основная информация</Link>
            </div>
          </div>
          <div className="tabs__item">
            <div className="tabs__title">Запросы пользователя</div>
          </div>
          <div className="tabs__item">
            <div className="tabs__title">Расчёт отпускных</div>
          </div>
          <div className="tabs__item">
            <div className="tabs__title">История выплат</div>
          </div>
          <div
            className={
              isDocumentsTab ? 'tabs__item  tabs__item--active' : 'tabs__item'
            }
          >
            <div className="tabs__title">
              <Link to="?selectedTab=documents">Документы сотрудника</Link>
            </div>
          </div>
          <div className="tabs__item">
            <div className="tabs__title">Заметки</div>
          </div>
        </div>
        <div
          className={
            isDocumentsTab
              ? 'tabs__content tabs__content--documents'
              : 'tabs__content'
          }
        >
          {isDocumentsTab ? <EmployeDocuments /> : <EmployeDetails />}
        </div>
      </div>
    </section>
  );
}

export default Employe;
