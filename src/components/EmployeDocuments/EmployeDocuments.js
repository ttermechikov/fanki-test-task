import rightIcon from './img/right-icon.svg';
import heightIcon from './img/height-icon.svg';
import refreshIcon from './img/refresh-icon.svg';
import folderAddIcon from './img/folder-add-icon.svg';
import fileAddIcon from './img/file-add-icon.svg';
import downloadIcon from './img/download-icon.svg';
import deleteIcon from './img/delete-icon.svg';
import folderBigIcon from './img/folder-big-icon.svg';
import archiveIcon from './img/archive-icon.svg';
import imageIcon from './img/image-icon.svg';
import pptIcon from './img/ppt-icon.svg';
import wordIcon from './img/word-icon.svg';
import excelIcon from './img/excel-icon.svg';
import pdfIcon from './img/pdf-icon.svg';

import './EmployeDocuments.scss';

function EmployeDocuments() {
  return (
    <div className="documents">
      <div className="documents__header">
        <div className="documents__breadcrumbs">
          <div className="documents__place">Файлы сотрудника</div>
          <img src={rightIcon} alt="right icon" width="24px" height="24px" />
          <div className="documents__place">Договоры</div>
        </div>
        <div className="documents__controls">
          <div className="documents__button">
            <img
              src={heightIcon}
              alt="height button"
              width="24px"
              height="24px"
            />
          </div>
          <div className="documents__button">
            <img
              src={refreshIcon}
              alt="refresh button"
              width="24px"
              height="24px"
            />
          </div>
          <div className="documents__button  documents__button--group-right">
            <img
              src={folderAddIcon}
              alt="folder add button"
              width="24px"
              height="24px"
            />
          </div>
          <div className="documents__button  documents__button--group-left">
            <img
              src={fileAddIcon}
              alt="file add button"
              width="24px"
              height="24px"
            />
          </div>
          <div className="documents__button">
            <img
              src={downloadIcon}
              alt="download button"
              width="24px"
              height="24px"
            />
          </div>
          <div className="documents__button">
            <img
              src={deleteIcon}
              alt="delete button"
              width="24px"
              height="24px"
            />
          </div>
        </div>
      </div>
      <div className="documents__table">
        {Array(12)
          .fill(null)
          .map(() => (
            <div className="documents__item">
              <img
                className="documents__badge"
                src={folderBigIcon}
                alt="folder badge"
                width="36px"
                height="36px"
              />
              <div className="documents_description">
                Очень длинное название папки в документах
              </div>
            </div>
          ))}

        <div className="documents__item">
          <img
            className="documents__badge"
            src={wordIcon}
            alt="word badge"
            width="36px"
            height="36px"
          />
          <div className="documents_description">
            Название документа в файлах.docx
          </div>
        </div>
        <div className="documents__item">
          <img
            className="documents__badge"
            src={excelIcon}
            alt="excel badge"
            width="36px"
            height="36px"
          />
          <div className="documents_description">
            Название документа в файлах.xlsx
          </div>
        </div>
        <div className="documents__item">
          <img
            className="documents__badge"
            src={pdfIcon}
            alt="pdf badge"
            width="36px"
            height="36px"
          />
          <div className="documents_description">
            Название документа в файлах.pdf
          </div>
        </div>
        <div className="documents__item">
          <img
            className="documents__badge"
            src={imageIcon}
            alt="no img badge"
            width="36px"
            height="36px"
          />
          <div className="documents_description">
            Название документа в файлах.docx
          </div>
        </div>
        <div className="documents__item">
          <img
            className="documents__badge"
            src={archiveIcon}
            alt="archive badge"
            width="36px"
            height="36px"
          />
          <div className="documents_description">
            Название документа в файлах.zip
          </div>
        </div>
        <div className="documents__item">
          <img
            className="documents__badge"
            src={pptIcon}
            alt="ppt badge"
            width="36px"
            height="36px"
          />
          <div className="documents_description">
            Название документа в файлах.pdf
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeDocuments;
