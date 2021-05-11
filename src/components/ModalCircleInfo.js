import React, { Component } from 'react';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './ModalCircleInfo.scss';

// CREATING LIBRARY ICONS
library.add(fas, fab, far);

class ModalCircleInfo extends Component {
  // FUNCION PARA MOSTRAR LA MODAL DEL FINAL
  showModal = () => {
    const { dataPage, showModal } = this.props;
    // console.log(dataPage, showInfo,showModal);

    if (showModal === true) {
      return (
        <div className = 'modalCircleInfo animated fadeIn'>
          <div className = 'bgCircle dF-R-cc showModal'>
            <div className = 'boxInfo dF-C-cc pT-2 pB-2 pL-2 pR-2'>
              <img
                alt = 'Imagen'
                className = 'image mB-2'
                src = { dataPage.modal.img }
                style = { { 'width': dataPage.modal.imgSize } }/>
              <h2 className = 'mB-1 tCenter'>{ dataPage.modal.title }</h2>
              <div className = 'dF-C-cc mB-1' dangerouslySetInnerHTML = { { __html: dataPage.modal.text } } />
              {
                dataPage.modal.imgExample ? <img alt = 'Imagen' className = 'image' src = { dataPage.modal.imgExample } style = {{ "width": '100%' }}/> : null
              }
              <button
                className = 'buttonClose'
                onClick = { this.hideModal }
                >
                <span className = 'fa-layers fa-fw iconButton' >
                  <FontAwesomeIcon icon="circle" />
                  <FontAwesomeIcon icon="times" inverse transform="shrink-6" />
                </span>
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  hideModal = () => {
    this.props.hideModal(false)
  }

  render() {
    return (
      this.showModal()
    );
  }
}

export default ModalCircleInfo;
