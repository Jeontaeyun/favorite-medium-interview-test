import { v1 } from "uuid";

import { ContactType, ContactInputType } from "../../types/contact";

enum LOCAL_STORAGE_KEY {
  CONTACT = "CONTACT",
  CONTACT_LIST = "CONTACT_LIST",
  FAVORITE_CONTACT_LIST = "FAVORITE_CONTACT_LIST",
}

class LocalStorageService {
  public isLoaded = false;
  public isLoading = false;
  private static _instance: LocalStorageService;

  private constructor() {
    LocalStorageService._instance = this;
  }

  public static get shared() {
    if (!LocalStorageService._instance) {
      LocalStorageService._instance = new LocalStorageService();
    }
    return LocalStorageService._instance;
  }

  public init = () => {
    this.isLoading = true;
    const contactList: string[] = this.parseJSON(localStorage.getItem(LOCAL_STORAGE_KEY.CONTACT_LIST), []);
    const favoriteContactList: string[] = this.parseJSON(
      localStorage.getItem(LOCAL_STORAGE_KEY.FAVORITE_CONTACT_LIST),
      []
    );

    return { contactList, favoriteContactList };
  };

  public getContactWithId = (id: string): ContactType | null => {
    const contact: ContactType | null = this.parseJSON(localStorage.getItem(LOCAL_STORAGE_KEY.CONTACT + id), null);
    return contact;
  };

  public createContact = (data: ContactInputType): ContactType => {
    const id = v1();
    const newContact = { id, ...data };
    const stringifiedContact = JSON.stringify(newContact);

    localStorage.setItem(LOCAL_STORAGE_KEY.CONTACT + id, stringifiedContact);
    this.addContactToList(id);

    return newContact;
  };

  public updateContact = (id: string, data: ContactInputType): ContactType => {
    const updatedContact = { id, ...data };
    const stringifiedContact = JSON.stringify(updatedContact);

    localStorage.setItem(LOCAL_STORAGE_KEY.CONTACT + id, stringifiedContact);
    return updatedContact;
  };

  public deleteContact = (id: string): boolean => {
    localStorage.removeItem(LOCAL_STORAGE_KEY + id);

    this.removeContactFromList(id);
    this.removeFavorite(id);

    return true;
  };

  public getContactList = (): string[] => {
    return this.parseJSON(localStorage.getItem(LOCAL_STORAGE_KEY.CONTACT_LIST), []);
  };

  public setContactList = (contactList: string[]): string[] => {
    const stringifiedContactList = JSON.stringify(contactList);
    localStorage.setItem(LOCAL_STORAGE_KEY.CONTACT_LIST, stringifiedContactList);

    return contactList;
  };

  public addContactToList = (id: string) => {
    const previousContactList = this.getContactList();
    this.setContactList([id, ...previousContactList]);
  };

  public removeContactFromList = (id: string) => {
    const previousContactList = this.getContactList();
    const newContactList = previousContactList.filter((item) => item !== id);
    this.setContactList(newContactList);
  };

  public getFavoriteContactList = (): string[] => {
    return this.parseJSON(localStorage.getItem(LOCAL_STORAGE_KEY.FAVORITE_CONTACT_LIST), []);
  };

  public setFavoriteContactList = (contactList: string[]): string[] => {
    const stringifiedContactList = JSON.stringify(contactList);
    localStorage.setItem(LOCAL_STORAGE_KEY.FAVORITE_CONTACT_LIST, stringifiedContactList);

    return contactList;
  };

  public addFavorite = (id: string) => {
    const previousFavoriteContactList = this.getFavoriteContactList();
    this.setFavoriteContactList([id, ...previousFavoriteContactList]);
  };

  public removeFavorite = (id: string) => {
    const previousFavoriteContactList = this.getFavoriteContactList();
    const newFavoriteContactList = previousFavoriteContactList.filter((item) => item !== id);
    this.setFavoriteContactList(newFavoriteContactList);
  };

  private parseJSON = (string: string | null, defaultValue: any = null) => {
    if (string) return JSON.parse(string);
    else return defaultValue;
  };
}

export default LocalStorageService;
