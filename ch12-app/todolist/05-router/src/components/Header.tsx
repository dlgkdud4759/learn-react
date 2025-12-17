import { NavLink } from "react-router";

function Header() {
  return (
    <>
      <header>
        <h1>Todo List</h1>
        <nav>
          <div>
            <ul>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "menu-dark" : "menu"
                  }
                  to="/"
                >
                  home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "menu-dark" : "menu"
                  }
                  to="/about"
                >
                  about
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "menu-dark" : "menu"
                  }
                  to="/todo/list"
                >
                  Todolist
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
