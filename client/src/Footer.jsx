import React from 'react'

import styled from "styled-components";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {


  return (
    <div>



      <div className='Container'>
        <div className='Left'>
          <div className='Logo'>SouledStore</div>
          <div className='Desc'>
            For starters, it makes for a great pun on the word ‘sold’, since we ‘sell' stuff. Smart, right? But more importantly, The Souled Store was born out of the idea of loving what you do - “following your soul”. Our philosophy is that life is short. Don’t spend it doing something you don’t like. There are too many Monday mornings, and you can’t go dreading every single one of them.

            We, at The Souled Store, love what we do- designs, products, marketing, and everything in between. Our goal is to give everyone something they'll love, something they can use to express themselves, and, simply put, something to put a smile on their face. So, whether it's superheroes, TV shows, pop culture, music, sports, or quirky, funny stuff you're looking for, we have something for everyone. Because each person is a special snowflake (whether or not they believe it), and they deserve only the most insane merchandise available out there! So, if you relate to the feeling, and believe in following one's heart (soul), hop along on this wonderful journey of ours, and help us spread the love!
          </div>
          <div className='SocialContainer'>
            <div className='SocialIcon' color="3B5999">
              <FaFacebook />
            </div>
            <div className='SocialIcon' color="E4405F">
              <FaInstagram />
            </div>
            <div className='SocialIcon' color="55ACEE">
              <FaGoogle />
            </div>
            <div className='SocialIcon' color="E60023">
              <FaTwitter />
            </div>
          </div>
        </div>
        <div className='Center'>
          <div className='Title'>Useful Links</div>
          <div className='List' style={{ fontWeight: 'bold' }}>
            <div className='ListItem'>Home</div>
            <div className='ListItem'>Cart</div>
            <div className='ListItem'>Men Fashion</div>
            <div className='ListItem'>Women Fashion</div>
            <div className='ListItem'>My Account</div>
            <div className='ListItem'>Terms</div>
            <div className='ListItem'>Sponsership</div>
          </div>
        </div>
        <div className='Right'>
          <div className='Title'>Contact</div>
          <div className='Payment' src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </div>
      </div>


    </div>
  )
}

export default Footer
