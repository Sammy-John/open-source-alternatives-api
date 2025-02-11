module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Categories", [
      { name: "Productivity", createdAt: new Date(), updatedAt: new Date() },
      { name: "Design Tools", createdAt: new Date(), updatedAt: new Date() },
      { name: "Development", createdAt: new Date(), updatedAt: new Date() },
      { name: "Cloud Services", createdAt: new Date(), updatedAt: new Date() },
      { name: "Multimedia", createdAt: new Date(), updatedAt: new Date() },
      { name: "Security & Privacy", createdAt: new Date(), updatedAt: new Date() },
      { name: "Networking & Communication", createdAt: new Date(), updatedAt: new Date() },
      { name: "Education & Research", createdAt: new Date(), updatedAt: new Date() },
      { name: "Finance & Business", createdAt: new Date(), updatedAt: new Date() },
      { name: "Utilities & Tools", createdAt: new Date(), updatedAt: new Date() },
      { name: "Gaming & Emulation", createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  }
};

