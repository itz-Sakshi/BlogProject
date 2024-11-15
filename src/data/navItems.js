import React from "react";
import { useSelector } from "react-redux";

const NavBar = () => {
  const authStatus = useSelector((state) => state.auth.status);

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Videos",
      slug: "/videos",
      active: true,
    },
    {
      name: "Play Game",
      slug: "/play-game",
      active: true,
    },
    {
      name: "Posts",
      slug: "/posts",
      active: authStatus,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "My Posts",
      slug: "/my-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <nav>
      {navItems
        .filter((item) => item.active)
        .map((item) => (
          <a key={item.slug} href={item.slug}>
            {item.name}
          </a>
        ))}
    </nav>
  );
};

export default NavBar;
