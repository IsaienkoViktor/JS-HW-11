var calcScrollValue=function(){var e=document.getElementById("progress"),c=(document.getElementById("progress-value"),document.documentElement.scrollTop),n=document.documentElement.scrollHeight-document.documentElement.clientHeight,o=Math.round(100*c/n);e.style.display=c>100?"grid":"none",e.addEventListener("click",(function(){document.documentElement.scrollTop=0})),e.style.background="conic-gradient(rgba(79, 46, 232, 0.3) ".concat(o,"%, #F6F6F6 ").concat(o,"%)")};window.onscroll=calcScrollValue,window.onload=calcScrollValue;
//# sourceMappingURL=scroll.253ad674.js.map
