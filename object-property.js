const students = [
    { id: 21, name: 'omar Sunny' },
    { id: 31, name: 'Maaannaaaa' },
    { id: 45, name: 'Moiyouri' },
    { id: 71, name: 'Deepjol' }
]

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 40);
const biggerOne = students.find(s => s.id > 40);
console.log(biggerOne);