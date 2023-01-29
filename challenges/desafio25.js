db.produtos.updateMany(
  {
    valoresNutricionais: {
      $elemMatch: {
        $and: [
          {
            percentual: {
              $gte: 40,
            },

            tipo: "sódio",
          },
        ],
      },
    },
  },

  {
    $push: {
      tags: {
        $each: ["muito sódio"],
      },
    },
  },
);

db.produtos.find(
  {

  },

  {
    nome: 1,
    tags: 1,
    _id: 0,
  },
);
