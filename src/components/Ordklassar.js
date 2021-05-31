import React from 'react'
import '../stylesheets/style.css'
import Markdown from 'markdown-to-jsx';
import OrdklasseMarkdown from '../data/ordklassar.md'

class Ordklassar extends React.Component {
    constructor() {
        super();
        this.state = { markdown: '' };
    }

    componentDidMount() {
        fetch(OrdklasseMarkdown)
            .then(res => res.text())
            .then(text => this.setState({ markdown: text }));
    }

    render() {
        const { markdown } = this.state;
        return (
            <div>
                <div className="rule-header" id="ordklassar">
                    <h2>&sect; 1 Части речи (Ordklassar) </h2>
                </div>
                <div className="rule-box">
                    <Markdown >{markdown}</Markdown>
                </div>
            </div>
        );
    }
}
export default Ordklassar