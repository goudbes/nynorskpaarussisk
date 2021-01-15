import React from 'react'
import '../stylesheets/box.css'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function createData(ordklasse_ru, ordklasse_nn, eksempel) {
    return { ordklasse_ru, ordklasse_nn, eksempel };
}

const rows = [
    createData('Существительное', 'Substantiv', 'ei sol, ei jente, eit bord, ein godhug'),
    createData('Местоимение', 'Pronomen', 'ho, han, eg, kven, kvarandre'),
    createData('Детерминатив', 'Determinativ', 'ei, eit, ein, dette, desse, mi, mine'),
    createData('Глагол', 'Verb', 'å eta, å bu, å draga, å gløyma'),
    createData('Прилагательное', 'Adjektiv', 'fin, stor, varm, vakker, raud'),
    createData('Наречие', 'Adverb', 'her, ute, derfor, dessutan, kanskje, sikkert, ikkje'),
    createData('Предлог', 'Preposisjon', 'på, i, hjå, under, bakanfor, attanfor'),
    createData('Сочинительный союз', 'Konjunksjon', 'men, eller, for, og'),
    createData('Подчинительный союз', 'Subjunksjon', 'dersom, fordi, viss, som'),
    createData('Междометие', 'Interjeksjon', 'hurra!, uff, ja, nei, hallo'),];

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
                                <TableCell align="left">Часть речи на норвежском</TableCell>
                                <TableCell align="left">Примеры</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.ordklasse_nn}>
                                    <TableCell component="th" scope="row">
                                        {row.ordklasse_ru}
                                    </TableCell>
                                    <TableCell align="left">{row.ordklasse_nn}</TableCell>
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