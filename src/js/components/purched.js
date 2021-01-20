import vars from '../_vars';

let delay = 10000;

let counter = 0;

const data = [
    {
        title: 'Title of product 1',
        where: 'Moscow, Russia'
    },
    {
        title: 'Title of product 2',
        where: 'Kyiv, Ukrane'
    },
    {
        title: 'Title of product 2',
        where: 'Los Angeles, USA'
    }

];

const closePurched = () => {
    vars.$purched.classList.remove('purched_visible');
};

const changePurchedData = () => {
    vars.$purched.classList.remove('purched_visible');
    setTimeout(() => {
        vars.$purched.classList.add('purched_visible');
    }, delay);
    const stringTitle = `${data[counter].title}`;
    const stringWhere = `15 minutes ago ${data[counter].where}`;

    vars.$purched.querySelector('.purched__title').textContent = stringTitle;
    vars.$purched.querySelector('.purched__when-from').textContent = stringWhere;

    counter++;

    if (counter == data.length) {
        counter = 0;
    }
};

changePurchedData();

setInterval(changePurchedData, delay - 2000);

vars.$purched.addEventListener('click', (e) => {
    if (e.target.classList.contains('purched__close')) {
        closePurched();
    }
});