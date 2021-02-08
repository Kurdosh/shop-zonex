import vars from '../_vars';

vars.$catalogFiltersTop.forEach(el => {
    el.addEventListener('click', (e) => {
        e.currentTarget.closest(".catalog-filter").classList.toggle('catalog-filter_open');
    });
});

vars.$hideFilters.addEventListener('click', (e) => {
    vars.$catalogFilters.forEach(el => {
        el.classList.remove('catalog-filter_open');
    });
});

const createChoiceItem = (text) => {
    return (
        `<button class="btn-reset catalog-choice__item">
            ${text}
            <svg aria-hidden="true">
                <use xlink:href="img/sprite.svg#close"></use>
            </svg>
        </button>`
    );
};

vars.$catalogFilterItems.forEach(el => {
    el.querySelector('input').addEventListener('change', (e) => {
        let checked = el.querySelector('input').checked;
        if (checked) {
            el.querySelector(".custom-checkbox").classList.add("custom-checkbox_active");
            let text = el.querySelector(".custom-checkbox__text").textContent;


            vars.$catalogChoice.insertAdjacentHTML("afterBegin", createChoiceItem(text));
            
        } else {
            el.querySelector(".custom-checkbox").classList.remove("custom-checkbox_active");
        }

        let activeCheckboxes = document.querySelectorAll(".custom-checkbox_active");

        if (activeCheckboxes.length > 0) {
            vars.$catalogChoice.style.display = "block";
        } else {
            vars.$catalogChoice.style.display = "none";
        }
    });
});

vars.$catalogChoice.addEventListener("click", (e) => {
    if (e.target.classList.contains("catalog-choice__item")) {
        e.target.remove();

        let text = e.target.textContent.trimLeft().trimRight();

        document.querySelector(`[data-text="${text}"]`).querySelector("input").checked = false;
        document.querySelector(`[data-text="${text}"]`).classList.remove("custom-checkbox_active");
    }
    if (e.currentTarget.children.length === 1) {
        e.currentTarget.style.display = "none";
    }
    if (e.target.classList.contains("catalog-choice__clear")) {
        Array.from(e.currentTarget.children).forEach(el => {
            if (!el.classList.contains("catalog-choice__clear")) {
                el.remove();
            }

            vars.$catalogFilterItems.forEach(el => {
                el.querySelector("input").checked = false;
                el.querySelector(".custom-checkbox").classList.remove("custom-checkbox_active");
            });
        });
        e.currentTarget.style.display = "none";
    }
});