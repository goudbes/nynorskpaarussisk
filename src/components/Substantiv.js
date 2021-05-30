import React from 'react'
import '../stylesheets/style.css'
import Markdown from 'markdown-to-jsx';
import SubstantivMarkdown from '../data/substantiv.md'

class Substantiv extends React.Component {
    constructor() {
        super();
        this.state = { markdown: '' };
    }

    componentDidMount() {
        fetch(SubstantivMarkdown)
            .then(res => res.text())
            .then(text => this.setState({ markdown: text }));
    }

    render() {
        const { markdown } = this.state;
        return (
            <div>
                <div className="rule-header" id="ordklassar">
                    <h2>2 Существительное (Substantiv) </h2>
                </div>
                <div className="rule-box">
                    <Markdown >{markdown}</Markdown>
                </div>
            </div>
        );

    }
}

export default Substantiv