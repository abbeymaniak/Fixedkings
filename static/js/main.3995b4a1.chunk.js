(this.webpackJsonpfixedkings=this.webpackJsonpfixedkings||[]).push([[0],[,function(e,t,i){e.exports=i.p+"static/media/chelsea.d854acff.png"},,,,,function(e,t,i){e.exports=i.p+"static/media/manu.aaa70615.png"},function(e,t,i){e.exports=i.p+"static/media/barca.bb0959e6.png"},function(e,t,i){e.exports=i.p+"static/media/real.f04c74af.png"},function(e,t,i){e.exports=i.p+"static/media/arsenal.20c5a666.png"},,,function(e,t,i){e.exports=i(20)},,,,,function(e,t,i){},function(e,t,i){},,function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),o=i(3),r=i.n(o),l=(i(17),i(4)),c=i(5),u=i(11),s=i(10),d=i(1),f=i.n(d),C=i(6),m=i.n(C),h=i(7),g=i.n(h),b=i(8),p=i.n(b),v=i(9),N=i.n(v),F=[f.a,m.a,g.a,p.a,N.a],y=function(e){var t=e.name,i=e.club,a=e.fs,o=e.cert,r=e.school,l=e.color;return n.a.createElement("div",{className:" tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5"},n.a.createElement("img",{src:F[i],alt:"clubs",width:"200",height:"200"}),n.a.createElement("div",null,n.a.createElement("h2",null,t),n.a.createElement("p",null,a),n.a.createElement("p",null,o," "),n.a.createElement("p",null,r),n.a.createElement("p",null,l)))},E=function(e){var t=e.kings;return n.a.createElement("div",null,t.map((function(e,i){return n.a.createElement(y,{key:i,club:t[i].Club,name:t[i].Name,fs:t[i].FieldofStudy,cert:t[i].Certification,school:t[i].Institution,color:t[i].FavouriteColor})})))},S=function(e){e.searchfield;var t=e.searchChange;return n.a.createElement("div",{className:"pa2"},n.a.createElement("input",{type:"search",placeholder:"search King",className:"pa3 ba b--green bg-lightest-blue",onChange:t}))},k=[{Name:"Abbey",FieldofStudy:"Accounting",Certification:"HND",Institution:"LagosCityPoly",FavoriteColor:"Blue et Black",Club:0},{Name:"Chicago",FieldofStudy:"Business Admin",Certification:"HND",Institution:"Yabatech ",FavoriteColor:"No Fav",Club:2},{Name:"Chidex",FieldofStudy:"Com Sc",Certification:"HND",Institution:"IMT",FavoriteColor:"Blue et Red",Club:0},{Name:"Deejay",FieldofStudy:"Banking and Fin",Certification:"B.Sc",Institution:"FUNAAB",FavoriteColor:"White",Club:2},{Name:"Great",FieldofStudy:"Education",Certification:"B.Sc.(Ed), M.Sc",Institution:"DELSU, UNILAG",FavoriteColor:"Green et Red",Club:1},{Name:"Hunray",FieldofStudy:"Public Admin",Certification:"BSc",Institution:"OAU",FavoriteColor:"Orange et Any Primary color",Club:4},{Name:"Kenny",FieldofStudy:"LG and Dev Studies ",Certification:"HND , ACPA",Institution:"IBADAN POLY",FavoriteColor:"White et Black",Club:1},{Name:"Lakers",FieldofStudy:"URP",Certification:"B.Tech",Institution:"LAUTECH",FavoriteColor:"White et Black",Club:1},{Name:"Mackati",FieldofStudy:"Accounting",Certification:"B.Sc",Institution:"NOUN",FavoriteColor:"Red et black",Club:3},{Name:"Mikky",FieldofStudy:"Human Resource Mgt",Certification:"B.sc",Institution:"Unilag",FavoriteColor:"None",Club:2},{Name:"Nazzy",FieldofStudy:"Civil Engr",Certification:"B.Eng",Institution:"Ansu",FavoriteColor:"white",Club:1},{Name:"Nubi",FieldofStudy:"Mech Engr",Certification:"B.sc",Institution:"OOU",FavoriteColor:"None",Club:0},{Name:"Pedro",FieldofStudy:"English language",Certification:"B.Sc",Institution:"Unilorin",FavoriteColor:"Green",Club:1},{Name:"Wunderkind",FieldofStudy:"Mech. Engr",Certification:"B.Sc",Institution:"OOU",FavoriteColor:"Grey",Club:1}],B=(i(18),function(e){return n.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"}}," ",e.children," ")}),I=function(e){Object(u.a)(i,e);var t=Object(s.a)(i);function i(){var e;return Object(l.a)(this,i),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value}),console.log(t.target.value)},e.state={kings:k,searchfield:""},e}return Object(c.a)(i,[{key:"render",value:function(){var e=this,t=this.state.kings.filter((function(t){return t.Name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return n.a.createElement("div",{className:"tc"},n.a.createElement("h1",{className:"f1"},"FixedKings"),n.a.createElement(S,{searchChange:this.onSearchChange}),n.a.createElement(B,null,n.a.createElement(E,{kings:t})))}}]),i}(a.Component);i(19);r.a.render(n.a.createElement(I,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.3995b4a1.chunk.js.map