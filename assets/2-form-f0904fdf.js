const e=document.querySelector(".feedback-form"),s=e.elements.email,r=e.elements.message;e.addEventListener("input",o);e.addEventListener("submit",m);const a="feedback-form-state",l=JSON.parse(localStorage.getItem(a));l&&(s.value=l.email??"",r.value=l.message??"");function o(t){let n={email:t.currentTarget.elements.email.value.trim(),message:t.currentTarget.elements.message.value.trim()};localStorage.setItem(a,JSON.stringify(n))}function m(t){t.preventDefault(),s.value!==""&&r.value!==""?(console.log(JSON.parse(localStorage.getItem(a))),localStorage.removeItem(a),e.reset()):alert("Fill both fields!")}
//# sourceMappingURL=2-form-f0904fdf.js.map