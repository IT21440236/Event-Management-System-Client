// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import { useState, useEffect } from "react";
// import logo from "../assets/img/logo1.png";
// import navIcon1 from "../assets/img/nav-icon1.svg";
// import github from "../assets/img/github.svg";
// import twitter from "../assets/img/twitter.svg";

// const NavBar = () => {
//   const [activeLink, setActiveLink] = useState("home"); //initially home will be active
//   const [scrolled, setScrolled] = useState(false);

//   const onscroll = () => {
//     if (window.scrollY > 50) {
//       setScrolled(true);
//     } else {
//       setScrolled(false);
//     }
//   };

//   //useEffect will be triggered once the scroll starts
//   useEffect(() => {
//     if (window.scrollY > 50) {
//       setScrolled(true);
//     } else {
//       setScrolled(false);
//     }

//     window.addEventListener("scroll", onscroll); //this will be fired when scroll

//     return () => window.removeEventListener("scroll", onscroll);
//   }, []);

//   const onUpdateActiveLink = (value) => {
//     setActiveLink(value);
//   };

//   return (
//     <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
//       <Container>
//         <Navbar.Brand href="#home">
//           <img src={logo} alt="logo" />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav">
//           <span className="navbar-toggler-icon"></span>
//         </Navbar.Toggle>
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link
//               href="#home"
//               className={
//                 activeLink === "home" ? "active navbar-link" : "navbar-link"
//               }
//               onClick={() => onUpdateActiveLink("home")}
//             >
//               Home
//             </Nav.Link>
//             <Nav.Link
//               href="#skills"
//               className={
//                 activeLink === "skills" ? "active navbar-link" : "navbar-link"
//               }
//               onClick={() => onUpdateActiveLink("skills")}
//             >
//               Skills
//             </Nav.Link>
//             <Nav.Link
//               href="#projects"
//               className={
//                 activeLink === "projects" ? "active navbar-link" : "navbar-link"
//               }
//               onClick={() => onUpdateActiveLink("projects")}
//             >
//               Projects
//             </Nav.Link>
//             <Nav.Link
//               href="https://medium.com/@ykods"
//               className={
//                 activeLink === "https://medium.com/@ykods"
//                   ? "active navbar-link"
//                   : "navbar-link"
//               }
//               onClick={() => onUpdateActiveLink("https://medium.com/@ykods")}
//             >
//               Blog
//             </Nav.Link>
//           </Nav>
//           <span className="navbar-text">
//             <div className="social-icon">
//               <a href="https://www.linkedin.com/in/yeran-kods/">
//                 <img src={navIcon1} alt="" />
//               </a>
//               <a href="https://twitter.com/Ykods9191">
//                 <img src={twitter} alt="" />
//               </a>
//               <a href="https://github.com/IT21440236">
//                 <img src={github} alt="" />
//               </a>
//             </div>
//             <button
//               className="vvd"
//               onClick={() =>
//                 (window.location.href =
//                   "https://www.linkedin.com/in/yeran-kods/")
//               }
//             >
//               <span>Let's connect</span>
//             </button>
//           </span>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavBar;
