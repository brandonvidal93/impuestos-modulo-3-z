import React, { Component } from 'react';

import './ChatPhone.scss';

class ChatPhone extends Component {
  trackScrolling = () => {
    const scrollChat = document.getElementById('chatMessageBox');
    if(scrollChat.offsetHeight + scrollChat.scrollTop === scrollChat.scrollHeight)
    {
      this.props.isEnded(true);
    }
  }

  render() {
    const { dataPage } = this.props;
    return (
      <div className = 'chatPhone'>
        <div className = 'messageBox dF-C-sst' onScroll = { this.trackScrolling } id = 'chatMessageBox'>
          {
            dataPage.multimedia.messages.map( (item, i) => {
              return(
                <p key = { i } className = { 'mB-05 ' + (item.side) } dangerouslySetInnerHTML = { { __html: item.text } } />
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default ChatPhone;
