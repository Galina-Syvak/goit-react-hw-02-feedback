(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(4),s=c.n(i),o=(c(14),c(5)),r=c(6),d=c(7),b=c(9),l=c(8),u=(c(15),c(0));function j(e){var t=e.title,c=e.children;return Object(u.jsxs)("section",{children:[Object(u.jsx)("h2",{children:t}),c]})}var h=c(2),f=c.n(h);function k(e){var t=e.options,c=e.onLeaveFeedback;return Object(u.jsx)("ul",{className:f.a.feedbackList,children:t.map((function(e){return Object(u.jsx)("li",{className:f.a.feedbackItem,children:Object(u.jsx)("button",{className:f.a.feedbackButton,type:"button","data-name":e,onClick:c,children:e})},e)}))})}function O(e){var t=e.message;return Object(u.jsx)("p",{children:t})}function v(e){var t=e.good,c=e.neutral,n=e.bad,a=e.total,i=e.positivePercentage;return a?Object(u.jsx)("div",{children:Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:["Good: ",t]}),Object(u.jsxs)("li",{children:["Neutral: ",c]}),Object(u.jsxs)("li",{children:["Bad: ",n]}),Object(u.jsxs)("li",{children:["Total: ",a]}),Object(u.jsxs)("li",{children:["Positive feedback: $",i,"%"]})]})}):Object(u.jsx)(O,{message:"No feedback given"})}var x=function(e){Object(b.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(r.a)(this,c);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.onButtonClick=function(t){var c=t.target.dataset.name;e.setState((function(e){return Object(o.a)({},c,e[c]+1)}))},e.countPositiveFeedbackPercentage=function(){return Math.round(100*e.state.good/e.countTotalFeedback())},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e}return Object(d.a)(c,[{key:"render",value:function(){var e=this.state,t=e.good,c=e.neutral,n=e.bad;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(j,{title:"Please leave feedback",children:Object(u.jsx)(k,{options:Object.keys(this.state),onLeaveFeedback:this.onButtonClick})}),Object(u.jsx)(j,{title:"Statistics",children:Object(u.jsx)(v,{good:t,neutral:c,bad:n,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),c}(n.Component);s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root"))},2:function(e,t,c){e.exports={feedbackList:"FeedbackOptions_feedbackList__2D9Pu",feedbackItem:"FeedbackOptions_feedbackItem__7yydK",feedbackButton:"FeedbackOptions_feedbackButton__1aGlj"}}},[[17,1,2]]]);
//# sourceMappingURL=main.c39752da.chunk.js.map