import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>Website help page</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam tempora
        quam possimus ad laborum reprehenderit porro laboriosam, cumque esse
        voluptatibus. Beatae, vitae ut deleniti natus optio voluptatem ipsam
        iure itaque!
      </p>
      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact us</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
