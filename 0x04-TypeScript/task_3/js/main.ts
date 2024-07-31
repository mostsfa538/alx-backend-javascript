import { RowID, RowElement } from './interface'

import * as CRUD from './crud'


let row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva"
}
const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = {age: 23, ...row};

CRUD.updateRow(newRowID, updatedRow);

CRUD.deleteRow(125);
