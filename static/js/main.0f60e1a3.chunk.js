(this["webpackJsonpreact-note"]=this["webpackJsonpreact-note"]||[]).push([[0],[,,,,,,,,,,,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var i=a(0),n=a(1),s=a.n(n),c=a(9),o=a.n(c),r=a(8),l=a(2),d=a(3),h=a(6),b=a(5),u=a(4),j=(a(15),function(t){Object(b.a)(a,t);var e=Object(u.a)(a);function a(t){var i;return Object(l.a)(this,a),(i=e.call(this,t)).props=t,i}return Object(d.a)(a,[{key:"render",value:function(){var t=this.props,e=t.text,a=t.calb;return Object(i.jsx)("button",{onClick:a,className:"btn",children:e})}}]),a}(n.Component)),v=(a(16),function(t){Object(b.a)(a,t);var e=Object(u.a)(a);function a(t){var i;return Object(l.a)(this,a),(i=e.call(this,t)).props=t,i}return Object(d.a)(a,[{key:"render",value:function(){var t=this.props.showEditor;return Object(i.jsxs)("div",{className:"header",children:[Object(i.jsx)("h1",{className:"title",children:"ReactNote"}),Object(i.jsx)("div",{className:"toolbar",children:Object(i.jsx)(j,{text:"+",calb:t})})]})}}]),a}(n.Component)),O=(a(17),a(18),function(t){Object(b.a)(a,t);var e=Object(u.a)(a);function a(t){var i;return Object(l.a)(this,a),(i=e.call(this,t)).props=t,i}return Object(d.a)(a,[{key:"render",value:function(){var t=this.props,e=t.title,a=t.text,n=t.date,s=t.time,c=t.id,o=t.editNote,r=t.removeNote;return Object(i.jsxs)("div",{className:"note","data-id":c,children:[Object(i.jsxs)("div",{className:"note-header",children:[Object(i.jsxs)("span",{className:"date",children:[n," | ",s]}),Object(i.jsx)("span",{onClick:o,className:"note-edit",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c |"}),Object(i.jsx)("span",{onClick:function(){r(c)},className:"note-delete",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]}),Object(i.jsx)("h2",{className:"note-title",children:e}),Object(i.jsx)("p",{className:"note-descr",children:a})]})}}]),a}(n.Component)),x=function(t){Object(b.a)(a,t);var e=Object(u.a)(a);function a(t){var i;return Object(l.a)(this,a),(i=e.call(this,t)).props=t,i}return Object(d.a)(a,[{key:"render",value:function(){var t=this.props,e=t.editNote,a=t.removeNote,n=t.notes,s=n.map((function(t){return Object(i.jsx)(O,{title:t.title,text:t.text,date:t.date,time:t.time,id:t.id,editNote:e,removeNote:a})}));return 0===n.length?Object(i.jsx)("div",{children:Object(i.jsx)("h2",{className:"empty",children:"\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0441\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u0432\u0430\u0448\u0443 \u043f\u0435\u0440\u0432\u0443\u044e \u0437\u0430\u043c\u0435\u0442\u043a\u0443!"})}):Object(i.jsx)("div",{children:s})}}]),a}(n.Component),p=(a(19),function(t){Object(b.a)(a,t);var e=Object(u.a)(a);function a(t){var i;return Object(l.a)(this,a),(i=e.call(this,t)).props=t,i}return Object(d.a)(a,[{key:"render",value:function(){var t=this.props,e=t.editorTitle,a=t.show,n=t.action,s=t.setText,c=t.setTitle,o=t.editableText,r=t.editableTitle;return a?Object(i.jsx)("div",{className:"note-editor-wrapper",children:Object(i.jsxs)("div",{className:"note-editor animate__slideInDown",children:[Object(i.jsx)("h3",{className:"editor-title",children:e}),Object(i.jsx)(j,{calb:n,text:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),Object(i.jsxs)("div",{className:"editor-content",children:[Object(i.jsx)("div",{className:"editor-toolbar"}),Object(i.jsx)("input",{value:r,onInput:c,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",type:"text",className:"editor-input"}),Object(i.jsx)("textarea",{value:o,onInput:s,placeholder:"\u0427\u0442\u043e \u0431\u044b \u0432\u044b \u0445\u043e\u0442\u0435\u043b\u0438 \u0437\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c...",className:"editor-text"})]})]})}):null}}]),a}(n.Component)),N=(a(20),function(t){Object(b.a)(a,t);var e=Object(u.a)(a);function a(t){var i;return Object(l.a)(this,a),(i=e.call(this,t)).props=t,i.id=0,i.state={data:[],editorShowed:!1,editorTitle:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043c\u0435\u0442\u043a\u0443",lastTitle:"",lastText:"",editableTitle:"",editableText:"",editable:0},i.showEditor=i.showEditor.bind(Object(h.a)(i)),i.closeEditor=i.closeEditor.bind(Object(h.a)(i)),i.setTitle=i.setTitle.bind(Object(h.a)(i)),i.setText=i.setText.bind(Object(h.a)(i)),i.addNote=i.addNote.bind(Object(h.a)(i)),i.removeNote=i.removeNote.bind(Object(h.a)(i)),i.editNote=i.editNote.bind(Object(h.a)(i)),i.setNewTitle=i.setNewTitle.bind(Object(h.a)(i)),i.setNewText=i.setNewText.bind(Object(h.a)(i)),i}return Object(d.a)(a,[{key:"showEditor",value:function(){this.setState({editorShowed:!0}),this.setState({editorTitle:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043c\u0435\u0442\u043a\u0443"}),this.setState({editableTitle:"",editableText:"",title:"",text:""})}},{key:"closeEditor",value:function(){this.setState({editorShowed:!1})}},{key:"setTitle",value:function(t){this.setState({lastTitle:t.target.value,editableTitle:t.target.value})}},{key:"setText",value:function(t){this.setState({lastText:t.target.value,editableText:t.target.value})}},{key:"setNewTitle",value:function(t){var e=this.state,a=e.data[e.editable];this.setState({editableTitle:t.target.value}),a.title=t.target.value}},{key:"setNewText",value:function(t){var e=this.state,a=e.data[e.editable];this.setState({editableText:t.target.value}),a.text=t.target.value}},{key:"addNote",value:function(){var t=this.state.data,e="".concat((new Date).getHours()).length>1?(new Date).getHours():"0"+(new Date).getHours(),a="".concat((new Date).getMinutes()).length>1?(new Date).getMinutes():"0"+(new Date).getMinutes(),i="".concat((new Date).getDate()).length>1?(new Date).getDate():"0"+(new Date).getDate(),n="".concat((new Date).getMonth()).length>1?(new Date).getMonth():"0".concat((new Date).getMonth()+1),s="".concat(e,":").concat(a),c="".concat(i,".").concat(n);t.push({title:this.state.lastTitle,text:this.state.lastText,date:c,time:s,id:this.id}),this.id++,this.setState(t),this.setState({editorTitle:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043c\u0435\u0442\u043a\u0443"}),this.setState({editorShowed:!1})}},{key:"removeNote",value:function(t){this.id--,this.setState((function(e){var a=e.data,i=a.findIndex((function(e){return e.id===t}));return{data:[].concat(Object(r.a)(a.slice(0,i)),Object(r.a)(a.slice(i+1)))}}))}},{key:"editNote",value:function(t){this.setState({editorShowed:!0}),this.setState({editorTitle:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0437\u0430\u043c\u0435\u0442\u043a\u0443"}),this.setState({editable:t.target.parentNode.parentNode.getAttribute("data-id")})}},{key:"render",value:function(){var t,e,a,n=this.state,s=n.data,c=n.editorTitle,o=n.editorShowed,r=n.editableText,l=n.editableTitle;return"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0437\u0430\u043c\u0435\u0442\u043a\u0443"===c?(t=this.closeEditor,a=this.setNewTitle,e=this.setNewText):(t=this.addNote,a=this.setTitle,e=this.setText),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(v,{showEditor:this.showEditor}),Object(i.jsx)(x,{editNote:this.editNote,removeNote:this.removeNote,notes:s}),Object(i.jsx)(p,{editorTitle:c,show:o,action:t,setText:e,setTitle:a,editableTitle:l,editableText:r})]})}}]),a}(n.Component));o.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(N,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.0f60e1a3.chunk.js.map