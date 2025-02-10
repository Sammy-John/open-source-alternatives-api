module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Alternatives", [
      {
        id: Sequelize.literal("gen_random_uuid()"),
        name: "LibreOffice",
        description: "A powerful open-source office suite.",
        website: "https://www.libreoffice.org/",
        github: "https://github.com/LibreOffice",
        platforms: ["Windows", "Mac", "Linux"],
        features: ["Word Processing", "Spreadsheets", "Presentations"],
        github_stars: 15000,
        last_updated: new Date(),
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal("gen_random_uuid()"),
        name: "GIMP",
        description: "A free and open-source raster graphics editor.",
        website: "https://www.gimp.org/",
        github: "https://github.com/GNOME/gimp",
        platforms: ["Windows", "Mac", "Linux"],
        features: ["Layers", "Photo Editing", "Plugins"],
        github_stars: 30000,
        last_updated: new Date(),
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Alternatives", null, {});
  }
};
