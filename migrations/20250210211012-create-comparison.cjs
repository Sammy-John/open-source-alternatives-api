module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Comparisons", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      software1: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      software2: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      feature: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      software1_support: {
        type: Sequelize.BOOLEAN,
      },
      software2_support: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable("Comparisons");
  }
};
