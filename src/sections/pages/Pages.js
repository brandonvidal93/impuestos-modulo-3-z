import React, { Component } from 'react';
import MenuCourse from './MenuCourse';
import ModalVideo from '../../components/ModalVideo';
import Instruction from '../../components/Instruction';
import ChatPhone from '../../components/ChatPhone';
import InteractiveAudio from '../../components/InteractiveAudio';
import InteractiveCircle from '../../components/InteractiveCircle';
import InteractiveCircle2 from '../../components/InteractiveCircle2';
import InteractivePath from '../../components/InteractivePath';
// import InteractivePiramid from '../../components/InteractivePiramid';
// import InteractiveCircleModal from '../../components/InteractiveCircleModal';
// import DraggableCircle from '../../components/DraggableCircle';
import DraggableWords from '../../components/DraggableWords';
// import DraggableWordBox from '../../components/DraggableWordBox';
import ModalCircle from '../../components/ModalCircle';
import ModalCircleInfo from '../../components/ModalCircleInfo';
// import InteractiveFlip from '../../components/InteractiveFlip';
// import InteractiveFlipIcon from '../../components/InteractiveFlipIcon';
// import Slides from '../../components/Slides';
import SlidesUpDown from '../../components/SlidesUpDown';
// import Pairing from '../../components/Pairing';

import './Pages.scss';

class Cover extends Component {
  state = {
    openModal: false,
    warningAnimation: true
  }

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(0, end);
  }

  // FUNCION PARA ENVIAR EL INDEX ACTUALIZADO Y EMPEZAR EL CURSO
  startCourse = e => {
    e.preventDefault();
    this.props.startCourse(e.target.id);
  }

  // FUNCION PARA ABRIR MODAL
  showModal = () => {
    this.setState({
      openModal: !this.state.openModal,
      warningAnimation: !this.state.warningAnimation
    });
  }

  render() {
    const { dataPage } = this.props;
    // const { dataPage, endActivities } = this.props;
    // console.log('Actividad finalizada: ' + endActivities);

    return (
      <div className={ 'pageContent ' + (dataPage.type) + ' pL-4 animated fadeIn' }>
        { /* MUESTRA LA MODAL DE ACUERDO AL ESTADO openModal */ }
        { this.state.openModal !== false ? <ModalVideo dataModal={ dataPage } showModal={ this.showModal } isEnded = { this.isEnded } /> : null }

        <div className = {'guideNavigation ' + (this.state.warningAnimation === true ? '' : 'animation-none')}>
          <div className = 'guideBox'>
            <hr className = 'line-1 mB-1' />
            <h3 className = 'color-4 mB-05'>{ dataPage.modal.title }</h3>
            <p className = 'color-4 mB-2'>{ dataPage.modal.text }</p>

            <button
              className = 'buttonModal pT-025 pB-025'
              onClick = { this.showModal }>
              { dataPage.modal.buttonModal }
            </button>

          </div>
        </div>

        <img
          alt = 'Imagen Corporativa'
          className = 'imageLogo mT-6 mB-4'
          src = { dataPage.logoCourse }/>

        <h1 className = 'mB-025'>{ dataPage.title }</h1>
        <h2 className = 'mB-2 fw-4'>{ dataPage.subTitle }</h2>
        <p className = 'mB-1'>{ dataPage.module }</p>
        <h3 className = 'mB-3'>{ dataPage.courseName }</h3>

        <button
          className = 'buttonStart pT-05 pB-05'
          id = 'btnStart'
          onClick = { this.startCourse }>
          { dataPage.buttonStart }
        </button>

        { /* Restricción de avance <div className = { 'restrict-3 ' + (endActivities === true ? 'dNone' : '') } /> */ }

      </div>
    );
  }
}

class Page1 extends Component {

