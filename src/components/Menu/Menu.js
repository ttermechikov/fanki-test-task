import dropdownIcon from './img/dropdown-icon.svg';
import './menu.scss';

function Menu({ title, items, selectedMenuItem, onMenuClick }) {
  return (
    <section className="menu">
      <header className="menu__header">
        <h2 className="menu__title">
          {title.length >= 13 ? title.slice(0, 9) + '...' : title}
        </h2>
        <img
          className="menu__dropdown"
          src={dropdownIcon}
          alt="dropdown icon"
        />
      </header>
      <nav>
        <ul className="menu__list">
          {[
            items.map(({ id, item, icon }) => {
              const iconSrc = require('./img/' + icon).default;
              const [alt] = icon.split('.');
              const className =
                +id === +selectedMenuItem
                  ? 'menu__item  menu__item--active'
                  : 'menu__item';

              return (
                <li
                  className={className}
                  key={id}
                  onClick={onMenuClick}
                  dataid={id}
                >
                  <img
                    className="menu__icon"
                    src={iconSrc}
                    alt={alt}
                    width="24px"
                    height="24px"
                    dataid={id}
                  />
                  <span dataid={id}>{item}</span>
                </li>
              );
            }),
          ]}
        </ul>
      </nav>
    </section>
  );
}

export default Menu;
