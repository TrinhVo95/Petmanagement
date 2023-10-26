import React from "react";
import { TableWrapper } from "./styled";
import {
  BiSquareRounded,
  BiSolidCheckCircle,
  BiSolidXCircle,
} from "react-icons/bi";

const Table = () => {
  return (
    <TableWrapper class="table table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">Type</th>
          <th scope="col">Weight</th>
          <th scope="col">Length</th>
          <th scope="col">Breed</th>
          <th scope="col">Color</th>
          <th scope="col">Vaccinated</th>
          <th scope="col">Dewormed</th>
          <th scope="col">Sterilized</th>
          <th scope="col">Date Added</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody id="tbody" className="table-body">
        <tr>
          <th scope="row">P001</th>
          <td>Tom</td>
          <td>3</td>
          <td>Cat</td>
          <td>5 kg</td>
          <td>50 cm</td>
          <td>Tabby</td>
          <td>
            <BiSquareRounded />
          </td>
          <td>
            <BiSolidCheckCircle />
          </td>
          <td>
            <BiSolidCheckCircle />
          </td>
          <td>
            <BiSolidCheckCircle />
          </td>
          <td>01/03/2022</td>
          <td>
            <button type="button" class=" btn-danger">
              Delete
            </button>
          </td>
        </tr>
        <tr>
          <th scope="row">P002</th>
          <td>Tyke</td>
          <td>5</td>
          <td>Dog</td>
          <td>3 kg</td>
          <td>40 cm</td>
          <td>Mixed Breed</td>
          <td>
            <BiSquareRounded />
          </td>
          <td>
            <BiSolidXCircle />
          </td>
          <td>
            <BiSolidXCircle />
          </td>
          <td>
            <BiSolidXCircle />
          </td>
          <td>02/03/2022</td>
          <td>
            <button type="button" class=" btn-danger">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </TableWrapper>
  );
};

export default Table;