  render() {
    const { dataPage, goToPage, menuPosition, unitActual, updateActualUnit, unitFinal, enableUnit } = this.props;
    const { Units } = this.props.dataPage;
    // console.log(this.props.unitFinal);
    return (
      <div className = { 'pageContent ' + (dataPage.type) + ' animated fadeIn'}>
        <div className = 'section-1 dF-C-cc mB-2'>
          <hr className = 'line-2 mB-1' />
          <h1 className = 'mB-1 tCenter'>{ dataPage.title }</h1>
          <p className = 'tCenter'>{ dataPage.text }</p>
        </div>

        { /* LLAMADO DEL COMPONENTE MENU */ }
        <MenuCourse
          dataPage = { dataPage }
          goToPage = { goToPage }
          menuPosition = { menuPosition }
          Units = { Units }
          unitActual = { unitActual }
          updateActualUnit = { updateActualUnit }
          unitFinal = { unitFinal }
          enableUnit = { enableUnit } />

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page2 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(1, end);
  }

  render() {
    const { dataPage, endActivities } = this.props;
    console.log('Actividad finalizada: ' + endActivities);
    // console.log(this.state);

    return (
      <div className = 'pageContent animated fadeIn'>
        <div className = 'section-1 dF-C-cc mB-2'>
          <hr className = 'line-2 mB-1' />
          <h2 className = 'mB-1 tCenter' dangerouslySetInnerHTML = {{ __html: dataPage.title }} />
          <p className = 'tCenter'>{ dataPage.text }</p>
        </div>

        <InteractiveAudio dataPage={ dataPage.multimedia } isEnded = { this.isEnded } />

        { /* Restricción de avance */ }
        <div className = { 'restrict ' + (endActivities === true ? 'dNone' : '') } />
        <div className = { 'restrict-2 ' + (endActivities === true ? 'dNone' : '') } />
      </div>
    );
  }
}

class Page3 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(2, end);
  }

  render() {
    const { dataPage, endActivities } = this.props;
    // console.log('Actividad finalizada: ' + endActivities);

    return (
      <div className = 'pageContent animated fadeIn'>
        <div className = 'section-1 dF-C-cc mB-2'>
          <hr className = 'line-2 mB-1' />
          <h2 className = 'mB-1 tCenter' dangerouslySetInnerHTML = {{ __html: dataPage.title }} />
          <p className = 'tCenter'>{ dataPage.text }</p>
        </div>

        <InteractivePath dataPage = { dataPage } isEnded = { this.isEnded } />

        <Instruction dataPage = { dataPage.instruction } />

        { /* Restricción de avance */ }
        <div className = { 'restrict ' + (endActivities === true ? 'dNone' : '') } />
        <div className = { 'restrict-2 ' + (endActivities === true ? 'dNone' : '') } />
      </div>
    );
  }
}

class Page4 extends Component {
  state = {
    showModal: false,
    showInfo: 0
  }

  handleClick = (e) => {
    const { dataPage, checkEndActivity } = this.props;

    this.setState({
      showModal: !this.state.showModal,
      showInfo: parseInt(e.currentTarget.id)
    });

    document.getElementById(e.currentTarget.id).classList.add('visited');

    if (parseInt(e.currentTarget.id) === dataPage.multimedia.button.length - 1) {
      // CUANDO NO SE ENVIA A COMPONENTES INTERNOS LA FUNCION SE PASA DE LA PROP
      checkEndActivity(3, true); // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
    }
  }

  hideModal = (closeModal) => {
    this.setState({
      showModal: closeModal,
      showInfo: 0
    });
  }

