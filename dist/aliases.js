var ContactStatus;
(function (ContactStatus) {
    ContactStatus["Active"] = "active";
    ContactStatus["Inactive"] = "inactive";
    ContactStatus["New"] = "new    ";
})(ContactStatus || (ContactStatus = {}));
let secondaryContact = {
    bithDate: new Date("12-12-2012"),
    name: "Ankit",
    id: 2,
    status: ContactStatus.Active,
};
function clone(source) {
    return Object.apply({}, source);
}
const a = { id: 1, name: "Ankit", status: ContactStatus.Active };
const c = clone(a);
const dateRange = { startDate: Date.now(), endDate: Date.now() };
const dateCopy = clone(dateRange);
