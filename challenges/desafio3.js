db.produtos
  .find()
  .sort(
    {
      vendidos: -1,
    },
  )
  .limit(1)
  .find(
    {},
    {
      name: 1,
      vendidos: 1,
      _id: 0
    },
  );