  render() {
    const { dataPage, endActivities } = this.props;
    console.log('Actividad finalizada: ' + endActivities);
    // console.log(this.state);

    return (
      <div className = 'pageContent animated fadeIn'>
        <div className = 'section-1 dF-C-cc mB-3'>
          <hr className = 'line-2 mB-1' />
          <h2 className = 'mB-1 tCenter' dangerouslySetInnerHTML = {{ __html: dataPage.title }} />
          <p className = 'tCenter mB-1'>{ dataPage.text }</p>
          <p className = 'tCenter'>{ dataPage.text2 }</p>
        </div>

        <div className = 'contentBox dF-R-cc'>
          {
            dataPage.multimedia.button.map( (item, i) =>
              <button className = 'buttonModal mL-1 mR-1' key = { item.numBtn } onClick = { this.handleClick } id = { i } >
                <img
                  alt = 'Modal Circle'
                  className = 'image mB-1'
                  src = { item.img }
                  style = { { 'width': '145px' } } />
                <h3 className = 'fw-4' dangerouslySetInnerHTML = {{ __html: item.text }} />
              </button>
            )
          }
        </div>

        <ModalCircle dataPage = { dataPage.multimedia.content } hideModal = { this.hideModal } showInfo = { this.state.showInfo } showModal = { this.state.showModal }/>

        <Instruction dataPage = { dataPage.instruction } />

        { /* Restricción de avance */ }
        <div className = { 'restrict ' + (endActivities === true ? 'dNone' : '') } />
        <div className = { 'restrict-2 ' + (endActivities === true ? 'dNone' : '') } />
      </div>
    );
  }
}

class Page5 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(4, end);
  }

  render() {
    const { dataPage, endActivities } = this.props;
    // console.log('Actividad finalizada: ' + endActivities);

    return (
      <div className = 'pageContent animated fadeIn'>
        <div className = 'section-1 dF-C-cc mB-2'>
          <hr className = 'line-2 mB-1' />
          <h2 className = 'mB-1 tCenter' dangerouslySetInnerHTML = {{ __html: dataPage.title }} />
          <p className = 'tCenter'>{ dataPage.text }</p>
        </div>

        <ChatPhone dataPage = { dataPage } isEnded = { this.isEnded } ></ChatPhone>

        { /* Restricción de avance */ }
        <div className = { 'restrict ' + (endActivities === true ? 'dNone' : '') } />
        <div className = { 'restrict-2 ' + (endActivities === true ? 'dNone' : '') } />
      </div>
    );
  }
}

class Page6 extends Component {
  state = {
    openModal: false,
    warningAnimation: true
  }

  // FUNCION PARA ABRIR MODAL
  showModal = () => {
    this.setState({
      openModal: !this.state.openModal,
      warningAnimation: !this.state.warningAnimation
    });
  }

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(5, end);
  }

  render() {
    const { dataPage, endActivities } = this.props;
    const { boxInfo } = this.props.dataPage;
    // console.log('Actividad finalizada: ' + endActivities);

    return (
      <div className = 'pageContent animated fadeIn'>
        { /* MUESTRA LA MODAL DE ACUERDO AL ESTADO openModal */ }
        { this.state.openModal !== false ? <ModalVideo dataModal={ dataPage } showModal={ this.showModal } isEnded = { this.isEnded } /> : null }

        <div className = 'section-1 dF-C-cc mB-2'>
          <hr className = 'line-2 mB-1' />
          <h2 className = 'mB-1 tCenter' dangerouslySetInnerHTML = {{ __html: dataPage.title }} />
          <p className = 'tCenter'>{ dataPage.text }</p>
        </div>

        <div className = 'two-column dF-R-cc bg-particles pL-2 pR-2'>
          <div className = 'column-1 dF-C-cc'>
            <p>{ dataPage.text2 }</p>

            <Instruction dataPage = { dataPage.instruction } />
          </div>

          <div className = 'column-2 dF-C-cc'>
            <button className = 'buttonVideo' onClick = { this.showModal }>
              <img
                alt = 'Imagen Corporativa'
                className = 'imageFooter'
                src = { boxInfo.imgBg }/>
            </button>

            <div className = 'boxInfo-1 bg-color-2'>
              <h3 className = 'color-4'>{ boxInfo.title }</h3>
              <hr className = 'line-1 mT-1 mB-1'/>
              <p className = 'color-4'>{ boxInfo.text }</p>
            </div>
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction2 } />

        { /* Restricción de avance */ }
        <div className = { 'restrict ' + (endActivities === true ? 'dNone' : '') } />
        <div className = { 'restrict-2 ' + (endActivities === true ? 'dNone' : '') } />
      </div>
    );
  }
}

