```json
{
  "store": {
    "name": "Adventure Gear",
    "inventory": [
      { "product": "Hiking Boots", "price": 120, "inStock": true },
      { "product": "Climbing Rope", "price": 55, "inStock": false }
    ]
  }
}
```

> select(data.store.inventory, item => item.inStock == true).map(item => item.product)


```json
[
  { "sales": 500 },
  { "sales": 820 },
  { "sales": 250 }
]
```
Assuming you have Postman variables 'userId' and 'searchString'
> select(data.comments, item => item.userId == {{userId}} and contains(item.text, {{searchString}}))

