import './EmployeDetails.scss';

function EmployeDetails() {
  return (
    <>
      <div className="details__row">
        <div className="details__card">
          <div className="details__title  details__title--secondary">
            Контактная информация
          </div>
          <div className="details__text">
            <span className="details__text  details__text--secondary">
              +7 770 0000 000
            </span>{' '}
            <br />
            alexandrov.alexandr@fankihr.com
          </div>
        </div>
        <div className="details__card">
          <div className="details__title  details__title--secondary">
            Адрес проживания
          </div>
          <div className="details__text">
            <span className="details__text  details__text--secondary">
              Россия, Москва
            </span>{' '}
            <br />
            мкр. Центральный, пр. Уличных улиц 220, кв. 350
          </div>
        </div>
        <div className="details__card">
          <div className="details__title  details__title--secondary">
            Адрес прописки
          </div>
          <div className="details__text">
            <span className="details__text  details__text--secondary">
              Росстя, Москва
            </span>{' '}
            <br />
            мкр. Восточный, ул. Улиц 220
          </div>
        </div>
        <div className="details__card">
          <div className="details__title  details__title--secondary">
            Гражданство
          </div>
          <div className="details__text">
            <span className="details__text  details__text--secondary">
              Кыргызстан
            </span>{' '}
            <br />
          </div>
        </div>
      </div>
      <div className="details__row">
        <div className="details__card">
          <div className="details__title  details__title--secondary">
            Паспортные данные
          </div>
          <div className="details__text">
            <span className="details__text  details__text--secondary">
              ИНН 0000 0000 0000 0000
            </span>{' '}
            <br />
            Выдан - УФМС России по Московской области
          </div>
        </div>
        <div className="details__card">
          <div className="details__title  details__title--secondary">
            Номер паспорта и дата выдачи
          </div>
          <div className="details__text">
            <span className="details__text  details__text--secondary">
              Номер/серия - 503 413 783 01
            </span>{' '}
            <br />
            01.01.2012 - 01.01.2022
          </div>
        </div>
        <div className="details__card">
          <div className="details__title  details__title--secondary">
            Семейное положение
          </div>
          <div className="details__text">
            <span className="details__text  details__text--secondary">
              Не женат
            </span>
          </div>
        </div>
        <div className="details__card">
          <div className="details__title  details__title--secondary">
            Национальность
          </div>
          <div className="details__text">
            <span className="details__text  details__text--secondary">
              Русский
            </span>
          </div>
        </div>
      </div>
      <div className="details__row">
        <div className="details__card">
          <div className="details__title  details__title--secondary">
            Образование
          </div>
          <div className="details__text">
            <span className="details__text  details__text--secondary">
              Высшее
            </span>{' '}
            <br />
            Разработчик программно- информационных систем
          </div>
        </div>
        <div className="details__card">
          <div className="details__title  details__title--secondary">
            Университет
          </div>
          <div className="details__text">
            <span className="details__text  details__text--secondary">
              Университет высоких технологий им. И.И. Иванова
            </span>{' '}
            <br />
            Факультет информационных технологий и математики
          </div>
        </div>
        <div className="details__card">
          <div className="details__title  details__title--secondary">
            Годы обучения
          </div>
          <div className="details__text">
            <span className="details__text  details__text--secondary">
              2014-2018
            </span>
          </div>
        </div>
      </div>

      <div className="details__row">
        <div className="details__card  details__card--bigger">
          <div className="details__title  details__title--secondary details__title--bigger">
            Знание языков
          </div>
          <div className="details__text  details__text--bigger">
            <span className="details__text  details__text--secondary">
              Русский
            </span>
            <br />
            Родной
          </div>
          <div className="details__text  details__text--bigger">
            <span className="details__text  details__text--secondary">
              Английский
            </span>
            <br />
            Технический
          </div>
          <div className="details__text  details__text--bigger">
            <span className="details__text  details__text--secondary">
              Немецкий
            </span>
            <br />
            Разговорный
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeDetails;