class Page7 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(6, end);
  }

  render() {
    const { dataPage, endActivities } = this.props;
    // console.log('Actividad finalizada: ' + endActivities);

    return (
      <div className = 'pageContent animated fadeIn'>
        <div className = 'section-1 dF-C-cc mB-2'>
          <hr className = 'line-2 mB-1' />
          <h2 className = 'mB-1 tCenter' dangerouslySetInnerHTML = {{ __html: dataPage.title }} />
          <p className = 'tCenter'>{ dataPage.text }</p>
        </div>

        <InteractiveAudio dataPage={ dataPage.multimedia } isEnded = { this.isEnded } />

        { /* Restricción de avance */ }
        <div className = { 'restrict ' + (endActivities === true ? 'dNone' : '') } />
        <div className = { 'restrict-2 ' + (endActivities === true ? 'dNone' : '') } />
      </div>
    );
  }
}

class Page8 extends Component {
  state = {
    showModal: false,
    showInfo: 0
  }

  handleClick = () => {
    this.setState({
      showModal: !this.state.showModal,
      showInfo: 0
    });
  }

  hideModal = (closeModal) => {
    this.setState({
      showModal: closeModal,
      showInfo: 0
    });
  }

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(7, end);
  }

  render() {
    const { dataPage, endActivities } = this.props;
    // console.log('Actividad finalizada: ' + endActivities);

    return (
      <div className = 'pageContent animated fadeIn'>
        <div className = 'section-1 dF-C-cc mB-2'>
          <hr className = 'line-2 mB-1' />
          <h2 className = 'mB-1 tCenter' dangerouslySetInnerHTML = {{ __html: dataPage.title }} />
          <p className = 'tCenter'>{ dataPage.text }</p>
        </div>

        <DraggableWords multimedia = { dataPage.multimedia } handleClick = { this.handleClick } isEnded = { this.isEnded } />

        <Instruction dataPage = { dataPage.instruction } />

        <ModalCircle dataPage = { dataPage.multimedia.content } hideModal = { this.hideModal } showInfo = { this.state.showInfo } showModal = { this.state.showModal }/>

        { /* Restricción de avance */ }
        <div className = { 'restrict ' + (endActivities === true ? 'dNone' : '') } />
        <div className = { 'restrict-2 ' + (endActivities === true ? 'dNone' : '') } />
      </div>
    );
  }
}

class Page9 extends Component {
  state = {
    showModal: false,
    showInfo: 0
  }

  handleClick = (e) => {
    const { dataPage, checkEndActivity } = this.props;

    this.setState({
      showModal: !this.state.showModal,
      showInfo: parseInt(e.currentTarget.id)
    });

    document.getElementById(e.currentTarget.id).classList.add('visited');

    if (parseInt(e.currentTarget.id) === dataPage.multimedia.button.length - 1) {
      // CUANDO NO SE ENVIA A COMPONENTES INTERNOS LA FUNCION SE PASA DE LA PROP
      checkEndActivity(8, true); // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
    }
  }

  hideModal = (closeModal) => {
    this.setState({
      showModal: closeModal,
      showInfo: 0
    });
  }

  render() {
    const { dataPage, endActivities } = this.props;
    console.log('Actividad finalizada: ' + endActivities);
    // console.log(this.state);

    return (
      <div className = 'pageContent animated fadeIn'>
        <div className = 'section-1 dF-C-cc mB-3'>
          <hr className = 'line-2 mB-1' />
          <h2 className = 'mB-1 tCenter' dangerouslySetInnerHTML = {{ __html: dataPage.title }} />
          <p className = 'tCenter mB-1'>{ dataPage.text }</p>
          <p className = 'tCenter'>{ dataPage.text2 }</p>
        </div>

        <div className = 'contentBox dF-R-cc'>
          {
            dataPage.multimedia.button.map( (item, i) =>
              <button className = 'buttonModal mL-1 mR-1' key = { item.numBtn } onClick = { this.handleClick } id = { i } >
                <img
                  alt = 'Modal Circle'
                  className = 'image mB-1'
                  src = { item.img }
                  style = { { 'width': '145px' } } />
                <h5 className = 'fw-4' dangerouslySetInnerHTML = {{ __html: item.text }} />
              </button>
            )
          }
        </div>

        <ModalCircle dataPage = { dataPage.multimedia.content } hideModal = { this.hideModal } showInfo = { this.state.showInfo } showModal = { this.state.showModal }/>

        <Instruction dataPage = { dataPage.instruction } />

        { /* Restricción de avance */ }
        <div className = { 'restrict ' + (endActivities === true ? 'dNone' : '') } />
        <div className = { 'restrict-2 ' + (endActivities === true ? 'dNone' : '') } />
      </div>
    );
  }
}

