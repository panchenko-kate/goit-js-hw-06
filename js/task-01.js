const categoriesRef = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesRef.length);


categoriesRef.forEach((element) => {
    const elementTitleRef = element.querySelector('h2').textContent;
        
    const titleElements = element.querySelectorAll('li');
    const elemCount = titleElements.length;
        
    console.log('Category:', elementTitleRef);
    console.log('Elements:', elemCount);
    
});