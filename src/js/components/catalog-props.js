import vars from '../_vars';

vars.$catalogColumns.addEventListener('click', (e) => {
    if (e.target.classList.contains('catalog-columns__btn') || e.target.closest('catalog-columns__item')) {
        let columns = e.target.dataset.columns;
        let columnsBtn = document.querySelectorAll(".catalog-columns__btn");

        columnsBtn.forEach(el => {
            el.classList.remove('main-link_current', 'catalog-columns__btn_current');
        });

        e.target.classList.add('main-link_current', 'catalog-columns__btn_current');

        vars.$catalogGridContent.dataset.gridColumns = columns;
    }
});