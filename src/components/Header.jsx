import React from 'react'
import {Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,Button, useDisclosure, VStack, HStack} from "@chakra-ui/react"
import{Link}from "react-router-dom"
import{BiMenuAltLeft}from "react-icons/bi"

const Header = () => {

const{isOpen,onOpen,onClose} = useDisclosure();

  return( <>
  
  <Button 
  zIndex={"overlay"}
  position={"fixed"}
  top={"4"}
  left={"4"}
  colorScheme={"orange"}
  p={"0"}
  w={"10"}
  h={"10"}
  borderRadius={"full"}
  onClick={onOpen}
  >
    <BiMenuAltLeft size={"20"}/>
  </Button>

  <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
    
    <DrawerOverlay/>
    
    <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>PRAJWAL BHAI KI WEBSITE</DrawerHeader>
        <DrawerBody>
            <VStack alignItems={"flex-start"}>
                <Button onClick={onClose} variant={"ghost"} colorScheme={"orange"}>
                    <Link to={"/"}>Home</Link>
                </Button>

                <Button onClick={onClose} variant={"ghost"} colorScheme={"orange"}>
                    <Link to={"/Videos"}>Videos</Link>
                </Button>

                <Button onClick={onClose} variant={"ghost"} colorScheme={"orange"}>
                    <Link to={"/Videos?category=free"}>Free Videos</Link>
                </Button>

                <Button onClick={onClose} variant={"ghost"} colorScheme={"orange"}>
                    <Link to={"/Upload"}>Upload Video</Link>
                </Button>
            </VStack>
            <HStack
              pos={'absolute'}
              bottom={'10'}
              left={'0'}
              w={'full'}
              justifyContent={'space-evenly'}
            >
              <Button onClick={onClose} colorScheme={'orange'}>
                <Link to={'/login'}>Log In</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme={'orange'}
                variant={'outline'}
              >
                <Link to={'/signup'}>Sign Up</Link>
              </Button>
            </HStack>
 
            
        </DrawerBody>
    </DrawerContent>
  </Drawer>

  </>
  );
};


export default Header;
