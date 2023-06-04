export const createImgCard = imgInfo => {
  const imgArray = imgInfo.map(img => {
    return `
    <a class=".gallery__image" href="${img.largeImageURL}">
    <div class="photo-card">
  <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy" />
  <div class="info">
    <p class="info-item"
      <b>Likes</b><br>${img.likes}
    </p>
    <p class="info-item">
      <b>Views</b>${img.views}
    </p>
    <p class="info-item">
      <b>Comments</b>${img.comments}
    </p>
    <p class="info-item">
      <b>Downloads</b>${img.downloads}
    </p>
  </div>
</div>
</a>`;
  });
  return imgArray.join('');
  
};
