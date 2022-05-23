import View from './View.js';
import icons from '../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found with your search. Please try another one!';
  _successMessage = '';

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join('');
  }

  _generateMarkupPreview(results) {
    return `
    <li class="preview">
        <a class="preview__link " href="#${results.id}">
          <figure class="preview__fig">
            <img src="${results.image}" alt="${results.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${results.title}</h4>
            <p class="preview__publisher">${results.publisher}</p>
          </div>
        </a>
    </li>
  `;
  }
}

export default new ResultsView();