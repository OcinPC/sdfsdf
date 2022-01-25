const layerConfigurations = [
  {
    growEditionSizeTo: 5,
    layersOrder: [
      { name: "Shoes" },
      { name: "Leaf" },
      { name: "Pants" },
    ],
    incompatibleTraits: {
      "Shoes/BOOSTER_LEGS#2.png": [
        "Pants/JEANS-BLUE#3.png",
      ],
    }
  },
];

module.exports = {
  layerConfigurations,
};