class Page10 extends Component {
  state = {
    showModal: false,
    showInfo: 0
  }

  handleClick = () => {
    this.setState({
      showModal: !this.state.showModal,
      showInfo: 0
    });
    // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
    const { checkEndActivity } = this.props;
    checkEndActivity(9, true);
  }

  hideModal = (closeModal) => {
    this.setState({
      showModal: closeModal,
      showInfo: 0
    });
  }


  isEnded = (end) => {

  }

  render() {
    const { dataPage, endActivities } = this.props;
    const { boxInfo } = this.props.dataPage;
    // console.log('Actividad finalizada: ' + endActivities);

    return (
      <div className = 'pageContent animated fadeIn'>
        { /* MUESTRA LA MODAL DE ACUERDO AL ESTADO openModal */ }
        { this.state.showModal !== false ? <ModalCircleInfo dataPage = { dataPage } showModal = {this.state.showModal} handleClick = { this.handleClick } hideModal = { this.hideModal } isEnded = { this.isEnded } /> : null }

        <div className = 'section-1 dF-C-cc mB-2'>
          <hr className = 'line-2 mB-1' />
          <h2 className = 'mB-1 tCenter' dangerouslySetInnerHTML = {{ __html: dataPage.title }} />
          <p className = 'tCenter'>{ dataPage.text }</p>
        </div>

        <div className = 'two-column dF-R-cc bg-particles pL-2 pR-2'>
          <div className = 'column-1 dF-C-cc' dangerouslySetInnerHTML = {{ __html: dataPage.text2 }}>
          </div>

          <div className = 'column-2 dF-C-cc'>
            <img
              alt = 'Imagen'
              className = 'image'
              src = { boxInfo.imgBg }/>

            <div className = 'boxInfo-1 bg-color-2'>
              <h3 className = 'color-4'>{ boxInfo.title }</h3>
              <hr className = 'line-1 mT-1 mB-1'/>
              <p className = 'color-4'>{ boxInfo.text }</p>
              <button className = 'buttonModal mT-1' onClick = { this.handleClick }>
                Ver Artículo
              </button>
            </div>
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />

        { /* Restricción de avance */ }
        <div className = { 'restrict ' + (endActivities === true ? 'dNone' : '') } />
        <div className = { 'restrict-2 ' + (endActivities === true ? 'dNone' : '') } />
      </div>
    );
  }
}

class Page11 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(10, end);
  }

  render() {
    const { dataPage, endActivities } = this.props;
    // console.log('Actividad finalizada: ' + endActivities);

    return (
      <div className = 'pageContent animated fadeIn'>
        <div className = 'section-1 dF-C-cc'>
          <hr className = 'line-2 mB-1' />
          <h2 className = 'mB-1 tCenter' dangerouslySetInnerHTML = {{ __html: dataPage.title }} />
          <p className = 'tCenter'>{ dataPage.text }</p>
        </div>

        <InteractiveCircle dataPage = { dataPage } isEnded = { this.isEnded } />

        <Instruction dataPage = { dataPage.instruction } />

        { /* Restricción de avance */ }
        <div className = { 'restrict ' + (endActivities === true ? 'dNone' : '') } />
        <div className = { 'restrict-2 ' + (endActivities === true ? 'dNone' : '') } />
      </div>
    );
  }
}

