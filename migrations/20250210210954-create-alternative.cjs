module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Alternatives", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
      },
      website: {
        type: Sequelize.STRING,
      },
      github: {
        type: Sequelize.STRING,
      },
      platforms: {
        type: Sequelize.ARRAY(Sequelize.STRING), // Example: ["Windows", "Mac", "Linux"]
      },
      features: {
        type: Sequelize.ARRAY(Sequelize.STRING), // Example: ["Self-Hosted", "Cloud Storage"]
      },
      github_stars: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      last_updated: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Categories",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
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
