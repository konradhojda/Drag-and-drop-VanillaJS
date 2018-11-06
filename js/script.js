document.addEventListener('DOMContentLoaded', () => {
    notEmpty.addEventListener('dragstart', dragStart);
    notEmpty.addEventListener('dragend', dragEnd);

    for (let empty of emptyBox) {
        empty.addEventListener('dragover', dragOver);
        empty.addEventListener('dragenter', dragEnter);
        empty.addEventListener('dragleave', dragLeave);
        empty.addEventListener('drop', dragDrop);
    }
});

const notEmpty = document.querySelector('.not-empty');
const emptyBox = document.querySelectorAll('.empty');

const dragStart = function () {
    this.className += ' keep';
    setTimeout(() => this.classList.add('hidden'), 20);
};

const dragEnd = function () {
    this.className = 'not-empty';
};

const dragOver = function (e) {
    e.preventDefault();
};

const dragEnter = function (e) {
    e.preventDefault();
    this.className += ' hover';
};

const dragLeave = function () {
    this.className = 'empty';
};

const dragDrop = function () {
    this.className = 'empty';
    this.append(notEmpty);
};