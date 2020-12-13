import searchIcon from './img/search-icon.svg';
import filtersIcon from './img/filters-icon.svg';
import dropdownIcon from './img/dropdown-icon.svg';

import './control-bar.scss';
import './search-bar.scss';
import './filters.scss';

function ControlBar() {
  return (
    <div className="control-bar">
      <div className="search-bar">
        <img
          className="search-bar__icon"
          src={searchIcon}
          alt="search icon"
          width="18px"
          height="18px"
        />
        <input
          className="search-bar__text"
          type="text"
          placeholder="Начните ввод для поиска сотрудника"
        />
      </div>
      <div className="filters">
        <div className="filters__icon">
          <img
            src={filtersIcon}
            alt="filters icon"
            width="15px"
            height="13.5px"
          />
        </div>
        <div className="filters__title">Фильтры (12)</div>
        <div className="filters__dropdown">
          <img src={dropdownIcon} alt="filters dropdown icon" />
        </div>
      </div>
      <button className="control-bar__button  control-bar__report">
        Сформировать отчёт
      </button>
      <button className="control-bar__button  control-bar__user">
        Добавить сотрудников
      </button>
    </div>
  );
}

export default ControlBar;
