import React, { Component } from 'react';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './Header.scss';

// CREATING LIBRARY ICONS
library.add(fas, fab, far);

class Header extends Component {
  state = {
    actualUnit: this.props.unitActual,
    nextUnit: this.props.nextUnit,
    menuPosition: this.props.menuPosition
  }
  // FUNCION PARA IR AL MENU PPAL
  goToMenu = e => {
    const { actualIndex, DataCourse, updateNextUnit, checkEndUnit, checkEnabledUnit } = this.props;

    const { goToPage } = this.props;

    goToPage(1); // SI EL MENU QUEDA EN LA PAGE1 o 2 SI QUEDA EN LA PAGE2

    switch (actualIndex) {
      case 3:
        updateNextUnit(2, DataCourse.page1.Units[1].position);
        checkEndUnit(0);
        checkEnabledUnit(1);
        break;

      case 5:
        updateNextUnit(3, DataCourse.page1.Units[2].position);
        checkEndUnit(1);
        checkEnabledUnit(2);
        break;

      case 6:
        updateNextUnit(4, DataCourse.page1.Units[3].position);
        checkEndUnit(2);
        checkEnabledUnit(3);
        break;

      case 11:
        updateNextUnit(5, DataCourse.page1.Units[4].position);
        checkEndUnit(3);
        checkEnabledUnit(4);
        break;

      case 13:
        updateNextUnit(6, DataCourse.page1.Units[5].position);
        checkEndUnit(4);
        checkEnabledUnit(5);
        break;

      case 15:
        updateNextUnit(7, DataCourse.page1.Units[6].position);
        checkEndUnit(5);
        checkEnabledUnit(6);
        break;

      case 16:
        updateNextUnit(8, DataCourse.page1.Units[7].position);
        checkEndUnit(6);
        checkEnabledUnit(7);
        break;

      case 18:
        checkEndUnit(7);
        // checkEnabledUnit(4);
        break;

      default:
        if (actualIndex === 2) {
          updateNextUnit(1, DataCourse.page1.Units[0].position);
        } else if (actualIndex === 4) {
          updateNextUnit(2, DataCourse.page1.Units[1].position);
        } else if (actualIndex > 6 && actualIndex < 10) {
          updateNextUnit(4, DataCourse.page1.Units[3].position);
        } else if (actualIndex === 12) {
          updateNextUnit(5, DataCourse.page1.Units[4].position);
        } else if (actualIndex === 14) {
          updateNextUnit(6, DataCourse.page1.Units[5].position);
        } else if (actualIndex === 17) {
          updateNextUnit(7, DataCourse.page1.Units[6].position);
        }
        break;

    }
  }

  setActualUnit = () => {
    this.setState({actualUnit: this.props.unitActual})
  }

  // SHOW BUTTON HEADER
  showHeader = () => {
    const { actualIndex, limitNavigation } = this.props;
    // console.log(lastPage);
    if (actualIndex !== 0 && actualIndex !== 1 && actualIndex !== limitNavigation) {
      return (
        <button
          className = { 'buttonMenu ' + (actualIndex === 3 || actualIndex === 5 || actualIndex === 6  || actualIndex === 11 || actualIndex === 13 || actualIndex === 15 || actualIndex === 16 ? 'pulse btnInLastPage' : '') }
          id = 'btnMenu'
          onClick = { this.goToMenu } >
          <FontAwesomeIcon
            className = 'iconButton'
            icon = { ['fas', 'bars'] }
            size = '2x' />
        </button>
      )
    } else {
      return null
    }
  }

  render() {
    return (
      <div className = 'header animated fadeIn'>
        { this.showHeader() }
      </div>
    );
  }
}

export default Header;

// className = { 'buttonMenu ' + (lastPage === true ? 'signal': '')}
