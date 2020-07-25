import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
// import HtmlParser from 'react-markdown/plugins/html-parser';


export default class Content extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            amount: '',
            zakat: ''
        }
    }

    render() {

        // const parseHtml = HtmlParser({
        //     isValidNode: node => node.type !== 'script',
        //     processingInstructions: [/* ... */]
        // })

        const markdown = `This block of Markdown contains <a href="https://en.wikipedia.org/wiki/HTML">HTML</a>, and will require the <code>html-parser</code> AST plugin to be loaded, in addition to setting the <code class="prop">escapeHtml</code> property to false.`
        
        return (
            <div style={{ height: '100%' }}>
                <div className="columns">

                    <div className="column" style={{ backgroundColor: 'rgb(230, 213, 255)', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh' }}>
                        <h5 className="title is-5" style={{ color: '#3298dc', marginTop: '6%' }}>
                            Content
                        </h5>
                        <ReactMarkdown
                            source={markdown}
                            escapeHtml={false}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
