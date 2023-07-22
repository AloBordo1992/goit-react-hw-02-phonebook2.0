import { Component } from 'react';
import { ContactItem } from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape(PropTypes.string.isRequired).isRequired
    ).isRequired,
  };

  render() {
    return (
      <ul className={css.contactList}>
        {this.props.contacts.map(contact => {
          return (
            <ContactItem
              name={contact.name}
              number={contact.number}
              key={contact.id}
              id={contact.id}
              OnBtnDelClick={this.props.OnBtnDelClick}
            />
          );
        })}
      </ul>
    );
  }
}
