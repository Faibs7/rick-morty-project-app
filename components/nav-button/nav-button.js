export function createButton() {
  const button = document.createElement("nav");
  button.innerHTML = `<button class="button button--prev" data-js="button-prev">
  previous
</button>
<span class="navigation__pagination" data-js="pagination">1 / 1</span>
<button class="button button--next" data-js="button-next">next</button>`;
  return button;
}
