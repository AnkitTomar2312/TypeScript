type ContactName = string;
type ContactBirthDate = Date | number | string;
interface Contact {
  id: number;
  name: ContactName;
  bithDate?: ContactBirthDate;
  status?: ContactStatus;
}

interface Address {
  line1: string;
  pincode: number;
}

enum ContactStatus {
  Active = "active",
  Inactive = "inactive",
  New = "new    ",
}

let secondaryContact: Contact = {
  bithDate: new Date("12-12-2012"),
  name: "Ankit",
  id: 2,
  status: ContactStatus.Active,
};

function clone<T>(source: T): T {
  return Object.apply({}, source);
}

function getBirth(contact: Contact) {
  if (typeof contact.bithDate === "number") {
    return new Date(contact.bithDate);
  } else if (typeof contact.bithDate === "string") {
    return Date.parse(contact.bithDate);
  } else {
    return contact.bithDate;
  }
}

const a: Contact = { id: 1, name: "Ankit", status: ContactStatus.Active };
const c = clone(a);

const dateRange = { startDate: Date.now(), endDate: Date.now() };

const dateCopy = clone(dateRange);
