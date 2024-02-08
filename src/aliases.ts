interface Contact {
  id: number;
  name: ContactName;
  bithDate?: Date;
  status: ContactStatus;
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

type ContactName = string;

function clone(source: Contact): Contact {
  return Object.apply({}, source);
}

const a: Contact = { id: 1, name: "Ankit", status: ContactStatus.Active };
const c = clone(a);
