import React from 'react'
import '../stylesheets/box.css'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



function createDataConjugation(indefiniteSingular, definiteSingular, indefinitePlural, definitePlural) {
    return { indefiniteSingular, definiteSingular, indefinitePlural, definitePlural };
}

const conjugationTableStyles = {
    tableHead: {
        backgroundColor: "#eaeaea"
    }
}


class ConjugationTable extends React.Component {
    render() {
        return (
            <Table aria-label={this.props.aria}>
                <TableHead style={conjugationTableStyles.tableHead}>
                    <TableRow>
                        {this.props.headers.map((value, i) => { return <TableCell key={i}>{value}</TableCell> })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.props.data.map(value => Array.isArray(value) ? createDataConjugation(...value) : value).map((value, i) => (
                        <TableRow key={i}>
                            <TableCell component="th" scope="row">
                                {value.indefiniteSingular}
                            </TableCell>
                            <TableCell >
                                {value.definiteSingular}
                            </TableCell>
                            <TableCell align="left">{value.indefinitePlural}</TableCell>
                            <TableCell align="left">{value.definitePlural}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        );
    }
}

export default ConjugationTable