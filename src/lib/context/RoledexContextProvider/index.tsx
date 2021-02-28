import React, { useCallback, useEffect, useState } from "react";
import { ContactInputType } from "../../../types/contact";
import LocalStorageService from "../../service/LocalStorageService";

type RoledexContextProviderPropType = {
  children: React.ReactChild | React.ReactChild[];
};

type RoledexContextType = {
  contactList: string[];
  favoriteContactList: string[];
  createContact: (data: ContactInputType) => void;
  updateContact: (id: string, data: ContactInputType) => void;
  deleteContact: (id: string) => void;
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
  checkIsFavorited: (id: string) => boolean;
};

export const RoledexContext = React.createContext<RoledexContextType>({
  contactList: [],
  favoriteContactList: [],
  createContact: () => {},
  updateContact: () => {},
  deleteContact: () => {},
  addFavorite: () => {},
  removeFavorite: () => {},
  checkIsFavorited: () => false,
});

function RoledexContextProvider({ children }: RoledexContextProviderPropType) {
  const [contactList, setContactList] = useState<string[]>([]);
  const [favoriteContactList, setFavoriteContactList] = useState<string[]>([]);

  const createContact = useCallback((data: ContactInputType) => {
    const { id } = LocalStorageService.shared.createContact(data);
    setContactList((prev) => [...prev, id]);
  }, []);

  const updateContact = useCallback((targetId: string, data: ContactInputType) => {
    LocalStorageService.shared.updateContact(targetId, data);
    setContactList((prev) => [...prev]);
  }, []);

  const deleteContact = useCallback((targetId: string) => {
    LocalStorageService.shared.deleteContact(targetId);
    setFavoriteContactList((prev) => prev.filter((id) => id !== targetId));
    setContactList((prev) => prev.filter((id) => id !== targetId));
  }, []);

  const addFavorite = useCallback((targetId: string) => {
    setFavoriteContactList((prev) => [...prev, targetId]);
  }, []);

  const removeFavorite = useCallback((targetId: string) => {
    setFavoriteContactList((prev) => prev.filter((id) => id !== targetId));
  }, []);

  const checkIsFavorited = useCallback(
    (targetId: string) => {
      return favoriteContactList.includes(targetId);
    },
    [favoriteContactList]
  );

  useEffect(() => {
    const result = LocalStorageService.shared.init();
    setContactList(result.contactList);
    setFavoriteContactList(result.favoriteContactList);
  }, []);

  return (
    <RoledexContext.Provider
      value={{
        contactList,
        favoriteContactList,
        createContact,
        updateContact,
        deleteContact,
        addFavorite,
        removeFavorite,
        checkIsFavorited,
      }}
    >
      {children}
    </RoledexContext.Provider>
  );
}

export default React.memo(RoledexContextProvider);
