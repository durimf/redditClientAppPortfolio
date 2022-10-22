import { 
 Link, 
 Outlet, 
 useLoaderData,
 Form,
redirect,
NavLink,
 useNavigation,
   useSubmit } from "react-router-dom";
import { getContacts, createContact } from "../contacts";
import Navbar from "../components/Navbar";

import { Box, Container } from '@mui/material'
import { ThemeProvider } from "styled-components";
import darkTheme from "../styles/styles";

export async function loader({ request }) {
   const url = new URL(request.url);
   const q = url.searchParams.get("q");
   const contacts = await getContacts(q);
   return { contacts,q };
}

export async function action() {
 const contact = await createContact();
 return redirect(`/contacts/${contact.id}/edit`);
}



export default function Root() {
//  const { contacts, q } = useLoaderData();
//  const navigation = useNavigation();
//    const submit = useSubmit();


//    const searching =
//       navigation.location &&
//       new URLSearchParams(navigation.location.search).has(
//          "q"
//       );

//    useEffect(() => {
//       document.getElementById("q").value = q;
//    }, [q]);


 return (
   
  <Container>
  <Navbar  />
    </Container>
  
 );
}