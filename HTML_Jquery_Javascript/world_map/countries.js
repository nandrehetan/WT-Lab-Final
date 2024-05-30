document.addEventListener('DOMContentLoaded', function() {
    const countries = [
        {
            name: 'United States',
            capital: 'Washington, D.C.',
            population: '331 million',
            flag: 'https://flagcdn.com/us.svg'
        },
        {
            name: 'India',
            capital: 'New Delhi',
            population: '1.366 billion',
            flag: 'https://flagcdn.com/in.svg'
        },
        {
            name: 'China',
            capital: 'Beijing',
            population: '1.398 billion',
            flag: 'https://flagcdn.com/cn.svg'
        },
        {
            name: 'Brazil',
            capital: 'Brasília',
            population: '211 million',
            flag: 'https://flagcdn.com/br.svg'
        },
        {
            name: 'Afganisthan',
            capital: 'Kabul',
            population: '344 million',
            flag: 'https://flagcdn.com/af.svg'
        },
        {
            name: 'Australia',
            capital: 'Canberra',
            population: '256 million',
            flag: 'https://flagcdn.com/au.svg'
        }
        // Add more countries as needed
    ];

    const container = document.getElementById('countries-container');

    countries.forEach(country => {
        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.src = country.flag;
        img.alt = `Flag of ${country.name}`;

        const name = document.createElement('h3');
        name.textContent = country.name;

        const capital = document.createElement('p');
        capital.textContent = `Capital: ${country.capital}`;

        const population = document.createElement('p');
        population.textContent = `Population: ${country.population}`;

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(capital);
        card.appendChild(population);

        container.appendChild(card);
    });
});
