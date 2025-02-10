module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Comparisons", [
      {
        id: Sequelize.literal("gen_random_uuid()"),
        software1: "Photoshop",
        software2: "GIMP",
        feature: "Layers",
        software1_support: true,
        software2_support: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal("gen_random_uuid()"),
        software1: "Microsoft Word",
        software2: "LibreOffice Writer",
        feature: "Track Changes",
        software1_support: true,
        software2_support: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Comparisons", null, {});
  }
};
