import ContactList from "../components/contact-list.component";
import fetch from "isomorphic-unfetch";

export default function Home(props: any) {
  return (
    <div>
      <div>
        <h1 className="title flex justify-center font-35 bold mt-5 mb-5">
          CONTACTS LIST
        </h1>
      </div>
      <ContactList data={props.data}></ContactList>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:4000/contacts");
  console.log("🚀 ~ file: index.tsx:19 ~ res", res);
  const data = await res.json();

  console.log("🚀 ~ file: index.tsx:20 ~ data", data);

  return { props: { data } };
}
// Home.getInitialProps = async function () {
//   const res = await fetch("http://localhost:4000/contacts");
//   console.log("🚀 ~ file: index.tsx:19 ~ res", res)
//   const data = await res.json();

//   console.log("🚀 ~ file: index.tsx:20 ~ data", data)

//   return {
//     data,
//   };
// };
