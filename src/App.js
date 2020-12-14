import { Component } from 'react';
import Modal from 'react-modal';
import Header from './components/Header/Header.js';
import Menu from './components/Menu/Menu.js';
import ControlBar from './components/ControlBar/ControlBar.js';
import EmployesTable from './components/EmployesTable/EmployesTable.js';
import FiltersModal from './components/FiltersModal/FiltersModal.js';

import './App.scss';
import modalStyle from './components/FiltersModal/modal-styles.js';

class App extends Component {
  #employe = {
    name: 'Александров Александр Александрович',
    work: {
      position: 'Frontend Разработчик',
      department: 'Frontend Department',
    },
    tel: '+996 770 000 000',
    mail: 'alexandrov.alexandr@fankihr.com',
    passport: {
      id: '00 00 123456',
      district: 'УФМС России По Московской области',
      date: '01.01.2012 000-000',
    },
    education: {
      degree: 'Высшее',
      specialty: 'Разработчик программно-информационных систем',
    },
    isWorking: true,
  };

  constructor() {
    super();
    this.state = {
      companyMenu: {
        title: 'Company name',
        items: [
          { id: 1, item: 'Главная', icon: 'main-icon.svg' },
          { id: 2, item: 'Запросы', icon: 'flash-icon.svg' },
          { id: 3, item: 'Календарь', icon: 'calendar-icon.svg' },
          { id: 4, item: 'База знаний', icon: 'book-icon.svg' },
          { id: 5, item: 'Новости', icon: 'book-open-icon.svg' },
          { id: 6, item: 'Задачи', icon: 'checkmark-circle-icon.svg' },
          { id: 7, item: 'Чаты', icon: 'message-circle-icon.svg' },
        ],
      },
      adminMenu: {
        title: 'Администратор',
        items: [
          { id: 8, item: 'Статистика компании', icon: 'trending-up-icon.svg' },
          { id: 9, item: 'Структура компании', icon: 'copy-icon.svg' },
          { id: 10, item: 'Element text', icon: 'folder-icon.svg' },
          { id: 11, item: 'Сотрудники', icon: 'people-icon.svg' },
          { id: 12, item: 'База знаний', icon: 'book-icon.svg' },
          { id: 13, item: 'Новости', icon: 'book-open-icon.svg' },
          { id: 14, item: 'Настройки', icon: 'settings-icon.svg' },
          { id: 15, item: 'Служба поддержки', icon: 'layers-icon.svg' },
        ],
      },
      selectedMenuItem: 11,
      employes: Array(15).fill(this.#employe),
      showModal: false,
    };
  }

  onMenuClick = (e) => {
    const selectedMenuItem = e.target.getAttribute('dataid');
    this.setState({ selectedMenuItem });
  };

  toggleFiltersModal = (e) => {
    this.setState((state) => ({
      showModal: !state.showModal,
    }));
  };

  render() {
    const {
      companyMenu,
      adminMenu,
      selectedMenuItem,
      employes,
      showModal,
    } = this.state;

    return (
      <>
        <Header />
        <main className="main">
          <aside className="aside">
            <Menu
              selectedMenuItem={selectedMenuItem}
              onMenuClick={this.onMenuClick}
              {...companyMenu}
            />
            <Menu
              selectedMenuItem={selectedMenuItem}
              onMenuClick={this.onMenuClick}
              {...adminMenu}
            />
          </aside>
          <div className="content">
            <ControlBar toggleFiltersModal={this.toggleFiltersModal} />
            <EmployesTable employes={employes} />
          </div>
        </main>
        <Modal
          isOpen={showModal}
          contentLabel="Filters Modal"
          shouldCloseOnOverlayClick={true}
          style={modalStyle}
          ariaHideApp={true}
        >
          <FiltersModal />
        </Modal>
      </>
    );
  }
}

export default App;
