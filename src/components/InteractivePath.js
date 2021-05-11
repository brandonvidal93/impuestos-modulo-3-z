import React, { Component } from 'react';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './InteractivePath.scss';

library.add(fas, fab, far);

class InteractivePath extends Component {

  constructor(props) {
    super(props);
    this.state = {
      actualItem: 0,
      countItem: 0
    }
  }

  showItems = () => {
    const { dataPage } = this.props;
    const ITEM = dataPage.multimediaCircular.buttons.map( (item, i) => {
      // console.log(item);
      return(
        <div className = 'circleItems' key = { i } style = { { 'top': item.top, 'left': item.left } }>
          <button className = { 'circleButton ' + ( i + 1 !== 1 ? 'disabledSolid' : '')} id = { i + 1 } onClick = { this.enableItem }>
            { item.orientation === 'up' ? <FontAwesomeIcon icon='chevron-up' inverse /> : null }
            { item.orientation === 'down' ? <FontAwesomeIcon icon='chevron-down' inverse /> : null }
            { item.orientation === 'left' ? <FontAwesomeIcon icon='chevron-left' inverse /> : null }
            { item.orientation === 'right' ? <FontAwesomeIcon icon='chevron-right' inverse /> : null }
          </button>
        </div>
      );
    } );
    return ITEM;
  }

  enableItem = (e) => {
    const { multimediaCircular } = this.props.dataPage;
    e.preventDefault();
    const IDITEM = e.currentTarget.id;
    let idItem = parseInt(IDITEM);

    console.log(idItem);

    document.getElementById(idItem).classList.add('visited');
    document.getElementById('globe-' + idItem).classList.remove('dNone');

    if (idItem <= multimediaCircular.buttons.length) {
      if (idItem !== this.state.actualItem) {
        this.setState({ actualItem : idItem });
        if (idItem !== multimediaCircular.buttons.length) {
          let nextItem = document.getElementById(idItem + 1);
          nextItem.classList.remove('disabledSolid');
          this.setState({ countItem: this.state.countItem + 1 });
        } else {
          this.setState({ countItem: this.state.countItem + 1 });
          this.props.isEnded(true); // SI LLEGA EL FINAL DE LA ACT ENVÍA EL TRUE
        }
      }


    }

    if (this.state.countItem === multimediaCircular.buttons.length) {
      this.setState({ countItem: multimediaCircular.buttons.length });
    }
  }

  render() {
    const { multimediaCircular } = this.props.dataPage;
    return (
      <div className = 'interactivePath bg-path'>
        {
          multimediaCircular.globes.map( (item, i) => {
            return(
              <div
                key = { i }
                className = { 'globeBg dF-C-cs ' + (item.itemInfo.posTriang === 'down' ? 'border-down-bg' : 'border-up-bg')}
                style = { { 'width': item.itemInfo.posGlobe.size, 'top': item.itemInfo.posGlobe.posY, 'left': item.itemInfo.posGlobe.posX } }>

                <p className = 'tCenter' dangerouslySetInnerHTML = { { __html: item.itemInfo.text } } />
              </div>
            )
          })
        }

        {
          multimediaCircular.globes.map( (item, i) => {
            return(
              <div
                key = { i }
                className = { 'itemGlobe animated fadeIn dF-C-cs ' + (item.itemInfo.posTriang === 'down' ? 'border-down ' : 'border-up ') + (i !== 0 ? 'dNone' : '')}
                id = {'globe-' + i}
                style = { { 'width': item.itemInfo.posGlobe.size, 'top': item.itemInfo.posGlobe.posY, 'left': item.itemInfo.posGlobe.posX } }>

                <p className = 'tCenter' dangerouslySetInnerHTML = { { __html: item.itemInfo.text } } />
              </div>
            )
          })
        }

        { this.showItems() }
      </div>
    );
  }
}

export default InteractivePath;

// {
//   // MOSTRAR LOS GLOBOS DE TEXTO
//   this.state.openGlobe !== false ?
//   <div className = 'bgItemGlobe'>
//     <div
//       className = { 'itemGlobe animated dF-C-cs ' + (multimediaCircular.globes[actualItem - 1].itemInfo.posTriang === 'left' ? 'triang-izq fadeInRight' : 'triang-der fadeInLeft')}
//       style = { { 'width': multimediaCircular.globes[actualItem - 1].itemInfo.posGlobe.size, 'top': multimediaCircular.globes[actualItem - 1].itemInfo.posGlobe.posY, 'left': multimediaCircular.globes[actualItem - 1].itemInfo.posGlobe.posX } }>
//
//       <p className = 'color-4 mB-05'>{ multimediaCircular.globes[actualItem - 1].itemInfo.text }</p>
//
//       <p className = 'color-4'>{ multimediaCircular.globes[actualItem - 1].itemInfo.text2 }</p>
//     </div>
//   </div> : null
// }
