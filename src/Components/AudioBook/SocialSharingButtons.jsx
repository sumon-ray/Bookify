import React from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

const SocialSharingButtons = ({currentAudioBook}) => {
  return (
    <div className="flex gap-1 items-center">
      <FacebookShareButton
        url={`https://bookify06.vercel.app/audiobooks/audiobooks/${currentAudioBook?._id}`}
        className=""
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton
        url={`https://bookify06.vercel.app/audiobooks/audiobooks/${currentAudioBook?._id}`}
        className=""
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <WhatsappShareButton
        url={`https://bookify06.vercel.app/audiobooks/audiobooks/${currentAudioBook?._id}`}
        className=""
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>

      <TelegramShareButton
        url={`https://bookify06.vercel.app/audiobooks/audiobooks/${currentAudioBook?._id}`}
        className=""
      >
        <TelegramIcon size={32} round />
      </TelegramShareButton>
    </div>
  );
};

export default SocialSharingButtons;
