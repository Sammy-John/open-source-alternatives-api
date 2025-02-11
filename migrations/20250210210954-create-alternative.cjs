module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Alternatives", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal("gen_random_uuid()"),
        primaryKey: true,
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
        allowNull: false,
      },
      github: {
        type: Sequelize.STRING,
        allowNull: false,
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
        allowNull: false,
      },
      last_updated: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      categoryId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Categories",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
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

  async down(queryInterface, Sequelize) { // ✅ Make sure this is async
    await queryInterface.dropTable("Alternatives");
  }
};
