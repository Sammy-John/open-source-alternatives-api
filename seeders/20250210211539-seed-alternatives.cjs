module.exports = {
  async up(queryInterface, Sequelize) {
    // Fetch all categories to get their UUIDs
    const categories = await queryInterface.sequelize.query(
      `SELECT id, name FROM "Categories";`, 
      { type: Sequelize.QueryTypes.SELECT }
    );

    // Create a mapping of category names to UUIDs
    const categoryMap = {};
    categories.forEach(category => {
      categoryMap[category.name] = category.id;
    });
    // Now use the correct UUIDs for categoryId when inserting alternatives
    await queryInterface.bulkInsert("Alternatives", [
           // 🌟 Productivity
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
            categoryId: categoryMap["Productivity"],
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            id: Sequelize.literal("gen_random_uuid()"),
            name: "OnlyOffice",
            description: "An open-source office suite with strong compatibility.",
            website: "https://www.onlyoffice.com/",
            github: "https://github.com/ONLYOFFICE",
            platforms: ["Windows", "Mac", "Linux"],
            features: ["Word Processing", "Spreadsheets", "Presentations"],
            github_stars: 9000,
            last_updated: new Date(),
            categoryId: categoryMap["Productivity"],
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            id: Sequelize.literal("gen_random_uuid()"),
            name: "CryptPad",
            description: "A private, encrypted open-source productivity suite.",
            website: "https://cryptpad.fr/",
            github: "https://github.com/xwiki-labs/cryptpad",
            platforms: ["Web"],
            features: ["Collaborative Editing", "End-to-End Encryption"],
            github_stars: 6000,
            last_updated: new Date(),
            categoryId: categoryMap["Productivity"],
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            id: Sequelize.literal("gen_random_uuid()"),
            name: "Etherpad",
            description: "A real-time collaborative document editor.",
            website: "https://etherpad.org/",
            github: "https://github.com/ether/etherpad-lite",
            platforms: ["Web"],
            features: ["Real-time Editing", "Self-Hosted"],
            github_stars: 12000,
            last_updated: new Date(),
            categoryId: categoryMap["Productivity"],
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            id: Sequelize.literal("gen_random_uuid()"),
            name: "Zim",
            description: "A personal wiki for managing notes and tasks.",
            website: "https://zim-wiki.org/",
            github: "https://github.com/zim-desktop-wiki/zim-desktop-wiki",
            platforms: ["Windows", "Mac", "Linux"],
            features: ["Note-taking", "Wiki"],
            github_stars: 5000,
            last_updated: new Date(),
            categoryId: categoryMap["Productivity"],
            createdAt: new Date(),
            updatedAt: new Date()
          },
 // 🌟 Design Tools
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
  categoryId: categoryMap["Design Tools"],
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: Sequelize.literal("gen_random_uuid()"),
  name: "Krita",
  description: "A professional open-source painting program.",
  website: "https://krita.org/",
  github: "https://github.com/KDE/krita",
  platforms: ["Windows", "Mac", "Linux"],
  features: ["Brush Engine", "Animation", "PSD Support"],
  github_stars: 18000,
  last_updated: new Date(),
  categoryId: categoryMap["Design Tools"],
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: Sequelize.literal("gen_random_uuid()"),
  name: "Inkscape",
  description: "A powerful open-source vector graphics editor.",
  website: "https://inkscape.org/",
  github: "https://github.com/inkscape/inkscape",
  platforms: ["Windows", "Mac", "Linux"],
  features: ["Vector Graphics", "SVG Support", "Bezier Curves"],
  github_stars: 20000,
  last_updated: new Date(),
  categoryId: categoryMap["Design Tools"],
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: Sequelize.literal("gen_random_uuid()"),
  name: "Darktable",
  description: "An open-source photography workflow application.",
  website: "https://www.darktable.org/",
  github: "https://github.com/darktable-org/darktable",
  platforms: ["Windows", "Mac", "Linux"],
  features: ["RAW Processing", "Photo Editing", "Non-Destructive"],
  github_stars: 15000,
  last_updated: new Date(),
  categoryId: categoryMap["Design Tools"],
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: Sequelize.literal("gen_random_uuid()"),
  name: "Blender",
  description: "A free and open-source 3D creation suite.",
  website: "https://www.blender.org/",
  github: "https://github.com/blender/blender",
  platforms: ["Windows", "Mac", "Linux"],
  features: ["3D Modeling", "Animation", "Rendering"],
  github_stars: 40000,
  last_updated: new Date(),
  categoryId: categoryMap["Design Tools"],
  createdAt: new Date(),
  updatedAt: new Date()
},

              // 🌟 Development
              {
                id: Sequelize.literal("gen_random_uuid()"),
                name: "VSCodium",
                description: "An open-source build of Visual Studio Code without telemetry.",
                website: "https://vscodium.com/",
                github: "https://github.com/VSCodium/vscodium",
                platforms: ["Windows", "Mac", "Linux"],
                features: ["Code Editor", "Extensions", "Debugger"],
                github_stars: 32000,
                last_updated: new Date(),
                categoryId: categoryMap["Development"],
                createdAt: new Date(),
                updatedAt: new Date()
              },
              {
                id: Sequelize.literal("gen_random_uuid()"),
                name: "Atom",
                description: "A hackable text editor for the 21st century.",
                website: "https://atom.io/",
                github: "https://github.com/atom/atom",
                platforms: ["Windows", "Mac", "Linux"],
                features: ["Code Editor", "Customizable UI", "Package Management"],
                github_stars: 59000,
                last_updated: new Date(),
                categoryId: categoryMap["Development"],
                createdAt: new Date(),
                updatedAt: new Date()
              },
              {
                id: Sequelize.literal("gen_random_uuid()"),
                name: "Eclipse",
                description: "A popular open-source IDE primarily for Java development.",
                website: "https://www.eclipse.org/",
                github: "https://github.com/eclipse/eclipse.jdt.ui",
                platforms: ["Windows", "Mac", "Linux"],
                features: ["IDE", "Java Support", "Plugin Extensions"],
                github_stars: 15000,
                last_updated: new Date(),
                categoryId: categoryMap["Development"],
                createdAt: new Date(),
                updatedAt: new Date()
              },
              {
                id: Sequelize.literal("gen_random_uuid()"),
                name: "Apache NetBeans",
                description: "An open-source IDE for Java, PHP, and HTML5 development.",
                website: "https://netbeans.apache.org/",
                github: "https://github.com/apache/netbeans",
                platforms: ["Windows", "Mac", "Linux"],
                features: ["IDE", "Code Completion", "Debugger"],
                github_stars: 12000,
                last_updated: new Date(),
                categoryId: categoryMap["Development"],
                createdAt: new Date(),
                updatedAt: new Date()
              },
              {
                id: Sequelize.literal("gen_random_uuid()"),
                name: "Geany",
                description: "A lightweight open-source text editor for developers.",
                website: "https://www.geany.org/",
                github: "https://github.com/geany/geany",
                platforms: ["Windows", "Mac", "Linux"],
                features: ["Lightweight IDE", "Code Highlighting", "Compiler Support"],
                github_stars: 8000,
                last_updated: new Date(),
                categoryId: categoryMap["Development"],
                createdAt: new Date(),
                updatedAt: new Date()
              },
                // 🌟 Cloud Services
                {
                  id: Sequelize.literal("gen_random_uuid()"),
                  name: "Nextcloud",
                  description: "A self-hosted file sync and sharing platform.",
                  website: "https://nextcloud.com/",
                  github: "https://github.com/nextcloud",
                  platforms: ["Windows", "Mac", "Linux"],
                  features: ["Cloud Storage", "Self-Hosted", "Collaboration"],
                  github_stars: 25000,
                  last_updated: new Date(),
                  categoryId: categoryMap["Cloud Services"],
                  createdAt: new Date(),
                  updatedAt: new Date()
                },
                {
                  id: Sequelize.literal("gen_random_uuid()"),
                  name: "Seafile",
                  description: "An open-source file sync & sharing solution.",
                  website: "https://www.seafile.com/",
                  github: "https://github.com/haiwen/seafile",
                  platforms: ["Windows", "Mac", "Linux"],
                  features: ["Cloud Storage", "Self-Hosted", "Encryption"],
                  github_stars: 13000,
                  last_updated: new Date(),
                  categoryId: categoryMap["Cloud Services"],
                  createdAt: new Date(),
                  updatedAt: new Date()
                },
                {
                  id: Sequelize.literal("gen_random_uuid()"),
                  name: "Syncthing",
                  description: "A decentralized file synchronization tool.",
                  website: "https://syncthing.net/",
                  github: "https://github.com/syncthing/syncthing",
                  platforms: ["Windows", "Mac", "Linux"],
                  features: ["File Sync", "Decentralized", "Encryption"],
                  github_stars: 20000,
                  last_updated: new Date(),
                  categoryId: categoryMap["Cloud Services"],
                  createdAt: new Date(),
                  updatedAt: new Date()
                },
                {
                  id: Sequelize.literal("gen_random_uuid()"),
                  name: "Pydio Cells",
                  description: "An open-source alternative to Google Drive and Dropbox.",
                  website: "https://pydio.com/",
                  github: "https://github.com/pydio/cells",
                  platforms: ["Windows", "Mac", "Linux"],
                  features: ["Cloud Storage", "Self-Hosted", "File Sharing"],
                  github_stars: 9000,
                  last_updated: new Date(),
                  categoryId: categoryMap["Cloud Services"],
                  createdAt: new Date(),
                  updatedAt: new Date()
                },
                {
                  id: Sequelize.literal("gen_random_uuid()"),
                  name: "Cozy Cloud",
                  description: "A personal cloud that respects user privacy.",
                  website: "https://cozy.io/",
                  github: "https://github.com/cozy",
                  platforms: ["Windows", "Mac", "Linux"],
                  features: ["Cloud Storage", "Privacy-Focused", "Self-Hosted"],
                  github_stars: 7000,
                  last_updated: new Date(),
                  categoryId: categoryMap["Cloud Services"],
                  createdAt: new Date(),
                  updatedAt: new Date()
                },
    
      
          // 🌟 Multimedia
          {
            id: Sequelize.literal("gen_random_uuid()"),
            name: "VLC Media Player",
            description: "A free and open-source cross-platform multimedia player.",
            website: "https://www.videolan.org/vlc/",
            github: "https://github.com/videolan/vlc",
            platforms: ["Windows", "Mac", "Linux"],
            features: ["Video Playback", "Audio Playback", "Streaming"],
            github_stars: 30000,
            last_updated: new Date(),
            categoryId: categoryMap["Multimedia"],
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            id: Sequelize.literal("gen_random_uuid()"),
            name: "Audacity",
            description: "A free, open-source, cross-platform audio software.",
            website: "https://www.audacityteam.org/",
            github: "https://github.com/audacity/audacity",
            platforms: ["Windows", "Mac", "Linux"],
            features: ["Audio Editing", "Multi-Track", "Effects"],
            github_stars: 28000,
            last_updated: new Date(),
            categoryId: categoryMap["Multimedia"],
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            id: Sequelize.literal("gen_random_uuid()"),
            name: "HandBrake",
            description: "A tool for converting video from nearly any format.",
            website: "https://handbrake.fr/",
            github: "https://github.com/HandBrake/HandBrake",
            platforms: ["Windows", "Mac", "Linux"],
            features: ["Video Conversion", "Compression", "Presets"],
            github_stars: 20000,
            last_updated: new Date(),
            categoryId: categoryMap["Multimedia"],
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            id: Sequelize.literal("gen_random_uuid()"),
            name: "OBS Studio",
            description: "A free and open-source software for video recording and live streaming.",
            website: "https://obsproject.com/",
            github: "https://github.com/obsproject/obs-studio",
            platforms: ["Windows", "Mac", "Linux"],
            features: ["Screen Recording", "Live Streaming", "Plugins"],
            github_stars: 35000,
            last_updated: new Date(),
            categoryId: categoryMap["Multimedia"],
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            id: Sequelize.literal("gen_random_uuid()"),
            name: "Shotcut",
            description: "A free, open-source, cross-platform video editor.",
            website: "https://www.shotcut.org/",
            github: "https://github.com/mltframework/shotcut",
            platforms: ["Windows", "Mac", "Linux"],
            features: ["Video Editing", "Filters", "4K Support"],
            github_stars: 14000,
            last_updated: new Date(),
            categoryId: categoryMap["Multimedia"],
            createdAt: new Date(),
            updatedAt: new Date()
          },
    
          // 🌟 Security & Privacy
          {
            id: Sequelize.literal("gen_random_uuid()"),
            name: "Tor Browser",
            description: "A privacy-focused browser that anonymizes web traffic.",
            website: "https://www.torproject.org/",
            github: "https://github.com/torproject/tor",
            platforms: ["Windows", "Mac", "Linux"],
            features: ["Anonymity", "Onion Routing", "Privacy Protection"],
            github_stars: 15000,
            last_updated: new Date(),
            categoryId: categoryMap["Security & Privacy"],
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            id: Sequelize.literal("gen_random_uuid()"),
            name: "KeePassXC",
            description: "A secure open-source password manager.",
            website: "https://keepassxc.org/",
            github: "https://github.com/keepassxreboot/keepassxc",
            platforms: ["Windows", "Mac", "Linux"],
            features: ["Password Manager", "Encryption", "Cross-Platform"],
            github_stars: 20000,
            last_updated: new Date(),
            categoryId: categoryMap["Security & Privacy"],
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            id: Sequelize.literal("gen_random_uuid()"),
            name: "ProtonMail",
            description: "An end-to-end encrypted email service.",
            website: "https://proton.me/mail",
            github: "https://github.com/ProtonMail/WebClients",
            platforms: ["Web", "Android", "iOS"],
            features: ["End-to-End Encryption", "Secure Email", "Privacy-Focused"],
            github_stars: 18000,
            last_updated: new Date(),
            categoryId: categoryMap["Security & Privacy"],
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            id: Sequelize.literal("gen_random_uuid()"),
            name: "Pi-hole",
            description: "A network-wide ad blocker.",
            website: "https://pi-hole.net/",
            github: "https://github.com/pi-hole/pi-hole",
            platforms: ["Linux"],
            features: ["Ad Blocking", "DNS Filtering", "Privacy Protection"],
            github_stars: 38000,
            last_updated: new Date(),
            categoryId: categoryMap["Security & Privacy"],
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            id: Sequelize.literal("gen_random_uuid()"),
            name: "VeraCrypt",
            description: "An open-source disk encryption software.",
            website: "https://www.veracrypt.fr/",
            github: "https://github.com/veracrypt/VeraCrypt",
            platforms: ["Windows", "Mac", "Linux"],
            features: ["Full-Disk Encryption", "Privacy", "Security"],
            github_stars: 11000,
            last_updated: new Date(),
            categoryId: categoryMap["Security & Privacy"],
            createdAt: new Date(),
            updatedAt: new Date()
          },
    
           // 🌟 Networking & Communication
           {
            id: Sequelize.literal("gen_random_uuid()"),
            name: "Jitsi Meet",
            description: "A secure, open-source video conferencing solution.",
            website: "https://jitsi.org/",
            github: "https://github.com/jitsi/jitsi-meet",
            platforms: ["Web", "Android", "iOS"],
            features: ["Video Conferencing", "End-to-End Encryption", "Self-Hosted"],
            github_stars: 21000,
            last_updated: new Date(),
            categoryId: categoryMap["Networking & Communication"],
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            id: Sequelize.literal("gen_random_uuid()"),
            name: "Matrix",
            description: "An open network for secure and decentralized communication.",
            website: "https://matrix.org/",
            github: "https://github.com/matrix-org",
            platforms: ["Web", "Android", "iOS"],
            features: ["Decentralized Messaging", "End-to-End Encryption", "Self-Hosted"],
            github_stars: 25000,
            last_updated: new Date(),
            categoryId: categoryMap["Networking & Communication"],
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            id: Sequelize.literal("gen_random_uuid()"),
            name: "Signal",
            description: "A private messaging app with end-to-end encryption.",
            website: "https://signal.org/",
            github: "https://github.com/signalapp",
            platforms: ["Android", "iOS", "Desktop"],
            features: ["Private Messaging", "End-to-End Encryption", "Secure Calls"],
            github_stars: 55000,
            last_updated: new Date(),
            categoryId: categoryMap["Networking & Communication"],
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            id: Sequelize.literal("gen_random_uuid()"),
            name: "Mattermost",
            description: "An open-source Slack alternative for team communication.",
            website: "https://mattermost.com/",
            github: "https://github.com/mattermost/mattermost-server",
            platforms: ["Web", "Android", "iOS", "Desktop"],
            features: ["Team Messaging", "Self-Hosted", "Integration Support"],
            github_stars: 25000,
            last_updated: new Date(),
            categoryId: categoryMap["Networking & Communication"],
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            id: Sequelize.literal("gen_random_uuid()"),
            name: "Element",
            description: "A secure and decentralized messaging app based on Matrix.",
            website: "https://element.io/",
            github: "https://github.com/vector-im/element-web",
            platforms: ["Web", "Android", "iOS"],
            features: ["Decentralized Messaging", "End-to-End Encryption", "Federated Chats"],
            github_stars: 15000,
            last_updated: new Date(),
            categoryId: categoryMap["Networking & Communication"],
            createdAt: new Date(),
            updatedAt: new Date()
          },
    
           // 🌟 Education & Research
           {
            id: Sequelize.literal("gen_random_uuid()"),
            name: "Moodle",
            description: "An open-source learning management system (LMS).",
            website: "https://moodle.org/",
            github: "https://github.com/moodle/moodle",
            platforms: ["Web"],
            features: ["Online Learning", "Course Management", "Self-Hosted"],
            github_stars: 10000,
            last_updated: new Date(),
            categoryId: categoryMap["Education & Research"],
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            id: Sequelize.literal("gen_random_uuid()"),
            name: "Jupyter Notebook",
            description: "An open-source tool for interactive computing and data science.",
            website: "https://jupyter.org/",
            github: "https://github.com/jupyter/notebook",
            platforms: ["Web", "Mac", "Linux", "Windows"],
            features: ["Data Science", "Python Support", "Notebook Execution"],
            github_stars: 25000,
            last_updated: new Date(),
            categoryId: categoryMap["Education & Research"],
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            id: Sequelize.literal("gen_random_uuid()"),
            name: "Open edX",
            description: "A scalable open-source learning management system.",
            website: "https://openedx.org/",
            github: "https://github.com/edx/edx-platform",
            platforms: ["Web"],
            features: ["Online Learning", "Customizable", "Scalable LMS"],
            github_stars: 14000,
            last_updated: new Date(),
            categoryId: categoryMap["Education & Research"],
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            id: Sequelize.literal("gen_random_uuid()"),
            name: "Zotero",
            description: "A free, easy-to-use tool to help collect, organize, cite, and share research.",
            website: "https://www.zotero.org/",
            github: "https://github.com/zotero/zotero",
            platforms: ["Windows", "Mac", "Linux"],
            features: ["Reference Management", "Citation Support", "Cloud Sync"],
            github_stars: 7000,
            last_updated: new Date(),
            categoryId: categoryMap["Education & Research"],
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            id: Sequelize.literal("gen_random_uuid()"),
            name: "Scilab",
            description: "A free and open-source alternative to MATLAB for numerical computing.",
            website: "https://www.scilab.org/",
            github: "https://github.com/scilab/scilab",
            platforms: ["Windows", "Mac", "Linux"],
            features: ["Numerical Computing", "Simulation", "Data Analysis"],
            github_stars: 5000,
            last_updated: new Date(),
            categoryId: categoryMap["Education & Research"],
            createdAt: new Date(),
            updatedAt: new Date()
          },

          
           // 🌟 Finance & Business
           {
            id: Sequelize.literal("gen_random_uuid()"),
            name: "GnuCash",
            description: "A free, open-source personal and small-business financial accounting software.",
            website: "https://www.gnucash.org/",
            github: "https://github.com/Gnucash/gnucash",
            platforms: ["Windows", "Mac", "Linux"],
            features: ["Accounting", "Budgeting", "Double-Entry Bookkeeping"],
            github_stars: 5000,
            last_updated: new Date(),
            categoryId: categoryMap["Education & Research"],
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            id: Sequelize.literal("gen_random_uuid()"),
            name: "HomeBank",
            description: "An easy-to-use personal finance manager.",
            website: "http://homebank.free.fr/",
            github: "https://github.com/HomeBank/HomeBank",
            platforms: ["Windows", "Mac", "Linux"],
            features: ["Expense Tracking", "Budgeting", "Financial Reports"],
            github_stars: 3000,
            last_updated: new Date(),
            categoryId: categoryMap["Education & Research"],
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            id: Sequelize.literal("gen_random_uuid()"),
            name: "Ledger",
            description: "A double-entry accounting system with a plain text file format.",
            website: "https://www.ledger-cli.org/",
            github: "https://github.com/ledger/ledger",
            platforms: ["Linux", "Mac", "Windows"],
            features: ["Plain Text Accounting", "CLI-Based", "Highly Customizable"],
            github_stars: 5000,
            last_updated: new Date(),
            categoryId: categoryMap["Education & Research"],
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            id: Sequelize.literal("gen_random_uuid()"),
            name: "ERPNext",
            description: "A full-fledged, open-source enterprise resource planning (ERP) solution.",
            website: "https://erpnext.com/",
            github: "https://github.com/frappe/erpnext",
            platforms: ["Web"],
            features: ["Business Management", "Accounting", "HR & Payroll"],
            github_stars: 15000,
            last_updated: new Date(),
            categoryId: categoryMap["Education & Research"],
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            id: Sequelize.literal("gen_random_uuid()"),
            name: "Invoice Ninja",
            description: "A free and open-source invoicing, expenses, and time-tracking tool.",
            website: "https://invoiceninja.com/",
            github: "https://github.com/invoiceninja/invoiceninja",
            platforms: ["Web", "Self-Hosted"],
            features: ["Invoicing", "Expense Management", "Client Portal"],
            github_stars: 9000,
            last_updated: new Date(),
            categoryId: categoryMap["Education & Research"],
            createdAt: new Date(),
            updatedAt: new Date()
          },
    
            // 🌟 Utilities & Tools
            {
              id: Sequelize.literal("gen_random_uuid()"),
              name: "BleachBit",
              description: "A free, open-source system cleaner that protects privacy and frees disk space.",
              website: "https://www.bleachbit.org/",
              github: "https://github.com/bleachbit/bleachbit",
              platforms: ["Windows", "Linux"],
              features: ["Disk Cleanup", "Privacy Protection", "Shredding Files"],
              github_stars: 3000,
              last_updated: new Date(),
              categoryId: categoryMap["Utilities & Tools"],
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              id: Sequelize.literal("gen_random_uuid()"),
              name: "Rclone",
              description: "A command-line tool to sync files and directories to various cloud storage providers.",
              website: "https://rclone.org/",
              github: "https://github.com/rclone/rclone",
              platforms: ["Windows", "Mac", "Linux"],
              features: ["Cloud Storage Sync", "Encryption", "Remote Access"],
              github_stars: 35000,
              last_updated: new Date(),
              categoryId: categoryMap["Utilities & Tools"],
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              id: Sequelize.literal("gen_random_uuid()"),
              name: "htop",
              description: "An interactive process viewer for Unix systems.",
              website: "https://htop.dev/",
              github: "https://github.com/htop-dev/htop",
              platforms: ["Linux", "Mac"],
              features: ["Process Monitoring", "System Metrics", "Real-Time Performance"],
              github_stars: 6000,
              last_updated: new Date(),
              categoryId: categoryMap["Utilities & Tools"],
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              id: Sequelize.literal("gen_random_uuid()"),
              name: "Syncthing",
              description: "A decentralized file synchronization tool.",
              website: "https://syncthing.net/",
              github: "https://github.com/syncthing/syncthing",
              platforms: ["Windows", "Mac", "Linux"],
              features: ["File Sync", "Decentralized", "Encryption"],
              github_stars: 20000,
              last_updated: new Date(),
              categoryId: categoryMap["Utilities & Tools"],
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              id: Sequelize.literal("gen_random_uuid()"),
              name: "Etcher",
              description: "A simple, cross-platform tool to flash OS images to USB drives.",
              website: "https://www.balena.io/etcher/",
              github: "https://github.com/balena-io/etcher",
              platforms: ["Windows", "Mac", "Linux"],
              features: ["USB Image Flasher", "Cross-Platform", "Easy-to-Use"],
              github_stars: 23000,
              last_updated: new Date(),
              categoryId: categoryMap["Utilities & Tools"],
              createdAt: new Date(),
              updatedAt: new Date()
            },
      
           // 🌟 Gaming & Emulation
           {
            id: Sequelize.literal("gen_random_uuid()"),
            name: "RetroArch",
            description: "A frontend for emulators, game engines, and media players.",
            website: "https://www.retroarch.com/",
            github: "https://github.com/libretro/RetroArch",
            platforms: ["Windows", "Mac", "Linux", "Android", "iOS"],
            features: ["Multi-System Emulation", "Shaders", "Netplay"],
            github_stars: 18000,
            last_updated: new Date(),
            categoryId: categoryMap["Utilities & Tools"],
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            id: Sequelize.literal("gen_random_uuid()"),
            name: "PCSX2",
            description: "A PlayStation 2 emulator.",
            website: "https://pcsx2.net/",
            github: "https://github.com/PCSX2/pcsx2",
            platforms: ["Windows", "Mac", "Linux"],
            features: ["PS2 Emulation", "Controller Support", "HD Rendering"],
            github_stars: 25000,
            last_updated: new Date(),
            categoryId: categoryMap["Utilities & Tools"],
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            id: Sequelize.literal("gen_random_uuid()"),
            name: "Dolphin Emulator",
            description: "An emulator for GameCube and Wii.",
            website: "https://dolphin-emu.org/",
            github: "https://github.com/dolphin-emu/dolphin",
            platforms: ["Windows", "Mac", "Linux"],
            features: ["GameCube/Wii Emulation", "4K Support", "Controller Mapping"],
            github_stars: 35000,
            last_updated: new Date(),
            categoryId: categoryMap["Utilities & Tools"],
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            id: Sequelize.literal("gen_random_uuid()"),
            name: "PPSSPP",
            description: "A PlayStation Portable emulator.",
            website: "https://www.ppsspp.org/",
            github: "https://github.com/hrydgard/ppsspp",
            platforms: ["Windows", "Mac", "Linux", "Android", "iOS"],
            features: ["PSP Emulation", "High-Resolution Rendering", "Save States"],
            github_stars: 20000,
            last_updated: new Date(),
            categoryId: categoryMap["Utilities & Tools"],
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            id: Sequelize.literal("gen_random_uuid()"),
            name: "OpenRA",
            description: "An open-source reimplementation of classic Command & Conquer games.",
            website: "https://www.openra.net/",
            github: "https://github.com/OpenRA/OpenRA",
            platforms: ["Windows", "Mac", "Linux"],
            features: ["Real-Time Strategy", "Multiplayer", "Modding Support"],
            github_stars: 12000,
            last_updated: new Date(),
            categoryId: categoryMap["Utilities & Tools"],
            createdAt: new Date(),
            updatedAt: new Date()
          },
    
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Alternatives", null, {});
  }
};
