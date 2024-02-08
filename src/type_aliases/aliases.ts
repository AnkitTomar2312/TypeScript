interface Contact extends Address {
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
  New = "new",
}

let secondaryContact: Contact = {
  bithDate: new Date("12-12-2012"),
  name: "Ankit",
  id: 2,
  line1: "w2/1112 Damodarnagar",
  pincode: 208027,
  status: ContactStatus.Active,
};

type ContactName = string;
