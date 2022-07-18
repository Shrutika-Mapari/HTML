import { Injectable } from '@angular/core';

export namespace Contacts{
@Injectable({
  providedIn: 'root'
})
export class AddNewContactService {

  constructor() { }
  DisplayAddNewContact():string
  {
    return "New Contact Added";
  }
}

@Injectable({
  providedIn: 'root'
})
export class EditContactService {

  constructor() { }
  DisplayEditContact():string
  {
    return "Contact Updated";
  }
}

@Injectable({
  providedIn: 'root'
})
export class DeleteContactService {

  constructor() { }
  DisplayDeleteContact():string
  {
    return "Contact Deleted";
  }
}

@Injectable({
  providedIn: 'root'
})
export class ListContactService {

  constructor() { }
  DisplayListContact():string
  {
    return "Contact list";
  }
}


}
