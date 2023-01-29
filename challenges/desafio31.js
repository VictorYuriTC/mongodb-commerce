db.produtos.find(
  {
    $where: function() {
      return this.curtidas > this.vendidos;
    },
  },

  {
    nome: 1,
    _id: 0,
  },
);
