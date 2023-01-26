db.produtos.deleteMany(
  {
    $and: [
      {
        curtidas: { $lt: 50 }
      },
    ],
  },
).find(
  {},
  {
    nome: 1,
    _id: 0,
  },
);
