const listEl = document.querySelectorAll('.item');

console.log('Number of categories:', listEl.length);


[...listEl].map(nodeEl => {
    const [h2, ul] = nodeEl.children
    console.log('Category:', h2.textContent)
    console.log('Elements:', ul.children.length)
})
