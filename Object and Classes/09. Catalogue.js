function orderedCatalogue(array) {
    let catalogue = [];
    for (let i = 0; i < array.length; i++) {
        let elements = array[i].split(' : ');
        let product = {
            name: elements[0],
            price: parseFloat(elements[1])
        };
        catalogue.push(product);
    }
    // catalogue.sort((a,b) => a.name > b.name ? 1 : -1);
    catalogue.sort((a, b) => a.name.localeCompare(b.name));

    let currentLetter = '';
    for (const product of catalogue) {
        if (product.name.charAt(0).toUpperCase() === currentLetter) {
            console.log(`  ${product.name}: ${product.price}`)
        } else {
            currentLetter = product.name.charAt(0).toUpperCase();
            console.log(currentLetter);
            console.log(`  ${product.name}: ${product.price}`)

        }
    }
}

orderedCatalogue([
    "Appricot : 20.4",
    "Fridge : 150",
    "TV : 149",
    "Deodorant : 1",
    "Boiler : 30",
    "Apple : 1.2",
    "Anti-Bug Spray : 15",
    "T-Shirt : 1"])