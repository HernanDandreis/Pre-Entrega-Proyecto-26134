### Pre Entrega Proyecto Final NODEJS - Codo a Codo | Comision 26134

Alumno: Hernan D'Andreis
Mail: arcanfore00@gmail.com

Api de cnosulta: https://fakestoreapi.com/docs

JSON structure:

    {
        id: 1,
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 109.95,
        description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
        rating: { rate: 3.9, count: 120 }
    }

Comandos: <br>
npm start index.js GET products <br>
npm start index.js GET products/ID <br>
npm start index.js POST products <br>
npm start index.js DELETE products/ID 

Disclaimers:

- El METHOD y ENDPOINT deben ser escritos (mayusculas y minusculas) tal como se indica en el apartado de "Comandos"
- No se recibira respuestas a ID superiores al 20 para el METHOD DELETE ni para el METHOD GET ENDPOINT products/ID
- El METHOD POST en todo los casos devolvera el ID 21 pero no es posible traerlo con los metodos GET (como se menciona en el punto anterior)
