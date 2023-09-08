import BtsTable from "react-bootstrap/Table";
import DeleteBtn from "./DeleteBtn.jsx";
import PropTypes from "prop-types";

const Table = ({ buildings, handleDelete }) => (
  <BtsTable responsive>
    <tbody>
      {buildings.map((building) => (
        <tr key={building.id}>
          <th>{building.location}</th>
          <td style={{ display: "flex", justifyContent: "flex-end" }}>
            <DeleteBtn handleDelete={handleDelete} building={building} />
          </td>
        </tr>
      ))}
    </tbody>
  </BtsTable>
);

/****************************** */
// TypeChecking
Table.propTypes = {
  buildings: PropTypes.arrayOf(PropTypes.object),
  handleDelete: PropTypes.func,
};
/****************************** */

export default Table;
