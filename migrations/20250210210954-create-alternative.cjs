module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Alternatives", {
      id: {
        type: Sequelize.UUID, // ✅ Ensure Alternatives use UUIDs
        defaultValue: Sequelize.literal("gen_random_uuid()"),
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      website: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      github: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      platforms: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      features: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      github_stars: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      last_updated: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      categoryId: {
        type: Sequelize.UUID, // ✅ Change to UUID to match Categories
        allowNull: false,
        references: {
          model: "Categories",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Alternatives");
  }
};
