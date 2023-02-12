import PropTypes from 'prop-types';

// ========== styles ==========

import { Item, Bullet, DeleteBtn } from './ContactItem.styled';

const ContactItem = ({ id, name, number, deleteItem }) => (
  <Item>
    <Bullet></Bullet>
    {name}: {number}
    <DeleteBtn onClick={() => deleteItem(id)} type="button">
      Delete
    </DeleteBtn>
  </Item>
);

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
};
