import { routes } from "../routes";

export function NavDesktop() {
  return (
    <ul className="hidden lg:flex flex-row gap-8 text-custom_white-dark">
      {routes.map((route) => (
        <li key={route.title}>
          <a className="hover:opacity-50 transition" href={route.href}>
            {route.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
