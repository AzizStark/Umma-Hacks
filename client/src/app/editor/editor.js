import React from 'react';


export default class Editor extends React.Component {

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
            <div style={{ height: '100%' }}>
                <div className="columns">

                    <div className="column" style={{ backgroundColor: 'rgb(230, 213, 255)', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh' }}>
                        <h5 className="title is-5" style={{ color: '#3298dc', marginTop: '6%' }}>
                            Posts
                        </h5>

                        <h3 className="title is-4"> Title </h3>
                        <div className="field">
                            <div className="control">
                                <input className="input is-normal" type="text" required placeholder="Enter Title" autoFocus="" />
                            </div>
                        </div>

                        <h3 className="title is-4"> Description </h3>
                        <div className="field">
                            <div className="control">
                                <input className="input is-normal" type="text" required placeholder="Enter Description" autoFocus="" />
                            </div>
                        </div>

                        <h3 className="title is-4"> Title </h3>

                                <textarea className="input is-normal" type="text" required style={{width: '80%', minHeight: '40%'}} placeholder="Write Content" autoFocus="" />
                    </div>
                </div>
            </div>
        );
    }
}
