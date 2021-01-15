import React from 'react'
import '../stylesheets/box.css'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



function createParaphraseData(bm, nn) {
    return { bm, nn};
}

const paraphraseTableStyles = {
    tableHead: {
        backgroundColor: "#eaeaea"
    }
}


class ConjugationTable extends React.Component {
    render() {
        return (
            <Table aria-label={this.props.aria}>
                <TableHead style={paraphraseTableStyles}>
                    <TableRow>
                        {this.props.headers.map((value, i) => { return <TableCell key={i}>{value}</TableCell> })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.props.data.map(value => Array.isArray(value) ? createParaphraseData(...value) : value).map((value, i) => (
                        <TableRow key={i}>
                            <TableCell component="th" scope="row">
                                {value.bm}
                            </TableCell>
                            <TableCell align="left" >
                                {value.nn}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        );
    }
}

export default ConjugationTable