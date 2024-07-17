export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  teacherNav: [
    {
      title: "Dashboard",
      items: [
        {
          title: "Home",
          href: "/dashboard/staff/home",
          items: [],
        },
        {
          title: "Requests",
          href: "/dashboard/staff/requests",
          items: [],
        },
        {
          title: "Messages",
          href: "/dashboard/staff/messages",
          items: [],
        },
      ],
    },
  ],
  staffNav: [
    {
      title: "Dashboard",
      items: [
        {
          title: "Rosters",
          href: "/dashboard/staff",
          items: [],
        },
        {
          title: "All Students",
          href: "/dashboard/staff/students",
          items: [],
        },
      ],
    },
  ],
  studentNav: [
    {
      title: "Dashboard",
      href: "/dashboard/student",
    },
  ],
  docNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/help/introduction",
          items: [],
        },
      ],
    },
    {
      title: "Guides",
      items: [
        {
          title: "Students",
          href: "/help/students",
          items: [],
        },
      ],
    },
  ],
};
