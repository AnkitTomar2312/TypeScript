interface Contact extends Address {
  id: number;
  name: string;
  bithDate?: Date;
}

interface Address {
  line1: string;
  pincode: number;
}

let primaryContact: Contact = {
  bithDate: new Date("12-12-2012"),
  name: "Ankit",
  id: 2,
  line1: "w2/1112 Damodarnagar",
  pincode: 208027,
};
