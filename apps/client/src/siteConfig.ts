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
        {
          title: "Student Guide",
          href: "/help/students",
          items: [],
        },
        {
          title: "FAQ",
          href: "/help/faq",
          items: [],
        },
        {
          title: "Updates",
          href: "/help/updates",
          items: [],
        },
      ],
    },
    {
      title: "Staff Guides",
      items: [
        {
          title: "Teacher Dashboard",
          href: "/help/teacher-dashboard",
          items: [],
        },
        {
          title: "Teacher Requests and Messages",
          href: "/help/requests-messages",
          items: [],
        },
        {
          title: "Student Directories",
          href: "/help/student-directories",
          items: [],
        },
      ],
    },
  ],
};
