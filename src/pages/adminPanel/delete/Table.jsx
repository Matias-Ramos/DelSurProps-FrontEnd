import BtsTable from "react-bootstrap/Table";
import Modal from "./Modal.jsx";

const Table = ({ buildings, handleDelete }) => (
  <BtsTable responsive>
    <tbody>
      {buildings.map((building) => (
        <tr key={building.id}>
          <th>{building.location}</th>
          <td>
            <Modal building={building} handleDelete={handleDelete}/>
          </td>
        </tr>
      ))}
    </tbody>
  </BtsTable>
);

export default Table;
