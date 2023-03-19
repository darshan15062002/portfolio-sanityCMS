import React from 'react';
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
    <div className="app__social">
        <div>
            <a href="https://github.com/darshan15062002"><BsGithub /></a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/darshan-chatrawat-13801922b"> <BsLinkedin /></a>
        </div>
        <div>
            <BsWhatsapp />
        </div>
    </div>
);

export default SocialMedia;