import React from 'react'
import '../stylesheets/box.css'
import ReactTooltip from 'react-tooltip';
import ConjugationTable from '../helpers/ConjugationTable'
import ParaphraseTable from '../helpers/ParaphraseTable'

const paraphrase = [
    ['Karis hus', 'huset som Kari bur i'],
    ['klubbens spillere', 'dei spelarane som høyrer til klubben'],
    ['etter mors død', 'etter at mora var død'],
];

const paraphraseHeaders = [
    <span data-tip="Букмол">Bokmål</span>, <span data-tip="Новонорвежский">Nynorsk</span>
];

const feminineWords = [
    [ 'ei sol', 'sola', 'soler', 'solene' ],
    [ 'ei hytte', 'hytta', 'hytter', 'hyttene' ],
    [ 'ei fil', 'fila', 'filer', 'filene' ],
];

const masculineWords = [
    ['ein kjærleik', 'kjærleiken', 'kjærleikar', 'kjærleikane'],
    ['ein fridom', 'fridomen', 'fridomar', 'fridomane'],
    ['ein augeblink', 'augeblinken', 'augeblinkar', 'augeblinkane'],
];

const neuterWords = [
    ['eit framsteg', 'framsteget', 'framsteg', 'framstega'],
    ['eit tolmod', 'tolmodet', 'tolmod', 'tolmoda'],
    ['eit løyve', 'løyvet', 'løyve', 'løyva'],
];


const conjugationHeaders = [
    <span data-tip="Неопределенная форма, ед. число">Ubunden form, eintal</span>, <span data-tip="Определенная форма, ед. число">Bunden form, eintal</span>,
    <span data-tip="Неопределенная форма, мн. число">Ubunden form, fleirtal</span>, <span data-tip="Определенная форма, мн. число">Bunden form, fleirtal</span>
];

const feminineWordsOnIng = [
    ['ei meining', 'meininga', 'meiningar','meiningane'],
    ['ei undervising', 'undervisinga', 'undervisingar', 'undervisingane']
]

const feminineWordsOptional = [
    ['ei elv', 'elva', 'elvar/elver','elvane/elvene'],
    ['ei hei', 'heia', 'heiar/heier', 'heiane/heiene']
]

const feminineWordsUmlaut = [
    ['ei and', 'anda', 'ender','endene'],
    ['ei bok', 'boka', 'bøker', 'bøkene'],
    ['ei dotter', 'dottera', 'døtrer', 'døtrene'],
    ['ei mor', 'mora', 'mødrer', 'mødrene'],
    ['ei mus', 'musa', 'mus/myser', 'musene/mysene'],
]

const feminineForeign = [
    ['ei madonna', 'madonnaa', 'madonnaer','madonnaene'],
    ['ei diva', 'divaa', 'divaer', 'divaene'],
]



