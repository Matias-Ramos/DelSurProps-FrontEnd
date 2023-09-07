import BtsTable from "react-bootstrap/Table";
import DeleteBtn from "./DeleteBtn.jsx";

const Table = ({ buildings, handleDelete }) => (
  <BtsTable responsive>
    <tbody>
      {buildings.map((building) => (
        <tr key={building.id}>
          <th>{building.location}</th>
          <td style={{display:"flex", justifyContent:"flex-end"}}>
            <DeleteBtn building={building} handleDelete={handleDelete}/>
          </td>
        </tr>
      ))}
    </tbody>
  </BtsTable>
);

export default Table;
