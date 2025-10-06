import React from "react"
import Link from "next/link"

interface NavLink {
  id: number
  name: string
  link: string
  isDropdown: boolean
  dropdownItems: NavLink[]
}

const Header = () => {
  const navLinks: NavLink[] = [
    {
      id: 1,
      name: "Products",
      isDropdown: true,
      link: "#",
      dropdownItems: [
        {
          id: 101,
          name: "Survey Builder",
          link: "/survey-builder",
          isDropdown: false,
          dropdownItems: [],
        },
        {
          id: 102,
          name: "Audience",
          link: "/audience",
          isDropdown: false,
          dropdownItems: [],
        },
        {
          id: 103,
          name: "Templates",
          link: "/templates",
          isDropdown: false,
          dropdownItems: [],
        },
        {
          id: 104,
          name: "Analytics",
          link: "/analytics",
          isDropdown: false,
          dropdownItems: [],
        },
      ],
    },
    {
      id: 2,
      name: "Solutions",
      isDropdown: true,
      link: "#",
      dropdownItems: [
        {
          id: 201,
          name: "Customer Experience",
          link: "/solutions/cx",
          isDropdown: false,
          dropdownItems: [],
        },
        {
          id: 202,
          name: "Employee Engagement",
          link: "/solutions/employee",
          isDropdown: false,
          dropdownItems: [],
        },
        {
          id: 203,
          name: "Market Research",
          link: "/solutions/market-research",
          isDropdown: false,
          dropdownItems: [],
        },
        {
          id: 204,
          name: "Academic Research",
          link: "/solutions/academic",
          isDropdown: false,
          dropdownItems: [],
        },
      ],
    },
    {
      id: 3,
      name: "Resources",
      isDropdown: true,
      link: "#",
      dropdownItems: [
        {
          id: 301,
          name: "Blog",
          link: "/blog",
          isDropdown: false,
          dropdownItems: [],
        },
        {
          id: 302,
          name: "Help Center",
          link: "/help",
          isDropdown: false,
          dropdownItems: [],
        },
        {
          id: 303,
          name: "Webinars",
          link: "/webinars",
          isDropdown: false,
          dropdownItems: [],
        },
        {
          id: 304,
          name: "Case Studies",
          link: "/case-studies",
          isDropdown: false,
          dropdownItems: [],
        },
        {
          id: 305,
          name: "Survey Templates",
          link: "/survey-templates",
          isDropdown: false,
          dropdownItems: [],
        },
      ],
    },
    {
      id: 4,
      name: "Pricing",
      isDropdown: false,
      link: "/pricing",
      dropdownItems: [],
    },
    {
      id: 5,
      name: "Enterprise",
      isDropdown: false,
      link: "/enterprise",
      dropdownItems: [],
    },
  ]
  const userNavLinks: NavLink[] = [
    {
      id: 6,
      name: "My Surveys",
      isDropdown: false,
      link: "/my-surveys",
      dropdownItems: [],
    },
    {
      id: 7,
      name: "Account",
      isDropdown: true,
      link: "#",
      dropdownItems: [
        {
          id: 701,
          name: "Profile",
          link: "/account/profile",
          isDropdown: false,
          dropdownItems: [],
        },
        {
          id: 702,
          name: "Billing",
          link: "/account/billing",
          isDropdown: false,
          dropdownItems: [],
        },
        {
          id: 703,
          name: "Settings",
          link: "/account/settings",
          isDropdown: false,
          dropdownItems: [],
        },
        {
          id: 704,
          name: "Logout",
          link: "/logout",
          isDropdown: false,
          dropdownItems: [],
        },
      ],
    },
  ]

  return (
    <div className="bg-white">
      <div className="container mx-auto flex items-center justify-between p-4 dark:text-black">
        <div>
          <p>TimelyResearch LLC</p>
        </div>
        <ul className="flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Header
