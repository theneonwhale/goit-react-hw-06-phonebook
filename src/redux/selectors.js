export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getVisibleContacts = state => {
  const items = getContacts(state);
  const filter = getFilter(state);
  const visibleContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
  return { contacts: visibleContacts };
};
