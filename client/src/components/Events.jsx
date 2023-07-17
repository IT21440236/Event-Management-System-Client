// // import projImg1 from "../assets/img/project-img1.png";
// // import projImg2 from "../assets/img/project-img2.png";
// // import projImg3 from "../assets/img/project-img3.png";
// import colorSharp2 from "../assets/img/color-sharp2.png";
// import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
// import ProjectCard from "./ProjectCard";
// import "animate.css";
// import TrackVisibility from "react-on-screen";

// const Events = () => {
//   const projects = [
//     {
//       title: "SOUTHERN AGRO SERVE (Pvt) Ltd",
//       description:
//         "BUSINESS MANAGEMENT SYSTEM FOR SOUTHERN AGRO SERVE (Pvt) Ltd",
//       imgUrl:
//         "https://lvivity.com/wp-content/uploads/2020/04/iot-in-agriculture.jpg",
//       projectURL: "https://github.com/SLIITITP/ITP_WE_B01_TW_14",
//     },
//     {
//       title: "FinTrack",
//       description:
//         "The FinTrack mobile application is made to assist people in effectively managing their finances",
//       imgUrl:
//         "https://i.pinimg.com/originals/49/44/fd/4944fd56b523dd0a1ca27334a6005653.png",
//       projectURL: "https://github.com/IT21440236/FinTrack",
//     },
//     {
//       title: "Online Pet Care System",
//       description:
//         "Web Application to cater the services required by pets and their owners.",
//       imgUrl:
//         "https://d3544la1u8djza.cloudfront.net/APHI/Blog/2022/04-18/woman+and+dog+having+an+online+consultation+with+a+veterinarian-min.jpg",
//       projectURL: "https://github.com/IT21440236/Online-Pet-Care-System",
//     },
//     {
//       title: "Online Grocery Ordering System",
//       description: "Web Application to cater the services required customers.",
//       imgUrl:
//         "https://www.lifewire.com/thmb/QSOMHSqmmeKBioN9SK0j4TEiM8U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Primary-Image-he-11-best-online-grocery-shopping-sites-in-2023-3482646-92bbb19773c84315a1f78c7ecf628bce.jpg",
//       projectURL:
//         "https://github.com/IT21440236/Online-Grocery-Ordering-System---Y2S1",
//     },
//     {
//       title: "TheCodingTrio",
//       description: "We Build Pat Projects",
//       imgUrl:
//         "https://img.freepik.com/free-vector/teenager-boy-cozy-room-attic-interior-cartoon-vector-with-roof-window_33099-1327.jpg?w=2000",
//       projectURL: "https://github.com/TheCodingTrio",
//     },
//   ];

//   return (
//     <section className="project" id="projects">
//       {/* id attribute is wht navigates you to the relevant section when u click on the navbar links. The href="#projects" text must be equal to the id attribute. */}
//       <Container>
//         <Row>
//           <Col>
//             <TrackVisibility>
//               {(
//                 { isVisible } //Is visible is from TrackVisibility.
//               ) => (
//                 //not from react.(make sure the remove the import that automatically comes when u type in isVisible)
//                 <div
//                   className={
//                     isVisible ? "animate__animated animate__slideInUp" : ""
//                   } //These classnames u can obtain from https://animate.style/
//                 >
//                   <h2>Projects</h2>
//                   <p>
//                     Explore my projects, where innovation meets functionality.
//                     From responsive designs to seamless user experiences.
//                   </p>
//                 </div>
//               )}
//             </TrackVisibility>
//             <Tab.Container id="projects-tabs" defaultActiveKey="first">
//               <Nav
//                 variant="pills"
//                 className="nav-pills mb-5 justify-content-center align-items-center"
//                 id="pills-tab"
//               >
//                 <Nav.Item>
//                   <Nav.Link eventKey="first">Tab 1</Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                   <Nav.Link eventKey="second">Tab 2</Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                   <Nav.Link eventKey="third">Tab 3</Nav.Link>
//                 </Nav.Item>
//               </Nav>
//               <Tab.Content>
//                 <Tab.Pane eventKey="first">
//                   <Row>
//                     {projects.map((project, index) => {
//                       return <ProjectCard key={index} {...project} />;
//                     })}
//                   </Row>
//                 </Tab.Pane>
//                 <Tab.Pane eventKey="second">
//                   Await for more projects...
//                 </Tab.Pane>
//                 <Tab.Pane eventKey="third">Await for more projects...</Tab.Pane>
//               </Tab.Content>
//             </Tab.Container>
//           </Col>
//         </Row>
//       </Container>
//       <img
//         className="background-image-right"
//         src={colorSharp2}
//         alt="colorSharp2"
//       />
//     </section>
//   );
// };

// export default Events;
