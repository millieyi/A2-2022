function clicked() {
    const p = document.createElement('p');
    p.innerHTML = 'something';
    document.body.appendChild(p);
  }
  
  document.querySelector('[data-btn]').addEventListener('click', clicked);
  
  function anotherButtonClicked() {
    document.body.style.backgroundColor = '#000';
    document.querySelector('body').style.color = '#fff';
  }
  
  function pickColor() {
    const val = document.querySelector('#color-picker').value;
    document.body.style.backgroundColor = val;
  }
  
  function dataEntered() {
    const text = document.querySelector('[data-input]').value;
    const p = document.querySelector('[data-text]');
    // p.innerHTML = text;
    p.textContent = text;
  }
  
  function somethingTyped() {
    const value = document.querySelector('#input').value;
    const text = document.querySelector('#text');
    text.textContent = value;
  }
  
  function formSubmitted() {
    const text = document.querySelector('[data-thing]').value;
    const li = document.createElement('li');
    li.textContent = text;
    // li.innerHTML = text
  
    const ul = document.querySelector('[data-list]');
    ul.appendChild(li);
    document.querySelector('[data-thing]').value = '';
  }
  
  const listOfPeople = [ 'covid', 'shrek', 'fiona', 'donkey', 'dragon'];
  
  listOfPeople.forEach(function (name) {
    const h2 = document.createElement('h2');
    h2.innerHTML = name;
    document.body.appendChild(h2);
  });
  
  const images = [
    'https://picsum.photos/id/1040/200',
    'https://picsum.photos/id/1040/200',
    'https://picsum.photos/id/1040/200',
    'https://picsum.photos/id/1040/200',
    
  ];
  
  images.forEach(function(imageSource){
      const img = document.createElement('img');
      img.src = imageSource;
      img.alt = 'example image';
      const figure = document.querySelector('#album');
      figure.appendChild(img)
  })
  
  for(let i = 0; i < 20; i++) {
    const img = document.createElement('img');
    // 'https://picsum.photos/id/1440/600';
    img.src = 'https://picsum.photos/id/' + i + '/400';
    // const figure = document.createElement('figure');
    // figure.appendChild(img);
    document.body.appendChild(img);
  }

  /*concatenation - a series of interconnceted things*/