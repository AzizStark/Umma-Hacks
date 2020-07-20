(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{15:function(e,a,t){e.exports={wavebg:"login_wavebg__Fa3-t"}},31:function(e,a,t){e.exports=t(61)},36:function(e,a,t){},38:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(29),s=t.n(r),o=(t(36),t(37),t(6)),c=t(7),i=t(9),m=t(8),u=(t(38),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).calculateZakat=function(){var e;""!==n.state.amount?(e=n.state.amount/100*2.5,n.setState({zakat:e.toFixed(2)})):alert("Enter an amount")},n.state={amount:"",zakat:""},n}return Object(c.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column",style:{backgroundColor:"rgb(230, 213, 255)",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:"100vh"}},l.a.createElement("h5",null,"Are you tired of Zakat guides being archaic and outdated? ",l.a.createElement("br",null),"Are you worried you might not know how to fulfill this pillar of Islam? ",l.a.createElement("br",null),"Fear not - you've come to the right place!"),l.a.createElement("div",{className:"box"},l.a.createElement("input",{className:"input is-normal",type:"number",placeholder:"Enter amount",onChange:function(a){return e.setState({amount:a.target.value})}}),l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement("input",{className:"button is-block is-info is-normal is-fullwidth",type:"button",value:"Calculate Zakat",onClick:function(){return e.calculateZakat()}}),this.state.zakat?l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("h3",null," Calculated Zakat: ",this.state.zakat," "),l.a.createElement("br",null),l.a.createElement("h4",null," Do you want to donate? "),l.a.createElement("center",null,l.a.createElement("input",{onClick:function(){return e.props.history.push("/donate")},className:"button is-block is-info is-small",type:"button",value:"Yes"}))):""))),l.a.createElement("p",{className:"has-text-white"},l.a.createElement("a",{href:"/login",style:{color:"white"}},"Login")))}}]),t}(l.a.Component)),d=t(11),p=t.n(d),h=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={logindata:{user_name:"",user_email:"",user_password:"",cpassword:""}},n}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column",style:{backgroundColor:"rgb(230, 213, 255)",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:"100vh"}},l.a.createElement("div",{className:"box"},l.a.createElement("h4",null,"Find communities near you: ")," ",l.a.createElement("br",null),l.a.createElement("input",{className:"input is-normal",type:"number",placeholder:"Enter postal code"}),l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement("input",{className:"button is-block is-info is-normal is-fullwidth",type:"button",value:"Find communities"})))))}}]),t}(n.Component),E=t(14),v=t(1),f=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).calculateZakat=function(){var e;""!==n.state.amount?(e=n.state.amount/100*2.5,n.setState({zakat:e.toFixed(2)})):alert("Enter an amount")},n.state={amount:"",zakat:""},n}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},l.a.createElement("div",{className:"navbar-brand"},l.a.createElement("a",{class:"navbar-item"},"Home"),l.a.createElement("a",{class:"navbar-item",href:"/zakat"},"Zakat calculator"),l.a.createElement("a",{class:"navbar-item"},"Islamic content"),l.a.createElement("a",{class:"navbar-item"},"About us"),l.a.createElement("a",{class:"navbar-item",href:"/login"},"Community login"),l.a.createElement("a",{role:"button",className:"navbar-burger","aria-label":"menu","aria-expanded":"false"},l.a.createElement("span",{"aria-hidden":"true"}),l.a.createElement("span",{"aria-hidden":"true"}),l.a.createElement("span",{"aria-hidden":"true"})))),l.a.createElement(E.a,null,l.a.createElement(v.a,{exact:!0,path:"/donate",component:h}),l.a.createElement(v.a,{exact:!0,path:"/zakat",component:u})))}}]),t}(l.a.Component),b=t(15),g=t.n(b),w=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).updateForm=function(e){var a=e.target.name,t=e.target.value,l=n.state.logindata;l[a]=t,n.setState({logindata:l})},n.login=function(e){e.preventDefault(),p.a.post("/api/login",{},{auth:{username:n.state.logindata.user_email,password:n.state.logindata.user_password}}).then((function(e){console.log(e),e.data&&n.props.history.push("/dashboard")})).catch((function(e){404===e.response.status?window.alert("Account not found"):401===e.response.status&&window.alert("Incorrect password")}))},n.state={logindata:{user_email:"",user_password:""}},n}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"hero is-fullheight ".concat(g.a.wavebg)},l.a.createElement("div",{className:"hero-body"},l.a.createElement("div",{className:"container has-text-centered"},l.a.createElement("div",{className:"column is-4 is-offset-4"},l.a.createElement("div",{className:"box"},l.a.createElement("h3",{className:"title"}," Umma Login"),l.a.createElement("br",null),l.a.createElement("form",{onSubmit:this.login},l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input is-normal",type:"text",required:!0,onChange:this.updateForm,name:"user_email",placeholder:"Username or email",autoFocus:""}))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input is-normal",type:"password",required:!0,onChange:this.updateForm,name:"user_password",placeholder:"Password"}))),l.a.createElement("button",{className:"button is-block is-info is-normal is-fullwidth"}," Login ",l.a.createElement("i",{className:"fa fa-sign-in","aria-hidden":"true"})))),l.a.createElement("p",{className:"has-text-white"},l.a.createElement("a",{href:"/signup",style:{color:"white"}},"Sign Up"))))))}}]),t}(n.Component),N=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).updateForm=function(e){var a=e.target.name,t=e.target.value,l=n.state.logindata;l[a]=t,n.setState({logindata:l})},n.signup=function(e){e.preventDefault(),n.state.logindata.user_password===n.state.logindata.cpassword?p.a.post("/api/signup",{email:n.state.logindata.user_email},{auth:{username:n.state.logindata.user_name,password:n.state.logindata.user_password}}).then((function(e){e.data&&n.props.history.push("/")})).catch((function(e){309===e.response.status&&e.response.data.email===n.state.logindata.user_email?window.alert("Account already exists"):309===e.response.status&&window.alert("Username taken, please try a different name.")})):window.alert("Password doesn't match")},n.state={logindata:{user_name:"",user_email:"",user_password:"",cpassword:""}},n}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"hero is-fullheight ".concat(g.a.wavebg)},l.a.createElement("div",{className:"hero-body"},l.a.createElement("div",{className:"container has-text-centered"},l.a.createElement("div",{className:"column is-4 is-offset-4"},l.a.createElement("div",{className:"box"},l.a.createElement("h3",{className:"title"},"Umma - Sign Up"),l.a.createElement("form",{onSubmit:this.signup},l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input is-normal",style:{textTransform:"lowercase"},onChange:this.updateForm,name:"user_name",type:"text",placeholder:"Username",required:!0,autoFocus:""}))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input is-normal",onChange:this.updateForm,name:"user_email",type:"email",placeholder:"Email",required:!0,autoFocus:""}))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input is-normal",onChange:this.updateForm,name:"user_password",type:"password",required:!0,placeholder:"Password"}))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input is-normal",onChange:this.updateForm,name:"cpassword",type:"password",required:!0,placeholder:"Confirm password"}))),l.a.createElement("button",{className:"button is-block is-info is-normal is-fullwidth"}," Create Account ",l.a.createElement("i",{className:"fa fa-sign-in","aria-hidden":"true"})))),l.a.createElement("p",{className:"has-text-white"},l.a.createElement("a",{href:"/login",style:{color:"white"}},"Login"))))))}}]),t}(n.Component),y=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={amount:"",zakat:"",user:""},n}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/api/isLogged").then((function(a){e.setState({user:a.data.user})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column",style:{backgroundColor:"rgb(230, 213, 255)",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:"100vh"}},l.a.createElement("div",{className:"box"},l.a.createElement("h2",{className:"title is-4"},"Community Dashboard: "),l.a.createElement("h4",null,"Community userid: ",this.state.user," "),l.a.createElement("h4",null,"Community details: "),l.a.createElement("input",{className:"input is-normal",type:"number",placeholder:"Enter postal code"})))))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=l.a.createElement(E.a,null,l.a.createElement("div",{style:{minHeight:"100vh"}},l.a.createElement(v.a,{exact:!0,path:"/:any",component:f}),l.a.createElement(v.a,{path:"/login",component:w}),l.a.createElement(v.a,{path:"/signup",component:N}),l.a.createElement(v.a,{path:"/dashboard",component:y})));s.a.render(k,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.254f6cf2.chunk.js.map