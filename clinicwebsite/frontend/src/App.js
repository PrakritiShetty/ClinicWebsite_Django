import React, {Component} from "react";
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,Dropdown,DropdownToggle,DropdownMenu,DropdownItem,NavbarText} from 'reactstrap';
import {Button, Toast, ToastHeader, ToastBody, Row, Col, Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from "reactstrap";
import {TfiCheckBox} from "react-icons/tfi"
import testimonial from "./testimonials.png"
import general from "./cleaningteeth.jpg"
import cosmetic from "./Porcelain-Veneers-Smiles-of-Chandler-AZ.webp"
import surgical from "./Dental-implant-illustration.jpg"
import { MDBRipple } from 'mdb-react-ui-kit';
import ListGroup from 'react-bootstrap/ListGroup';
import {BsInstagram} from "react-icons/bs"
import {AiOutlineLinkedin} from "react-icons/ai"

const HoverData = "Click or pinch to Zoom Image";

const items = [
    {
      id:1,
      src: "https://media.tenor.com/LwKy5Mellj8AAAAC/clinic-dentist.gif" ,
      altText: 'Slide 1',
      caption: 'Prakriti Shetty',
      
    },
    {
      id:2,
      src: 'https://media.tenor.com/LwKy5Mellj8AAAAC/clinic-dentist.gif',
      altText: 'Slide 2',
      caption: 'Pratiksha Shetty'
    },
    {
      id:3,
      src: 'https://media.tenor.com/LwKy5Mellj8AAAAC/clinic-dentist.gif',
      altText: 'Slide 3',
      caption: 'Sandhya Shetty'
    }
  ];

class App extends Component{

    constructor(props)
    {
        super(props);
        this.state = ({
            isOpen: false, isOpenG: false, isOpenC: false, isOpenS: false, 
            activeIndex: 0,
            hover:false,
            hover1:false,
            hover2:false,
            opacity:1
        });
        this.onHover = this.onHover.bind(this);
        this.onHoverOver = this.onHoverOver.bind(this);
        this.onHover1 = this.onHover1.bind(this);
        this.onHoverOver1 = this.onHoverOver1.bind(this);
        this.onHover2 = this.onHover2.bind(this);
        this.onHoverOver2 = this.onHoverOver2.bind(this);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onMouseEnter = () => { this.setState({    isOpen: true}); };
    onMouseLeave = () => {this.setState({isOpen: false});};
    onMouseEnterG = () => {this.setState({isOpenG: true});};
    onMouseLeaveG = () => {this.setState({isOpenG: false});};
    onMouseEnterC = () => {this.setState({isOpenC: true});};
    onMouseLeaveC = () => {this.setState({isOpenC: false});};
    onMouseEnterS = () => {this.setState({isOpenS: true});};
    onMouseLeaveS = () => {this.setState({isOpenS: false});};
    onHover= (e) => {
        e.preventDefault();
        
        console.log("hovering");
        this.setState({opacity:0.2, hover: true});
        
      };
    onHoverOver = (e) => {
        e.preventDefault();
        this.setState({ hover: false});
      };
    onHover1= (e) => {
        e.preventDefault();
        console.log("hovering");
        this.setState({opacity:0.2, hover1: true});
        
      };
    onHoverOver1 = (e) => {
        e.preventDefault();
        this.setState({hover1: false});
      };
    onHover2= (e) => {
        e.preventDefault();
        console.log("hovering");
        this.setState({opacity:0.2, hover2: true});
        
      };
    onHoverOver2 = (e) => {
        e.preventDefault();
        this.setState({hover2: false});
      };

    onExiting() {this.animating = true;}
    onExited()  {this.animating = false;}    
    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }
    previous() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
    }
    goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({ activeIndex: newIndex });
    }
    
    render()
    {
        const { activeIndex } = this.state;
        
        

        const slides = items.map((item) => {
          return (
            <CarouselItem
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={item.id}
              style={{color:"black", fontFamily:"Marck Script"}}
              className="text-secondary"

            >
            
            <img src={testimonial} alt={item.altText} style={{width:"2720px", height:"350px"}}/>
            
              
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} className="text-secondary" style={{padding:"10px", fontFamily:"Marck Script"}} />
            </CarouselItem>
          );
        });

        return(

            
        <div>
                    <Navbar color="secondary" style={{color:"white"}}>
                        <NavbarBrand href="/" style={{color:"white", fontFamily:"Arizonia", fontSize:"30px"}} >Dr Sandhya's Total Dental Care</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                            
                                <Nav className="ms-auto">
                                    <NavItem >
                                        <NavLink href="/about" style={{color:"white"}}>About</NavLink>
                                    </NavItem>
                                    
                                    <Dropdown onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.isOpen}>
                                      <DropdownToggle nav caret style={{color:"white"}}>
                                        Services
                                      </DropdownToggle>
                                        <DropdownMenu right>
                                            <Dropdown direction="left" onMouseOver={this.onMouseEnterG} onMouseLeave={this.onMouseLeaveG} isOpen={this.state.isOpenG}>
                                            <DropdownToggle nav >General</DropdownToggle>
                                                <DropdownMenu >
                                                    <DropdownItem href="/cleaningexams">Cleanings and Exams</DropdownItem>
                                                  
                                                    <DropdownItem href="/crowns">Crowns</DropdownItem>
                                                    <DropdownItem href="/extractions">Tooth Extractions</DropdownItem>
                                                    <DropdownItem href="/gumtherapy">Gum Therapy</DropdownItem>
                                                    <DropdownItem href="/bondingfillings">Bonding and White Fillings</DropdownItem>
                                                    <DropdownItem href="/dentures">Dentures</DropdownItem>
                                                    <DropdownItem href="/nightguards">Night Guards</DropdownItem>
                                                    <DropdownItem>Family Dentistry</DropdownItem>
                                                    <DropdownItem >Emergency Care</DropdownItem>    
                                                </DropdownMenu>
                                            </Dropdown >
                                            <DropdownItem divider />
                                            <Dropdown direction="left" onMouseOver={this.onMouseEnterC} onMouseLeave={this.onMouseLeaveC} isOpen={this.state.isOpenC}>
                                            <DropdownToggle nav>Cosmetic</DropdownToggle>
                                                <DropdownMenu >
                                                    <DropdownItem href="/invisalign">InvisAlign</DropdownItem>
                                                    
                                                    <DropdownItem href="/teethwhitening">Teeth Whitening</DropdownItem>
                                                    <DropdownItem href="/bondingfillings">Bonding</DropdownItem>
                                                    <DropdownItem href="/veneers">Veneers</DropdownItem>
                                                    <DropdownItem href="/smilemakeover">Smile Makeover</DropdownItem>
                                                    <DropdownItem href="/gummysmilereduction">Gummy Smile Reduction</DropdownItem>
                                                    <DropdownItem>Full Mouth Rehabilitation</DropdownItem>   
                                                </DropdownMenu>
                                            </Dropdown >
                                            <DropdownItem divider />
                                            <Dropdown direction="left" onMouseOver={this.onMouseEnterS} onMouseLeave={this.onMouseLeaveS} isOpen={this.state.isOpenS}>
                                            <DropdownToggle nav>Surgical</DropdownToggle>
                                                <DropdownMenu >
                                                    <DropdownItem href="/implants">Implants</DropdownItem>
                                                    <DropdownItem href="/extractions">Extractions</DropdownItem>
                                                    <DropdownItem href="/rootcanal">Root Canal</DropdownItem>
                                                    <DropdownItem href="/bonegraft">Bone Graft</DropdownItem>
                                                    <DropdownItem href="/implantsupporteddentures">Implant-supported Dentures</DropdownItem>
                                                    <DropdownItem href="/bridges">Bridges</DropdownItem>
                                                    <DropdownItem href="/overdentures">Over Dentures</DropdownItem>
                                                    <DropdownItem href="/samedayimplants">Same day Implants</DropdownItem>   
                                                </DropdownMenu>
                                            </Dropdown >
                                        </DropdownMenu>
                                    </Dropdown>
                                    <NavItem>
                                        <NavLink href="https://github.com/reactstrap/reactstrap" style={{color:"white"}}>Doctor Login</NavLink>
                                    </NavItem>
                                    <Button active color="light">
                                        Book an appointment
                                    </Button>
                                </Nav>
                                
                            {/* </Collapse> */}
                        </Navbar>
                            <div className="p-5 my-6 rounded" style={{ backgroundImage: `url("https://media.tenor.com/LwKy5Mellj8AAAAC/clinic-dentist.gif")` , backgroundPosition: 'center', backgroundSize: 'cover',backgroundRepeat: 'no-repeat',width: '100vw',height: '90vh'}}>
                                <Toast style={{height:"300px", width:"50%", display:"block"}}>
                                    <ToastHeader align="center" style={{height:"100px", fontFamily:"Arizonia", fontSize:"30px", align:"center"}}>
                                        Exceptional dental care for all ages
                                    </ToastHeader>
                                    <ToastBody style={{fontFamily:"Verdana", fontSize:"20px", align:"center"}}>
                                        Call on (+91) 9833630985
                                        Or
                                        <br></br>
                                        <br></br>
                                        <Button align="center" active color="dark" style={{padding:"8px" ,margin:"5px", marginLeft:"55px"}}>
                                            Book an appointment
                                        </Button>
                                    </ToastBody>
                                </Toast>
                            </div>
                        
                        <Card style={{padding:20}}>            
                        <CardBody>
                        <CardText >
                            <img
                            src="https://media.tenor.com/LwKy5Mellj8AAAAC/clinic-dentist.gif"
                            alt="Card image cap"
                            style={{float: "right", height:"300px"}}/> 
                            <br></br>
                            <TfiCheckBox size={50}/> <h2 style={{fontFamily:"Century Gothic", display:"inline"}}>On time, every time</h2>
                            <h5>Appointments always start on time. We know how packed your schedule is.</h5>
                            <br></br>
                            <TfiCheckBox size={50}/> <h2 style={{fontFamily:"Century Gothic", display:"inline"}}>Quality First</h2>
                            <h5>Rest assured, we encourage the use of only the finest materials available.</h5>
                            <br></br>
                            <TfiCheckBox size={50}/> <h2 style={{fontFamily:"Century Gothic", display:"inline"}}>Transparent Pricing</h2>
                            <h5>We accept a wide variety of payment methods for hassle-free payment</h5>                    
                        </CardText>         
                        </CardBody>
                        </Card>
                        





                        
                        <div style={{position:"relative",overflow:"hidden", display:"inline"}}>
                        
                        <img
                          onMouseEnter={(e)=>this.onHover(e)}
                          onMouseLeave={(e)=>this.onHoverOver(e)}
                          alt=""
                          src={general}
                          className="img-responsive colored-pencil-effect"
                          
                          style={{width:"33%", opacity:"0.5", boxShadow: "inset -10px -10px 10px 20px white"}}
                          
                        ></img>
                        { this.state.hover && <p style={{color:"white", fontSize:"40px", textShadow: "-2px 2px 0 #000, 2px 2px 0 #000, 2px -2px 0 #000, -2px -2px 0 #000", position:"absolute", top:0,bottom:0, left:0, right:0, padding:"20px", margin:"20px", width:"33%"}}><b>GENERAL</b></p>}
                        
                        </div>
                        <div style={{position:"relative",overflow:"hidden", display:"inline"}}>
                        <img
                          onMouseEnter={(e)=>this.onHover1(e)}
                          onMouseLeave={(e)=>this.onHoverOver1(e)}
                          alt=""
                          src={cosmetic}
                          className="img-responsive colored-pencil-effect"
                          
                          style={{width:"33%",opacity:"0.5"}}
                        ></img>
                        { this.state.hover1 && <p style={{color:"white", fontSize:"40px", textShadow: "-2px 2px 0 #000, 2px 2px 0 #000, 2px -2px 0 #000, -2px -2px 0 #000", position:"absolute", top:0,bottom:0, left:0, right:0, padding:"20px", margin:"20px", width:"33%"}}><b>COSMETIC</b></p>}
                        </div>
                        <div style={{position:"relative",overflow:"hidden", display:"inline"}}>
                        <img
                          onMouseEnter={(e)=>this.onHover2(e)}
                          onMouseLeave={(e)=>this.onHoverOver2(e)}
                          alt=""
                          src={surgical}
                          className="img-responsive colored-pencil-effect"
                          
                          style={{width:"33%",opacity:"0.5"}}
                        ></img>
                        { this.state.hover2 && <p style={{color:"white", fontSize:"40px", textShadow: "-2px 2px 0 #000, 2px 2px 0 #000, 2px -2px 0 #000, -2px -2px 0 #000", position:"absolute", top:0,bottom:0, left:0, right:0, padding:"20px", margin:"20px"}}><b>SURGICAL</b></p>}
                        </div>


                        <br></br><br></br><br></br><br></br>

                        <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}  >
                            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                                {slides}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                        </Carousel>


                       

                        
                        
                       
                       <ListGroup horizontal style={{width:"100%"}}>
                          <ListGroup.Item><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.627340847596!2d72.94237301412522!3d19.167783054063854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8f7c2d76931%3A0xa2d85150fddd96c8!2sDr%20Sandhya&#39;s%20Total%20Dental%20Care!5e0!3m2!1sen!2sin!4v1670239514055!5m2!1sen!2sin" style={{width:"1000px", height:"250px" ,border:"0" ,allowfullscreen:"" ,loading:"lazy", referrerpolicy:"no-referrer-when-downgrade", padding:"20px"}}></iframe></ListGroup.Item>
                          <ListGroup.Item style={{fontFamily:"Georgia"}}>Visit Us <br></br><br></br>Shop #9, Saidham Complex, <br></br>P.K road, Mulund West <br></br>Mumbai - 400080<br></br><br></br>Mon - Sat: <br></br>10am to 2pm,<br></br>6pm to 9pm</ListGroup.Item>
                  
                        </ListGroup>


                        
                        <Navbar color="secondary" style={{color:"secondary"}}>
                        {/* <NavbarBrand href="/" style={{color:"white", fontFamily:"Arizonia", fontSize:"30px"}} >Social</NavbarBrand> */}
                        <NavbarToggler onClick={this.toggle} />
                            {/* <Collapse isOpen={this.state.isOpen} > */}
                                <Nav >
                                  <NavItem></NavItem>
                                    
                                    <ListGroup style={{backgroundColor:"grey"}}>
                                    <ListGroup.Item style={{fontFamily:"Georgia", color:"white", backgroundColor:"grey"}}> 
                                    <NavItem style={{padding:"20px", paddingRight:"80px", rightMargin:"70px",fontFamily:"Arizonia", fontSize:"30px", backgroundColor:"grey"}}>Social</NavItem><br></br><br></br><BsInstagram size="45px" style={{padding:"5px"}}/> <AiOutlineLinkedin size="50px" style={{padding:"3px"}}/></ListGroup.Item>
                                    </ListGroup>
                                    <NavItem></NavItem>
                                    <ListGroup>
                                    <ListGroup.Item style={{fontFamily:"Georgia", color:"white",backgroundColor:"grey"}}> <NavItem style={{padding:"20px", paddingRight:"80px", rightMargin:"70px",fontFamily:"Arizonia", fontSize:"30px",backgroundColor:"grey"}}>Services</NavItem><br></br><br></br>
                                    <NavLink href="/components" style={{color:"white"}}>General</NavLink>
                                    <NavLink href="/components" style={{color:"white"}}>Cosmetic</NavLink>
                                    <NavLink href="/components" style={{color:"white"}}>Surgical</NavLink><br></br><br></br></ListGroup.Item>
                                    </ListGroup>
                                    <ListGroup>
                                    <ListGroup.Item style={{fontFamily:"Georgia", color:"white",backgroundColor:"grey"}}> <NavItem style={{padding:"20px", paddingRight:"80px", rightMargin:"70px",fontFamily:"Arizonia", fontSize:"30px",backgroundColor:"grey"}}>Our Office</NavItem><br></br><br></br>
                                    <NavLink href="/components" style={{color:"white"}}>Home</NavLink>
                                    <NavLink href="/components" style={{color:"white"}}>About</NavLink>
                                    <NavLink href="/components" style={{color:"white"}}>Doctor Login</NavLink><br></br><br></br></ListGroup.Item>
                                    </ListGroup>
                                    <NavItem></NavItem>
                                    <ListGroup>
                                    <ListGroup.Item style={{fontFamily:"Georgia", color:"white",backgroundColor:"grey"}}> <NavItem style={{padding:"20px", paddingRight:"80px", rightMargin:"70px",fontFamily:"Arizonia", fontSize:"30px",backgroundColor:"grey"}}>Contact Us</NavItem>Call (+91) 9833630985<br></br><br></br>Shop #9, Saidham Complex, <br></br>P.K road, Mulund West <br></br>Mumbai - 400080<br></br><br></br>Mon - Sat: <br></br>10am to 2pm,<br></br>6pm to 9pm</ListGroup.Item>
                                    </ListGroup>


                                    
                                    
                                </Nav>
                                
                          
                        </Navbar>
                        <div className="text" style={{paddingLeft:"700px", backgroundColor:"grey", color:"white", fontFamily:"Arizonia", fontSize:"15px"}}>@Dr Sandhya's Total Dental Care  |  Copyright: 2022  | Designed by: Prakriti Shetty</div>




        </div>
        );
    }

}

export default App;