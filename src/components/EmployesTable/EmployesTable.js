import dropdownOpenedIcon from './img/dropdown-opened-icon.svg';
import avatar from './img/avatar.svg';

import './employes-table.scss';

function EmployesTable({ employes }) {
  return (
    <div className="employes">
      <table className="employes__table">
        <thead className="employes__thead">
          <tr className="employes__row employes__row--main">
            <td className="employes__select">
              <input className="employes__checkbox" type="checkbox" />
            </td>
            <td className="employes__info">
              <span>Личная информация</span>
              <div className="employes__icon">
                <img src={dropdownOpenedIcon} alt="dropdown opened icon" />
              </div>
            </td>
            <td className="employes__contacts">Контактная информация</td>
            <td className="employes__passport">Паспортные данные</td>
            <td className="employes__education">Образование</td>
            <td className="employes__td">Статус</td>
            <td>&nbsp;</td>
          </tr>
        </thead>

        <tbody className="employes__tbody">
          {employes.map((e) => (
            <tr className="employes__row" key={e.name}>
              <td className="employes__select">
                <input className="employes__checkbox" type="checkbox" />
              </td>
              <td className="employes__info  employes__info--tbody">
                <div className="employes__avatar">
                  <img src={avatar} alt="employe avatar" />
                </div>
                <div className="employes__personal">
                  <div className="employes__name">{e.name}</div>
                  <div className="employes__work">
                    <span className="employes__position">
                      {e.work.position}
                    </span>
                    <span className="employes__divider">•</span>
                    <span className="employes__department">
                      {e.work.department}
                    </span>
                  </div>
                </div>
              </td>
              <td className="employes__contacts">
                <div className="employes__phone">{e.tel}</div>
                <div className="employes__email">{e.mail}</div>
              </td>
              <td className="employes__passport">
                <span className="employes__id">{e.passport.id}</span> <br />
                <span>{e.passport.district}</span> <br />
                <span>{e.passport.date}</span>
              </td>
              <td className="employes__education">
                <span className="employes__id">{e.education.degree}</span>
                <br />
                <span>{e.education.specialty}</span>
              </td>
              <td className="employes__status">
                <div>{e.isWorking ? 'Работает' : 'Не работает'}</div>
              </td>
              <td>
                <div className="employes__more">•••</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployesTable;
