"use client";
import Link from "next/link";
import {
  LayoutDashboard,
  MailWarning,
  Building2,
  Users,
  UserRound,
  Truck,
  TreePalm,
} from "lucide-react";
import { usePathname } from "next/navigation";

const SuperAdminSideMenu = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Affiliation Requests",
    path: "/dashboard/requests",
    icon: MailWarning,
  },
  {
    label: "Companies",
    path: "/dashboard/companies",
    icon: Building2,
  },
  {
    label: "Lands",
    path: "/dashboard/lands",
    icon: TreePalm,
  },
  {
    label: "Users",
    path: "/dashboard/users",
    icon: Users,
  },
  {
    label: "Profile",
    path: "/dashboard/profile",
    icon: UserRound,
  },
];

const AdminSideMenu = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Company",
    path: "/dashboard/company",
    icon: Building2,
  },
  {
    label: "Employee",
    path: "/dashboard/employee",
    icon: Users,
  },
  {
    label: "Lands",
    path: "/dashboard/land",
    icon: TreePalm,
  },
  {
    label: "Shippings",
    path: "/dashboard/shippings",
    icon: Truck,
  },
  {
    label: "Profile",
    path: "/dashboard/profile",
    icon: UserRound,
  },
];

const DriverSideMenu = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Shippings",
    path: "/dashboard/my-shippings",
    icon: Truck,
  },
  {
    label: "Profile",
    path: "/dashboard/profile",
    icon: UserRound,
  },
];

const UserSideMenu = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Profile",
    path: "/dashboard/profile",
    icon: UserRound,
  },
];

export function SuperAdminSideNavLinks() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col space-y-2">
      {SuperAdminSideMenu.map((link, index) => {
        const Icon = link.icon;
        // const isActive = link.path === pathname;
        const isActive =
          link.path === "/dashboard" && pathname === "/dashboard"
            ? true
            : link.path !== "/dashboard" && pathname.startsWith(link.path);

        return (
          <Link
            key={index}
            href={link.path}
            className={`flex flex-row items-center py-2 text-sm font-medium text-zinc-600 transition-colors duration-150 md:rounded-full md:border-r-0 md:py-2 md:pl-4 md:hover:border-l-zinc-800 md:hover:bg-zinc-100 md:hover:text-zinc-800 ${isActive && "border-r-2 text-zinc-950 md:bg-zinc-100"}`}
          >
            <Icon className="mr-2 h-auto w-4" />
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}

export function AdminSideNavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col space-y-1">
      {AdminSideMenu.map((link, index) => {
        const Icon = link.icon;
        const isActive =
          link.path === "/dashboard" && pathname === "/dashboard"
            ? true
            : link.path !== "/dashboard" && pathname.startsWith(link.path);

        return (
          <Link
            key={index}
            href={link.path}
            className={`flex flex-row items-center py-2 text-sm font-medium text-zinc-600 transition-colors duration-150 md:rounded-full md:border-r-0 md:py-2 md:pl-4 md:hover:border-l-zinc-800 md:hover:bg-zinc-100 md:hover:text-zinc-800 ${isActive && "border-r-2 text-zinc-950 md:bg-zinc-100"}`}
          >
            <Icon className="mr-2 h-auto w-4" />
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}

export function DriverSideNavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col space-y-1">
      {DriverSideMenu.map((link, index) => {
        const Icon = link.icon;
        const isActive =
          link.path === "/dashboard" && pathname === "/dashboard"
            ? true
            : link.path !== "/dashboard" && pathname.startsWith(link.path);

        return (
          <Link
            key={index}
            href={link.path}
            className={`flex flex-row items-center py-2 text-sm font-medium text-zinc-600 transition-colors duration-150 md:rounded-full md:border-r-0 md:py-2 md:pl-4 md:hover:border-l-zinc-800 md:hover:bg-zinc-100 md:hover:text-zinc-800 ${isActive && "border-r-2 text-zinc-950 md:bg-zinc-100"}`}
          >
            <Icon className="mr-2 h-auto w-4" />
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}

export function UserSideNavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col space-y-1">
      {UserSideMenu.map((link, index) => {
        const Icon = link.icon;
        const isActive =
          link.path === "/dashboard" && pathname === "/dashboard"
            ? true
            : link.path !== "/dashboard" && pathname.startsWith(link.path);

        return (
          <Link
            key={index}
            href={link.path}
            className={`flex flex-row items-center py-2 text-sm font-medium text-zinc-600 transition-colors duration-150 md:rounded-full md:border-r-0 md:py-2 md:pl-4 md:hover:border-l-zinc-800 md:hover:bg-zinc-100 md:hover:text-zinc-800 ${isActive && "border-r-2 text-zinc-950 md:bg-zinc-100"}`}
          >
            <Icon className="mr-2 h-auto w-4" />
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
