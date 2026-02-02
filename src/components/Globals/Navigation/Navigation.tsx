import Link from "next/link";

import { getMenuItems } from "@/data";
import styles from "./Navigation.module.css";

export default async function Navigation() {
  const menuItems = getMenuItems();

  return (
    <nav
      className={styles.navigation}
      role="navigation"
      itemScope
      itemType="http://schema.org/SiteNavigationElement"
    >
      {menuItems.nodes.map((item: any, index: number) => {
        if (!item.uri) return null;

        return (
          <Link
            itemProp="url"
            href={`${item.uri}`}
            key={index}
            target={item.target || "_self"}
          >
            <span itemProp="name">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
