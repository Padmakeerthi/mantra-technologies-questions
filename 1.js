var types = [{
    'id': 1,
    'type': 'external'
  },
  {
    'id': 2
  },
  {
    'id': 3,
    type: 'internal'
  }
];

var filteredTypes = types.filter(function(item) {
  return item.type == 'external';
});

console.log(filteredTypes);