class Substantiv extends React.Component {
    render() {
        return (
            <><ReactTooltip />
                <div className="rule-header" id="substantiv">
                <h2>2 Существительное (Substantiv)</h2>
                </div>
                <div className="rule-box">
                    <p>Слова, которые служат названием предмета и отвечают на вопрос <i>"кто?"</i> или <i>"что?"</i>, называются именами существительными. </p>

                    <h4>2.1 Конкретные и абстрактные имена существительные (Konkrete og abstrakte substantiv)  </h4>
                    <p>Конкретные имена существительные (Konkrete substantiv) это слова, обозначающие отдельные предметы, которые которые воспринимаются нашими органами чувств: зрением, слухом, вкусом,
                         обонянием и осязанием. </p>
                    <p className="eksempel"><span data-tip="книга">ei bok</span>, <span data-tip="человек">eit menneske</span> , <span data-tip="стол">eit bord</span>, <span data-tip="сумка">ei veske</span>, <span data-tip="кот">ein katt</span></p>
                    <p>Абстрактные имена существительные (Abstrakte substantiv) это слова, обозначающие абстрактные понятия, которые не воспринимаются органами чувств. </p>
                    <p className="eksempel"><span data-tip="любовь"> ein kjærleik</span>, <span data-tip="ревность"> ein sjalusi</span>, <span data-tip="время"> ei tid</span>, <span data-tip="вражда"> ein fiendskap</span>,
                    <span data-tip="тайна"> ein løyndom</span>, <span data-tip="действительность"> ein røyndom</span> </p>

                    <h4>2.2 Нарицательные и собственные имена существительные (Samnamn og særnamn)  </h4>
                    <p>Нарицательные имена существительные (Samnamn) это слова, определяющие категорию группы объектов с общими признаками. Они пишутся с маленькой буквы.</p>
                    <p className="eksempel"><span data-tip="мальчик"> ein gut</span>, <span data-tip="чашка"> ein kopp</span>, <span data-tip="компьютер"> ein datamaskin</span></p>
                    <p>Собственные имена существительные (Særnamn) это слова, называющие чьи-то конкретные имена, названия географических объектов, учреждений и т.п. Собственные имена существительные пишутся с большой буквы. </p>
                    <p className="eksempel"><span data-tip="Млечный путь"> Vinterbrauta</span>, <span data-tip="Осло"> Oslo</span>, Bjørn, <span data-tip="Кируна"> Kiruna</span>,<span data-tip="Африка"> Afrika</span> </p>

                    <h4>2.3 Родительный падеж (Genitiv)  </h4>
                    <p>Родительный падеж используется для выражения принадлежности одного предмета другому. Образование родительного падежа в новонорвежском немного отличается от правил букмола. В букмоле он часто образуется
                        при помощи добавления окончания -s в конец слова, в то время как в новонорвежском этот способ используется реже.</p>
                    <p>
                        В новонорвежском этот способ используется когда речь идет о размере и весе, с существительными в неопределенной форме и в устойчивых выражениях.
                    </p>
                    <p className="eksempel"><span data-tip="четырехчасовая встреча"> fire timars møte</span>, <span data-tip="книжная тематика"> ei boks tematikk</span></p>

                    <p>Ниже представлены основные сповобы образования родительного падежа в новонорвежском.</p>
                    <ul style={{ listStyleType: "decimal" }}>
                        <li key="1">С помощью предлогов</li>
                        <p className="eksempel"><span data-tip="машина Фредрика">bilen til Fredrik</span>, <span data-tip="мэр коммуны">ordføraren i kommunen</span>,
                         <span data-tip="велосипед отца"> sykkelen til far</span>, <span data-tip="начальник нефтяного фонда"> sjefen for oljefondet</span></p>
                        <li key="2">С помощью составных существительных</li>
                        <p className="eksempel"><span data-tip="здание школы">ei skulebygning</span>, <span data-tip="водитель автобуса">ein bussførar</span>, <span data-tip="владелец машины">ein bileigar</span></p>
                        <li key="3">С помощью притяжательных местоимений </li>
                        <p className="eksempel"><span data-tip="мясное рагу матери">kjøtgryta hennar mor</span>, <span data-tip="лошадь отца">hesten hans far</span>, <span data-tip="дом Кари">Kari sitt hus</span></p>
                        <li key="4">C помощью парафраза</li>
                    </ul>
                    <ParaphraseTable headers={paraphraseHeaders} data={paraphrase} aria="paraphrase"></ParaphraseTable>

                    


                    <h4>2.4 Грамматический род (Genus)  </h4>
                    <p>Как и во многих диалектах, имена существительные в новонорвежском делятся на три рода: мужской (hankjønn, m), женский (hokjønn, f) и средний (inkjekjønn, n). Сокращения обозначают
                        maskulinum (m), femininum (f) и nøytrum (n). </p>
                    <p>Примеры существительных женского рода с неопределенным арктиклем <span className="emphasis">ei</span>: </p>
                    <p className="eksempel"><span data-tip="песня"> ei vise</span>, <span data-tip="кошка"> ei katte</span>, <span data-tip="файл"> ei fil</span></p>

                    <p>Примеры существительных мужского рода с неопределенным арктиклем <span className="emphasis">ein</span>: </p>
                    <p className="eksempel"><span data-tip="компьютер"> ein datamaskin</span>, <span data-tip="врач"> ein lækjar</span>, <span data-tip="лодка"> ein båt</span></p>

                    <p>Примеры существительных среднего рода с неопределенным арктиклем <span className="emphasis">eit</span>: </p>
                    <p className="eksempel"><span data-tip="дом"> eit hus</span>, <span data-tip="возможность"> eit høve</span>, <span data-tip="исключение"> eit unnatak</span></p>

                    <p>Определить род существительного можно с помощью неопределенного арктикля перед существительным, или определенному артиклю который используется в качестве окончания.
                    </p>

                    <p> В приведённом ниже примере существительное <span data-tip="входная дверь"><i>ytterdøra</i></span> в определенной форме имеет определенный артикль <span className="emphasis">-a</span> в качестве окончания,
                      а перед неопределенным существительным <span data-tip="грохот"><i>brak</i></span> используется арктикль <span className="emphasis">eit</span>.
                       </p>
                    <p className="eksempel book-quote"><span className="quote">Ytterdøra vår small så det rista i heile huset, og så følgde eit frykteleg brak og roping.</span> (Maria Parr <span id="title">Keeperen og havet</span> 7 <span id="year">2017</span>)</p>

                    <p>Некоторые существительные бывают одновременно мужского и женского рода, а некоторые, например <span className="eksempel" data-tip="вилы">ein/eit/ei greip</span>,
                   имеют форму всех родов - женского, мужского и среднего. Поэтому лучше всего приучить себя активно пользоваться словарем и пытаться запомнить грамматический род.
                    </p>

                    <h4>2.5 Склонение существительных женского рода  </h4>
                    <p>К большинству существительных женского рода добавляется окончание <span className="emphasis">-a</span> в определенной форме единственного числа, окончание <span className="emphasis">-er </span>
                     в неопределенной форме множественного числа и окончание <span className="emphasis">-ene</span> в определенной форме множественного числа.</p>

                    <ConjugationTable className="conjugation" headers={conjugationHeaders} data={feminineWords} aria="Feminine conjugation"></ConjugationTable>

                    <h4>2.5.1 Существительные женского рода с окончанием -ing</h4>
                    <p>К существительные женского рода с окончанием <span className="emphasis">-ing</span> добавляются окончания <span className="emphasis">-ar</span> и <span className="emphasis">-ane </span>
                    во множественном числе.</p>

                    <ConjugationTable className="conjugation" headers={conjugationHeaders} data={feminineWordsOnIng} aria="Feminine conjugation on -ing"></ConjugationTable>

                    <h4>2.5.2 Разносклоняемые существительные женского рода </h4>
                    <p>Группа существительных женского рода с традиционными окончаниями <span className="emphasis">-ar</span> и <span className="emphasis">-ane </span> во множественном числе,
                    которые также разрешается склонять с окончаниями <span className="emphasis">-er</span> и <span className="emphasis">-ene </span>.</p>

                    <ConjugationTable className="conjugation" headers={conjugationHeaders} data={feminineWordsOptional} aria="Feminine optional"></ConjugationTable>

                    <h4>2.5.3 Cуществительные женского рода c умлаутом</h4>
                    <p>Обширная группа существительных женского рода с умлаутом  <span className="emphasis">a&rarr;e, o&rarr;e, o&rarr;ø, u&rarr;y, å&rarr;æ  </span> имеет окончания
                    <span className="emphasis"> -er</span> и <span className="emphasis">-ene </span> во множественном числе.</p>

                    <ConjugationTable className="conjugation" headers={conjugationHeaders} data={feminineWordsUmlaut} aria="Feminine omlyd"></ConjugationTable>

                    <h4>2.5.3 Заимствованные существительные женского рода обозначающие женщин</h4>
                    <p>К заимствованным существительным женского рода обозначающих женщин, добавляется окончание <span className="emphasis">-aa</span> в неопределенной форме единственного числа.
                    </p>

                    <ConjugationTable className="conjugation" headers={conjugationHeaders} data={feminineForeign} aria="Feminine foreign"></ConjugationTable>
                    
                    <h4>2.6 Склонение существительных мужского рода  </h4>
                    <p>К большинству существительных мужского рода добавляется окончание <span className="emphasis">-en</span> в определенной форме единственного числа, окончание <span className="emphasis">-ar </span>
                     в неопределенной форме множественного числа и окончание <span className="emphasis">-ane</span> в определенной форме множественного числа.</p>
                    <ConjugationTable headers={conjugationHeaders} data={masculineWords} aria="Masculine conjugation"></ConjugationTable>
                    
                    <h4>2.7 Склонение существительных среднего рода  </h4>
                    <p>Ко всем существительным среднего рода добавляется окончание <span className="emphasis">-et</span> в определенной форме единственного числа и окончание <span className="emphasis">-a </span>
                    в определенной форме множественного числа. Неопределенная форма множественного числа остается без изменений.</p> 
                    <ConjugationTable headers={conjugationHeaders} data={neuterWords} aria="Neuter conjugation"></ConjugationTable>
                </div >
            </>
        );
    }
}

export default Substantiv