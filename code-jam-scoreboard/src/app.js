fetch('../data/sessions.json')
  .then(res => res.json())
  .then((data) => {
    console.log('data:', data);
  });
