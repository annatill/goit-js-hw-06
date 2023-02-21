const categories = document.querySelectorAll('.item');
console.log(`Number of categories:${categories.length}`);

const categoriesList = document.querySelectorAll('.item');
categoriesList.forEach(category => {
  console.log(`Category: ${category.querySelector('h2').textContent}`);
  console.log(`Elements: ${category.querySelectorAll('li').length}`);
});
