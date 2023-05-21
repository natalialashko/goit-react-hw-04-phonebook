
export const ContactsListItem =({name, id, number})=> {
    return (
        <li key={id}> 
            <span>{name}   </span>
            <span>{number}</span>
            <button>Delete</button>
        </li>
    )
}