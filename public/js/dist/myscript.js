alert("hi");
const node = document.querySelector('.box');
[...Array(5)].forEach(_ => node.parentNode.insertBefore(node.cloneNode(true), node));