class Page12 extends Component {
  state = {
    openModal: false,
    warningAnimation: true
  }

  // FUNCION PARA ABRIR MODAL
  showModal = () => {
    this.setState({
      openModal: !this.state.openModal,
      warningAnimation: !this.state.warningAnimation
    });
  }

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(11, end);
  }

  render() {
    const { dataPage, endActivities } = this.props;
    const { boxInfo } = this.props.dataPage;
    // console.log('Actividad finalizada: ' + endActivities);

    return (
      <div className = 'pageContent animated fadeIn'>
        { /* MUESTRA LA MODAL DE ACUERDO AL ESTADO openModal */ }
        { this.state.openModal !== false ? <ModalVideo dataModal={ dataPage } showModal={ this.showModal } isEnded = { this.isEnded } /> : null }

        <div className = 'section-1 dF-C-cc mB-2'>
          <hr className = 'line-2 mB-1' />
          <h2 className = 'mB-1 tCenter' dangerouslySetInnerHTML = {{ __html: dataPage.title }} />
          <p className = 'tCenter'>{ dataPage.text }</p>
        </div>

        <div className = 'two-column dF-R-cc bg-particles pL-2 pR-2'>
          <div className = 'column-1 dF-C-cc'>
            <p>{ dataPage.text2 }</p>

            <Instruction dataPage = { dataPage.instruction } />
          </div>

          <div className = 'column-2 dF-C-cc'>
            <button className = 'buttonVideo' onClick = { this.showModal }>
              <img
                alt = 'Imagen Corporativa'
                className = 'imageFooter'
                src = { boxInfo.imgBg }/>
            </button>

            <div className = 'boxInfo-1 bg-color-2'>
              <h3 className = 'color-4'>{ boxInfo.title }</h3>
              <hr className = 'line-1 mT-1 mB-1'/>
              <p className = 'color-4'>{ boxInfo.text }</p>
            </div>
          </div>
        </div>

        { /* Restricción de avance */ }
        <div className = { 'restrict ' + (endActivities === true ? 'dNone' : '') } />
        <div className = { 'restrict-2 ' + (endActivities === true ? 'dNone' : '') } />
      </div>
    );
  }
}

class Page13 extends Component {
  state = {
    showModal: false,
    showInfo: 0
  }

  handleClick = (e) => {
    const { dataPage, checkEndActivity } = this.props;

    this.setState({
      showModal: !this.state.showModal,
      showInfo: parseInt(e.currentTarget.id)
    });

    // document.getElementById(e.currentTarget.id).classList.add('visited');

    if (parseInt(e.currentTarget.id) === dataPage.multimedia.button.length - 1) {
      // CUANDO NO SE ENVIA A COMPONENTES INTERNOS LA FUNCION SE PASA DE LA PROP
      checkEndActivity(12, true); // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
    }
  }

  hideModal = (closeModal) => {
    this.setState({
      showModal: closeModal,
      showInfo: 0
    });
  }

  render() {
    const { dataPage, endActivities } = this.props;
    console.log('Actividad finalizada: ' + endActivities);
    // console.log(this.state);

    return (
      <div className = 'pageContent animated fadeIn'>
        <div className = 'section-1 dF-C-cc mB-3'>
          <hr className = 'line-2 mB-1' />
          <h2 className = 'mB-1 tCenter' dangerouslySetInnerHTML = {{ __html: dataPage.title }} />
          <p className = 'tCenter mB-1'>{ dataPage.text }</p>
          <p className = 'tCenter'>{ dataPage.text2 }</p>
        </div>

        <div className = 'contentBox dF-R-cc'>
          {
            dataPage.multimedia.button.map( (item, i) =>
              <button className = 'buttonModal-2 mL-1 mR-1' key = { item.numBtn } onClick = { this.handleClick } id = { i } style = { { 'borderColor': item.color } } >
                <img
                  alt = 'Modal Circle'
                  className = 'image'
                  src = { item.img }
                  style = { { 'width': '145px' } } />
                <h3 className = 'fw-4' dangerouslySetInnerHTML = {{ __html: item.text }} />
              </button>
            )
          }
        </div>

        <ModalCircle dataPage = { dataPage.multimedia.content } hideModal = { this.hideModal } showInfo = { this.state.showInfo } showModal = { this.state.showModal }/>

        <Instruction dataPage = { dataPage.instruction } />

        { /* Restricción de avance */ }
        <div className = { 'restrict ' + (endActivities === true ? 'dNone' : '') } />
        <div className = { 'restrict-2 ' + (endActivities === true ? 'dNone' : '') } />
      </div>
    );
  }
}

