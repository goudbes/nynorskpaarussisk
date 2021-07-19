import React from 'react'
import '../stylesheets/style.css'
import Markdown from 'markdown-to-jsx';
import SubstantivMarkdown from '../data/interjeksjon.md'

class Interjeksjon extends React.Component {
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
                <div className="rule-header" id="interjeksjon">
                    <h2>&sect; 11 Междометие (Interjeksjon) </h2>
                </div>
                <div className="rule-box">
                    <Markdown >{markdown}</Markdown>
                </div>
            </div>
        );

    }
}

export default Interjeksjon