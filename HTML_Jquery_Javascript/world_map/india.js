document.addEventListener('DOMContentLoaded', function() {
    const states = [
        {
            name: 'Maharashtra',
            capital: 'Mumbai',
            population: '131 million',
            flag: 'https://www.maharashtratourism.gov.in/static/media/welcom1.2b1949312d23f1b1a819.png'
        },
        {
            name: 'Kerala',
            capital: 'Thiruvananthapuram',
            population: '35 million',
            flag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOH_-5S1WRBRHhTheNOWkcXRTrwaraSoRg3-UYbk9WDA&s'
        },
        {
            name: 'Tamil Nadu',
            capital: 'Chennai',
            population: '72 million',
            flag: 'https://images.blacktomato.com/2015/02/Tamil-Nadu.jpg?auto=compress%2Cformat&fit=crop&h=800&ixlib=php-3.3.1&w=1520&s=7b5927576e0a885b750262ddc516cb6d'
        },
        {
            name: 'Karnataka',
            capital: 'Bangalore',
            population: '68 million',
            flag: 'https://www.karnatakatourism.org/wp-content/uploads/2020/05/HAMPI-Vijayanagara-1.jpg'
        },
        {
            name: 'West Bengal',
            capital: 'Kolkata',
            population: '91 million',
            flag: 'https://deih43ym53wif.cloudfront.net/victoria-memorial-architectural-monument-museum-kolkata-shutterstock_643469977.jpg_bea19c345c.jpg'
        },
        {
            name: 'Gujarat',
            capital: 'Gandhinagar',
            population: '63 million',
            flag: 'https://i.ndtvimg.com/i/2017-12/gujarat-day-pti_650x400_51512711592.jpg'
        }
        // Add more states as needed
    ];

    const container = document.getElementById('states-container');

    states.forEach(state => {
        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.src = state.flag;
        img.alt = `Flag of ${state.name}`;

        const name = document.createElement('h3');
        name.textContent = state.name;

        const capital = document.createElement('p');
        capital.textContent = `Capital: ${state.capital}`;

        const population = document.createElement('p');
        population.textContent = `Population: ${state.population}`;

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(capital);
        card.appendChild(population);

        container.appendChild(card);
    });
});
