import React from 'react'
import '../stylesheets/style.css'
import Markdown from 'markdown-to-jsx';
import PronomenMarkdown from '../data/pronomen.md'

class Pronomen extends React.Component {
    constructor() {
        super();
        this.state = { markdown: '' };
    }

    componentDidMount() {
        fetch(PronomenMarkdown)
            .then(res => res.text())
            .then(text => this.setState({ markdown: text }));
    }

    render() {
        const { markdown } = this.state;
        return (
            <div>
                <div className="rule-header" id="pronomen">
                    <h2>&sect; 3 Местоимение (Pronomen) </h2>
                </div>
                <div className="rule-box">
                    <Markdown >{markdown}</Markdown>
                </div>
            </div>
        );

    }
}

export default Pronomen