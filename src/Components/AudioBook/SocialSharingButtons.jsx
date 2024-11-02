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
    <div className="flex gap-3 items-center">
      <FacebookShareButton
        url={`https://bookify06.vercel.app/audiobooks/${currentAudioBook?._id}`}
        className=""
      >
        <FacebookIcon className="text-black p-[4px] dark:bg-slate-700 bg-zinc-300 rounded-full font-black " size={38} round />
      </FacebookShareButton>

      <TwitterShareButton
        url={`https://bookify06.vercel.app/audiobooks/${currentAudioBook?._id}`}
        className=""
      >
        {/* <TwitterIcon size={32} round /> */}
        <TwitterIcon className="text-black p-[4px] dark:bg-slate-700 bg-zinc-300 rounded-full font-black " size={38} round />

      </TwitterShareButton>

      <WhatsappShareButton
        url={`https://bookify06.vercel.app/audiobooks/${currentAudioBook?._id}`}
        className=""
      >
        {/* <WhatsappIcon size={32} round /> */}
        <WhatsappIcon className="text-black p-[4px] dark:bg-slate-700 bg-zinc-300 rounded-full font-black " size={38} round />

      </WhatsappShareButton>

      <TelegramShareButton
        url={`https://bookify06.vercel.app/audiobooks/${currentAudioBook?._id}`}
        className=""
      >
        {/* <TelegramIcon size={32} round /> */}
        <TelegramIcon className="text-black p-[4px] dark:bg-slate-700 bg-zinc-300 rounded-full font-black " size={38} round />

      </TelegramShareButton>
    </div>
  );
};

export default SocialSharingButtons;
