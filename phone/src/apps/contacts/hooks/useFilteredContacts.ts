import { useRecoilState } from 'recoil';
import { contactsState } from './state';

interface FilterdContactsProps {
  filteredContacts: string;
  setFilteredContacts: (contact: any) => void;
}

export const useFilteredContacts = (): FilterdContactsProps => {
  const [filteredContacts, setFilteredContacts] = useRecoilState(contactsState.filterContacts);
  return { filteredContacts, setFilteredContacts };
};