class Page14 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(13, end);
  }

  render() {
    const { dataPage, endActivities } = this.props;
    // console.log('Actividad finalizada: ' + endActivities);

    return (
      <div className = 'pageContent animated fadeIn'>
        <div className = 'section-1 dF-C-cc'>
          <hr className = 'line-2 mB-1' />
          <h2 className = 'mB-1 tCenter' dangerouslySetInnerHTML = {{ __html: dataPage.title }} />
          <p className = 'tCenter'>{ dataPage.text }</p>
        </div>

        <InteractiveCircle2 dataPage = { dataPage } isEnded = { this.isEnded } />


        <Instruction dataPage = { dataPage.instruction } />

        { /* Restricción de avance */ }
        <div className = { 'restrict ' + (endActivities === true ? 'dNone' : '') } />
        <div className = { 'restrict-2 ' + (endActivities === true ? 'dNone' : '') } />
      </div>
    );
  }
}

class Page15 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(14, end);
  }

  render() {
    const { dataPage, endActivities } = this.props;
    // console.log('Actividad finalizada: ' + endActivities);

    return (
      <div className = 'pageContent animated fadeIn'>
        <div className = 'section-1 dF-C-cc mB-2'>
          <hr className = 'line-2 mB-1' />
          <h2 className = 'mB-1 tCenter' dangerouslySetInnerHTML = {{ __html: dataPage.title }} />
          <p className = 'tCenter'>{ dataPage.text }</p>
        </div>

        <SlidesUpDown dataPage = { dataPage.multimedia } isEnded = { this.isEnded } />

        <Instruction dataPage = { dataPage.instruction } />

        { /* Restricción de avance */ }
        <div className = { 'restrict ' + (endActivities === true ? 'dNone' : '') } />
        <div className = { 'restrict-2 ' + (endActivities === true ? 'dNone' : '') } />
      </div>
    );
  }
}

class Page16 extends Component {
  state = {
    openModal: false,
    warningAnimation: true
  }

  // FUNCION PARA ABRIR MODAL
  showModal = () => {
    this.setState({
      openModal: !this.state.openModal,
      warningAnimation: !this.state.warningAnimation
    });
  }

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(15, end);
  }

  render() {
    const { dataPage, endActivities } = this.props;
    const { boxInfo } = this.props.dataPage;
    // console.log('Actividad finalizada: ' + endActivities);

    return (
      <div className = 'pageContent animated fadeIn'>
        { /* MUESTRA LA MODAL DE ACUERDO AL ESTADO openModal */ }
        { this.state.openModal !== false ? <ModalVideo dataModal={ dataPage } showModal={ this.showModal } isEnded = { this.isEnded } /> : null }

        <div className = 'section-1 dF-C-cc mB-2'>
          <hr className = 'line-2 mB-1' />
          <h2 className = 'mB-1 tCenter' dangerouslySetInnerHTML = {{ __html: dataPage.title }} />
          <p className = 'tCenter'>{ dataPage.text }</p>
        </div>

        <div className = 'two-column dF-R-cc bg-particles pL-2 pR-2'>
          <div className = 'column-1 dF-C-cc'>
            <p>{ dataPage.text2 }</p>

            <Instruction dataPage = { dataPage.instruction } />
          </div>

          <div className = 'column-2 dF-C-cc'>
            <button className = 'buttonVideo' onClick = { this.showModal }>
              <img
                alt = 'Imagen Corporativa'
                className = 'imageFooter'
                src = { boxInfo.imgBg }/>
            </button>

            <div className = 'boxInfo-1 bg-color-2'>
              <h3 className = 'color-4'>{ boxInfo.title }</h3>
              <hr className = 'line-1 mT-1 mB-1'/>
              <p className = 'color-4'>{ boxInfo.text }</p>
            </div>
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction2 } />
        <Instruction dataPage = { dataPage.instruction3 } />

        { /* Restricción de avance */ }
        <div className = { 'restrict ' + (endActivities === true ? 'dNone' : '') } />
        <div className = { 'restrict-2 ' + (endActivities === true ? 'dNone' : '') } />
      </div>
    );
  }
}

