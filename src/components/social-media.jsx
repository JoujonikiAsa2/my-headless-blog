import React from 'react'
import youtubeLogo from '../assets/icons/youtube.png'
import twitterLogo from '../assets/icons/twitter.png'
import socialLogo from '../assets/icons/social.png'
import facebookLogo from '../assets/icons/facebook.png'
import Image from 'next/image'
export default function SocialMedia() {
    return (
        <div className='contact-info gap-2'>
            <Image src={youtubeLogo} alt="" className='size-6' />
            <Image src={twitterLogo} alt="" className='size-6' />
            <Image src={socialLogo} alt="" className='size-6' />
            <Image src={facebookLogo} alt="" className='size-6' />
        </div>
    )
}
