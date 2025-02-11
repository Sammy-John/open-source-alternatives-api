module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Comparisons", [
      // 🌟 Design Tools Comparison
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
        software1: "Photoshop",
        software2: "Krita",
        feature: "Brush Engine",
        software1_support: true,
        software2_support: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      // 🌟 Productivity Tools Comparison
      {
        id: Sequelize.literal("gen_random_uuid()"),
        software1: "Microsoft Word",
        software2: "LibreOffice Writer",
        feature: "Track Changes",
        software1_support: true,
        software2_support: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal("gen_random_uuid()"),
        software1: "Microsoft Excel",
        software2: "LibreOffice Calc",
        feature: "Pivot Tables",
        software1_support: true,
        software2_support: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      // 🌟 Cloud Services Comparison
      {
        id: Sequelize.literal("gen_random_uuid()"),
        software1: "Google Drive",
        software2: "Nextcloud",
        feature: "File Syncing",
        software1_support: true,
        software2_support: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal("gen_random_uuid()"),
        software1: "Dropbox",
        software2: "Seafile",
        feature: "End-to-End Encryption",
        software1_support: false,
        software2_support: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      // 🌟 Security & Privacy Comparison
      {
        id: Sequelize.literal("gen_random_uuid()"),
        software1: "Google Chrome",
        software2: "Tor Browser",
        feature: "Anonymity",
        software1_support: false,
        software2_support: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal("gen_random_uuid()"),
        software1: "LastPass",
        software2: "KeePassXC",
        feature: "Offline Mode",
        software1_support: false,
        software2_support: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      // 🌟 Gaming & Emulation Comparison
      {
        id: Sequelize.literal("gen_random_uuid()"),
        software1: "PlayStation 2",
        software2: "PCSX2",
        feature: "Emulation Support",
        software1_support: false,
        software2_support: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal("gen_random_uuid()"),
        software1: "Nintendo Wii",
        software2: "Dolphin Emulator",
        feature: "4K Resolution Support",
        software1_support: false,
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

