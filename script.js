const user = {};
for (let i = 1; i <= 10; i++) {
    const name = prompt(`Foydalanuvchi ${i} ismini kiriting:`);
    const age = prompt(`Foydalanuvchi ${i} yoshini kiriting:`);

    user[`user${i}`] = {
        id: i,
        name: name,
        age: age
    };
}

for (let key in user) {
    console.log(`Foydalanuvchini id ${user[key].id}`);
    console.log(`ismi: ${user[key].name}`);
    console.log(`Yoshini: ${user[key].name}`);
}
console.log(user);