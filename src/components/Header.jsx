import React, { useEffect, useRef,useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
const socials = [
  {
    icon: faEnvelope,
    url: "mailto:danielani660@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/da-nazy",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/ani-daniel-b8572b109/",
  },
  {
    icon: faMedium,
    url: "https://medium.com/@danielani660",
  },
  {
    icon: faStackOverflow,
    url: " https://stackoverflow.com/users/7329841/danazy ",
  },
];
const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const hiddenElementRef = useRef(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const elementPosition = hiddenElementRef.current.offsetTop;
    
    if (typeof window !== 'undefined') { 
      if (scrollPosition > lastScrollY) { // if scroll down hide the navbar
      setIsVisible(false); 
      } else { // if scroll up show the navbar
       setIsVisible(true); 
      }

      // remember current page location to use in the next move
      
      setLastScrollY(scrollPosition); 
    }
  };

 useEffect(()=>{
  window.addEventListener('scroll',handleScroll)
  return ()=>{
    window.removeEventListener('scroll', handleScroll)
  }
 },[])

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box 
     
    ref={hiddenElementRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      style={{transform:isVisible?'translateY(0)':'translateY(-200px)'}}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack
            alignItems="center"
              justifyContent="space-between">
              {socials.map((value,key)=>{
                return(
                  <a href={value.url} key={key}>
                       <FontAwesomeIcon
                    
                    icon={value.icon}
                    size="2x"
              />
               </a>
                )
              })}
            
              
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="#projects-section" onClick={handleClick("projects")}>Projects</a>
              <a  href="#contactme-section" onClick={handleClick("contactme")}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
