import { Heading, HStack,Button, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <VStack style={styles.cont} borderRadius={10} justifyContent={"space-between"}>
   <Image src={imageSrc} borderRadius={10} style={styles.img} />
      <VStack style={styles.subCont}  >
        <Text fontSize={'sm'} style={styles.title}>{title}</Text>
       <Text fontSize={'xs'}  style={styles.desc}>{description}</Text>
        <HStack style={styles.sm}>
          <Text fontSize={'xs'} style={styles.vm}>See More</Text>
          <FontAwesomeIcon icon={faArrowRight} color="#000" size="1x"/>
       </HStack>
      </VStack>
    </VStack>
  );
};

const styles = {
  img:{
    height:'180px',
    width:'100%'
  },
  cont: {
    backgroundColor: '#fff',
    height: '300px',
  },
  vm: {
    color:'#000',
    fontWeight:'500'
  },
  sm: {
    "&:hover": {
      cursor:'pointer'
    }
  },
  subCont: {
    height:'150px',
    alignItems:'start',
    width: '100%',
    padding:'10px'
  },
  title:{
    textAlign:'start',
    color:'#000',
    fontWeight:'600',
  
  },
  desc:{
    color:'gray',
    fontWeight:'500'
  }
}
export default Card;
