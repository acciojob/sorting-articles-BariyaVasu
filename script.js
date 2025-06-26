    const bands = [
      'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil',
      'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State',
      'We Came as Romans', 'Counterparts', 'Oh, Sleeper',
      'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
    ];

    function stripArticles(str) {
      return str.replace(/^(a |an |the )/i, '').trim();
    }

    const sortedBands = bands.slice().sort((a, b) =>
      stripArticles(a).localeCompare(stripArticles(b))
    );

    const ul = document.getElementById('bands'); // ✅ match the ID used in Cypress
    sortedBands.forEach(band => {
      const li = document.createElement('li');
      li.textContent = band;
      ul.appendChild(li);
    });