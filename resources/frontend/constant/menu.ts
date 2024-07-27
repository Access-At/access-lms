export const menu = [
  { name: "Home", path: "/" },
  { name: "Categories", path: "/categories" },
  { name: "Teams", path: "/teams" },
  { name: "Blog", path: "/blog" },
  {
    name: "Dropdown",
    dropdown: [
      { name: "About", path: "/about" },
      {
        name: "Submenu",
        submenu: [
          { name: "Submenu item 1", path: "/submenu/item1" },
          { name: "Submenu item 2", path: "/submenu/item2" },
        ],
      },
      { name: "Downloads", path: "/downloads" },
      { name: "Team account", path: "/team-account" },
    ],
  },
  { name: "Login", path: "/login" },
]