class Page17 extends Component {
  render() {
    const { dataPage } = this.props;
    const { boxInfo } = this.props.dataPage;
    return (
      <div className = 'pageContent animated fadeIn'>
        <div className = 'section-1 dF-C-cc mB-2'>
          <hr className = 'line-2 mB-1' />
          <h2 className = 'mB-1 tCenter' dangerouslySetInnerHTML = {{ __html: dataPage.title }} />
          <p className = 'tCenter'>{ dataPage.text }</p>
        </div>

        <div className = 'two-column dF-R-cc bg-particles pL-2 pR-2'>
          <div className = 'column-1 dF-C-cc pB-3'>
            <p dangerouslySetInnerHTML = { { __html: dataPage.text2 } } />
          </div>

          <div className = 'column-2 dF-C-cc'>
            <img
              alt = 'Imagen Corporativa'
              className = 'imageFooter'
              src = { boxInfo.imgBg }/>
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page18 extends Component {
  // FUNCION PARA ENVIAR EL INDEX ACTUALIZADO Y FINALIZAR EL CURSO
  endCourse = e => {
    e.preventDefault();
    this.props.endCourse();
  }

  render() {
    const { dataPage } = this.props;
    const { boxInfo } = this.props.dataPage;

    return (
      <div className = { 'pageContent ' + (dataPage.type) + ' animated fadeIn' }>
        { /* ENVIO DEL ESTADO DE INICIO O FINAL DE LA UNIDAD */ }
        <div className = 'two-column dF-R-cc bg-particles mT-6 pL-2 pR-2'>
          <div className = 'column-1 dF-C-cs mR-1'>
            <img
              alt = 'Imagen Corporativa'
              className = 'imageLogo mB-05'
              src = { dataPage.logoCourse }/>

            <h1 className = 'mB-025'>{ dataPage.title }</h1>
            <h2 className = 'mB-2 fw-4'>{ dataPage.subTitle }</h2>
            <p className = 'mB-1'>{ dataPage.module }</p>
            <p className = 'mB-1'>{ dataPage.text }</p>
            <p className = 'mB-3 mL-025' dangerouslySetInnerHTML = { { __html: dataPage.text2 } } />
          </div>

          <div className = 'column-2 dF-C-cc'>
            <img
              alt = 'Imagen Corporativa'
              className = 'imageFooter'
              src = { boxInfo.imgBg }/>

            <div className = 'boxInfo-1 bg-color-2'>
              <h3 className = 'color-4'>{ boxInfo.title }</h3>
              <hr className = 'line-1 mT-1 mB-1'/>
              <p className = 'color-4'>{ boxInfo.text }</p>
            </div>
          </div>
        </div>
        <div className = 'dF-R-cc'>
          <button
            className = 'buttonStart pT-05 pB-05 pulse'
            id = 'btnEnd'
            onClick = { this.endCourse }>
            { dataPage.buttonStart }
          </button>
        </div>
      </div>
    );
  }
}

export {
  Cover, Page1, Page2,
  Page3, Page4, Page5,
  Page6, Page7, Page8,
  Page9, Page10, Page11,
  Page12, Page13, Page14,
  Page15, Page16, Page17,
  Page18 };
