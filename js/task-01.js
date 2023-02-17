// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента(тега < h2 >) и количество элементов в категории(всех вложенных в него < li >).

const categories = document.querySelectorAll('.item');
console.log(`Number of categories:${categories.length}`);

const categoriesList = document.querySelectorAll('.item');
categoriesList.forEach(category => {
  console.log(`Category: ${category.querySelector('h2').textContent}`);
  console.log(`Elements: ${category.querySelectorAll('li').length}`);
});

//   console.log(`Category: ${category.firstElementChild.textContent}`);
//   console.log(`Elements: ${category.lastElementChild.children.length}`);
