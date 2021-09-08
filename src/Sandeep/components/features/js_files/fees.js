import { Table } from "react-bootstrap";
function Fees() {
    return (
        <Table className="fees-data">
            <tbody>
                <tr>
                    <td className="quarter">First Quarter</td>
                    <td>Paid</td>
                </tr>
                <tr>
                    <td className="quarter">Second Quarter</td>
                    <td>Pending</td>
                </tr>
                <tr>
                    <td className="quarter">Third Quarter</td>
                    <td>Pending</td>
                </tr>
                <tr>
                    <td className="quarter">Fourth Quarter</td>
                    <td>Pending</td>
                </tr>
            </tbody>
        </Table>
    )
}
export default Fees