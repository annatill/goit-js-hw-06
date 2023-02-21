const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const makeImgEl = image => {
  const { url, alt } = image;
  return `
    <li class="list__style">
      <img class="image__style" alt="${alt}" src="${url}">
    </li>
  `;
};

const listGalleryEl = document.querySelector('.gallery');

const containerEl = document.createElement('div');
containerEl.classList.add('container');
containerEl.append(listGalleryEl);

const imageMarkup = images.map(makeImgEl).join('');
listGalleryEl.insertAdjacentHTML('beforeend', imageMarkup);
document.body.insertAdjacentElement('beforeend', containerEl);
