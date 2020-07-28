import React from 'react';

// idea: this can have the Islamic quotes
export default class Content extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            amount: '',
            zakat: ''
        }
    }

    render() {

        const markdown = `This block of Markdown contains <a href="https://en.wikipedia.org/wiki/HTML">HTML</a>, and will require the <code>html-parser</code> AST plugin to be loaded, in addition to setting the <code class="prop">escapeHtml</code> property to false.`
        
        return (
            // 
            <div style={{ height: '100%' }}>
                <div className="columns">

                    <div className="column" style={{ backgroundColor: 'rgb(230, 213, 255)', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh' }}>
                        <h5 className="title is-5" style={{ color: '#3298dc', marginTop: '6%' }}>
                            Title 
                        </h5>

                        <div style={{backgroundColor: 'white', width: '80%', height: 'auto', textAlign: "left", padding: 18, borderRadius: 4}}>
                            <h1 className="title is-4"> </h1>  
                            <h5 className="subtitle is-6" style={{paddingTop: 10}}> 
                            This is large defenition that describes about the project
                            </h5>
                        </div> 
                    </div>
                </div>
            </div>
        );
    }
}
