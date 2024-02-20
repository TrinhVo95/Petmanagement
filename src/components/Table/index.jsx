import React from "react";
import { TableWrapper } from "./styled";
import { BiSolidCheckCircle } from "react-icons/bi";

const Table = ({ datas }) => {
  return (
    <TableWrapper className="table table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">Type</th>
          <th scope="col">Weight</th>
          <th scope="col">Length</th>
          <th scope="col">Breed</th>
          <th scope="col">Vaccinated</th>
          <th scope="col">Dewormed</th>
          <th scope="col">Sterilized</th>
          <th scope="col">Date Added</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody id="tbody" className="table-body">
        {datas.map((data) => {
          return (
            <tr key={data.petID}>
              <th scope="row">{data.petID}</th>
              <td>{data.petname}</td>
              <td>{data.age}</td>
              <td>{data.type}</td>
              <td>{data.weight} kg</td>
              <td>{data.length} cm</td>
              <td>{data.breed}</td>

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
              <td style={{ display: "flex", justifyContent: "center" }}>
                <button type="button" className=" btn-success">
                  Update
                </button>
                <button type="button" className=" btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          );
        })}

        {/* <tr>
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
            <button type="button" className=" btn-danger">
              Delete
            </button>
          </td>
        </tr> */}
      </tbody>
    </TableWrapper>
  );
};

export default Table;
