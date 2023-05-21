import React from 'react';
import PropTypes from 'prop-types';
import { Contacts, ItemContacts, InfContacts, DeleteBtn } from './ListContacts.styled';
// import React from 'react';

export const ListContacts = ({arrayContacts, search, removeContact }) => {
  return (
    <Contacts>
        <ul>
          {arrayContacts
            .filter(item =>
              item.name.toLowerCase().includes(search.toLowerCase())
            )
            .map(({ id, name, number }) => (
              <ItemContacts key={id}>
                <InfContacts>
                  <div>
                    <span>{name}: </span>
                    <span>{number}</span>
                  </div>
                  <DeleteBtn onClick={() => removeContact(id)}>
                    Delete
                  </DeleteBtn>
                </InfContacts>
              </ItemContacts>
            ))}
        </ul>
      </Contacts>
  );
}

export default ListContacts;


// export class ListContacts extends Component {
//   render() {
//     return (
      // <Contacts>
      //   <ul>
      //     {this.props.arrayContacts
      //       .filter(item =>
      //         item.name.toLowerCase().includes(this.props.search.toLowerCase())
      //       )
      //       .map(({ id, name, number }) => (
      //         <ItemContacts key={id}>
      //           <InfContacts>
      //             <div>
      //               <span>{name}: </span>
      //               <span>{number}</span>
      //             </div>
      //             <DeleteBtn onClick={() => this.props.removeContact(id)}>
      //               Delete
      //             </DeleteBtn>
      //           </InfContacts>
      //         </ItemContacts>
      //       ))}
      //   </ul>
      // </Contacts>
//     );
//   }
// }
ListContacts.propTypes = {
  arrayContacts: PropTypes.array,
  search: PropTypes.string,
  removeContact: PropTypes.func
}