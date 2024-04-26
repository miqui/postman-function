
/*
  response data:
  [ 
    {
      "id": 123,
      "categody": "plumbing",
      "name": "MyName"
    }
  ]

*/
const response = pm.response.json();
const toolId = response.map(tool => tool.lid);
pm.variables.set('tooldIds', toolId);
