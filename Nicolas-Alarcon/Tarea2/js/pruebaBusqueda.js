const users = [{name: 'Matías'}, {name: 'Nico'}, {name: 'María'}];
const results = [];
const search = 'Mat'; // Probar con: Nico, María, Ma, NoExisto

users.forEach(el => {
    if(el.name.indexOf(search) !== -1) {
        results.push(el);
    }
});

console.log(results);
