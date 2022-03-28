import { Burger, Group, Menu, MenuItem, MenuLabel } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Book, Forms, Moon2 } from "tabler-icons-react";
import { themeStore } from "../../libs/store";
import styled from "./navbar.module.css";

const Navbar = () => {
  const { switchMode } = themeStore();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <div className={styled.navbar}>
        <Group position="right">
          <Menu
            control={<Burger opened={open} onClick={() => setOpen(!open)} />}
          >
            <MenuLabel> Menu </MenuLabel>
            <MenuItem
              onClick={() => {
                setOpen(false);
                navigate("/");
              }}
              icon={<Book size={20} />}
            >
              Splash Page
            </MenuItem>
            <MenuItem
              onClick={() => {
                setOpen(false);
                navigate("/form");
              }}
              icon={<Forms size={20} />}
            >
              Form
            </MenuItem>
            <MenuItem
              onClick={() => {
                setOpen(false);
                switchMode();
              }}
              icon={<Moon2 size={20} />}
            >
              Theme
            </MenuItem>
          </Menu>
        </Group>
      </div>
    </>
  );
};

export default Navbar;
