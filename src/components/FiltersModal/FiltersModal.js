import './filters-modal.scss';

function FiltersModal() {
  return (
    <div className="modal">
      <div className="modal__wrapper">
        <header className="modal__header">
          <div className="modal__title">Фильтровать по:</div>
          <a className="modal__reset-btn" href="#">
            Сбросить фильтр
          </a>
        </header>
        <ul className="modal__filters">
          <li className="modal__filter">
            <ul className="modal__filter-group">
              <li className="modal__filter-selected-one">Личная информация</li>
            </ul>
            <ul>
              <li className="modal__filter-row  modal__filter-selected-all">
                Ф.И.О
              </li>
              <li className="modal__filter-row  modal__filter-unavailable">
                Дата рождения
              </li>
              <li className="modal__filter-row  modal__filter-unavailable">
                Гражданство
              </li>
              <li className="modal__filter-row  modal__filter-selected-all">
                Отдел
              </li>
              <li className="modal__filter-row  modal__filter-selected-all">
                Должность
              </li>
            </ul>
          </li>
          <li className="modal__filter">
            <ul className="modal__filter-group">
              <li className="modal__filter-selected-one">
                Контактная информация
              </li>
            </ul>
            <ul>
              <li className="modal__filter-row  modal__filter-selected-all">
                Номер телефона
              </li>
              <li className="modal__filter-row  modal__filter-selected-all">
                Почта
              </li>
              <li className="modal__filter-row  modal__filter-unavailable">
                Адрес проживания
              </li>
              <li className="modal__filter-row  modal__filter-unavailable">
                Адрес прописки
              </li>
            </ul>
          </li>
          <li className="modal__filter">
            <ul className="modal__filter-group">
              <li className="modal__filter-selected-all">Паспортные данные</li>
            </ul>
            <ul>
              <li className="modal__filter-row  modal__filter-selected-all">
                Номер паспорта
              </li>
              <li className="modal__filter-row  modal__filter-selected-all">
                Орган, выдавший документ
              </li>
              <li className="modal__filter-row  modal__filter-selected-all">
                Дата выдачи паспорта
              </li>
              <li className="modal__filter-row  modal__filter-selected-all">
                Серия паспорта
              </li>
            </ul>
          </li>
          <li className="modal__filter">
            <ul className="modal__filter-group">
              <li className="modal__filter-selected-one">Образование</li>
            </ul>
            <ul>
              <li className="modal__filter-row  modal__filter-selected-all">
                Степень
              </li>
              <li className="modal__filter-row  modal__filter-selected-all">
                Специальность
              </li>
              <li className="modal__filter-row  modal__filter-unavailable">
                Название учебного заведения
              </li>
              <li className="modal__filter-row  modal__filter-unavailable">
                Факультет
              </li>
              <li className="modal__filter-row  modal__filter-unavailable">
                Годы обучения
              </li>
              <li className="modal__filter-row  modal__filter-unavailable">
                Знание языка
              </li>
            </ul>
          </li>
          <li className="modal__filter">
            <ul className="modal__filter-group">
              <li className="modal__filter-unavailable  modal__filter-unavailable--group">
                Оклад
              </li>
            </ul>
          </li>
        </ul>
        <footer className="modal__footer">
          <ul>
            <li className="modal__filter-selected-all">
              Показать сотрудников из архива
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default FiltersModal;
