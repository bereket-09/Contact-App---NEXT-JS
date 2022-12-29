import MainNav from "./main-nav.component";

export function Layout(props: any) {
  return (
    <div>
      <MainNav />
      <main>{props.children}</main>
    </div>
  );
}
