import React from 'react'
import '../stylesheets/box.css'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function createData(ordklasse_nn, eksempel) {
    return { ordklasse_nn, eksempel };
}

const rows = [
    createData(<span data-tip="Существительное">Substantiv</span>, 'ei sol, ei jente, eit bord, ein godhug'),
    createData(<span data-tip="Местоимение">Pronomen</span>, 'ho, han, eg, kven, kvarandre'),
    createData(<span data-tip="Детерминатив">Determinativ</span>, 'ei, eit, ein, dette, desse, mi, mine'),
    createData(<span data-tip="Глагол">Verb</span>, 'å eta, å bu, å draga, å gløyma'),
    createData(<span data-tip="Прилагательное">Adjektiv</span>, 'fin, stor, varm, vakker, raud'),
    createData(<span data-tip="Наречие">Adverb</span>, 'her, ute, derfor, dessutan, kanskje, sikkert, ikkje'),
    createData(<span data-tip="Предлог">Preposisjon</span>, 'på, i, hjå, under, bakanfor, attanfor'),
    createData(<span data-tip="Сочинительный союз">Konjunksjon</span>, 'men, eller, for, og'),
    createData(<span data-tip="Подчинительный союз">Subjunksjon</span>, 'dersom, fordi, viss, som'),
    createData(<span data-tip="Междометие">Interjeksjon</span>, 'hurra!, uff, ja, nei, hallo'),];

class Ordklassar extends React.Component {
    render() {
        return (
            <>
                <div className="rule-header" id="ordklassar">
                    <h2>1 Части речи (Ordklassar) </h2>
                </div>
                <div className="rule-box">
                    <p>Слова в норвежском языке распределяются по категориям или группам, в зависимости от их морфологических, синтаксических и семантических признаков. В таблице ниже
                    представлены основые части речи в норвежском языке. </p>
                    <Table aria-label="simple table">
                        <TableHead style={{ backgroundColor: "#eaeaea" }}>
                            <TableRow>
                                <TableCell>Часть речи</TableCell>
                                <TableCell align="left">Примеры</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, i) => (
                                <TableRow key={i}>
                                    <TableCell component="th" scope="row">
                                        {row.ordklasse_nn}
                                    </TableCell>
                                    <TableCell align="left">{row.eksempel}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </>
        );
    }
}

export default Ordklassar