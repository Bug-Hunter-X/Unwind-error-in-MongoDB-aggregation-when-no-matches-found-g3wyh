```javascript
const pipeline = [
  {
    $lookup: {
      from: "collection2",
      localField: "_id",
      foreignField: "foreignKey",
      as: "results"
    }
  },
  {
    $addFields: {
      results: {
        $ifNull: [ "$results", [] ]
      }
    }
  },
  {
    $unwind: "$results" 
  }
];
```