"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import TagManager from 'react-gtm-module';
import Link from 'next/link';
import { Routes } from './information/models';
import { Navigator } from './components';
import Bachata from "../../public/image/bachata.jpg"; 
import { bachataBlur } from './models/bachata.blur';
import Script from 'next/script';

 



export default function Home() {
  const TagManagerArgs = {
    gtmId: "GTM-P9PW26T"
  }
  useEffect(() => {
    TagManager.initialize(TagManagerArgs);
    TagManager.dataLayer({
      dataLayer: {
        event: "pageview",
        // path:"/home/" primera opcion
        page: {
          path: "/home/",
          title: "gtm de prueba"
        }
      }
    })
  }, [])
  
  return (
    <>
    {/**sirve para analytics :  */}
    <Script strategy='worker'/>
     <div>
      <h1>welcome to Rick and Morty app</h1>
      <h2>what do you want to see?</h2>
      <Navigator pathNames={[Routes.CHARACTERS, Routes.LOCATIONS, Routes.HOME]}/>
      <div>
        <Image alt='image' src={Bachata} blurDataURL={bachataBlur} placeholder='blur' priority/>
      </div>
    </div>
    </>
   
  )
}
