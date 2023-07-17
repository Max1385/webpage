import { css } from "@emotion/react";
import { Title } from "react-head";
import { Link } from "react-router-dom";
import Typed from 'typed.js';
import { useEffect, useRef } from "react";

const BlobLumaSnow = new URL("./media/abloblumasnow.gif", import.meta.url);
const GitHub = new URL("./media/github.svg", import.meta.url);
const Mail = new URL("./media/mail.svg", import.meta.url);
// const YouTube = new URL("./media/youtube.svg", import.meta.url); / wird nicht mehr benötigt
const Twitter = new URL("./media/twitter.svg", import.meta.url);
const Drive = new URL("./media/drive.svg", import.meta.url);
const Discord = new URL("./media/discord.svg", import.meta.url);

const holder = css({
  padding: "2.5em",
})

const link = css({
  padding: "0.75em",
  "&:focus, &:hover": {
    filter: "invert(0.5) sepia(1) hue-rotate(558deg) saturate(10)",
    // Hier sind verschiedene Filterwerte angewendet, um den gewünschten dunkelblauen Farbton zu erzielen.
  },
  "@media (prefers-color-scheme: dark)": {
    filter: "invert(1)",
  },
});

const autoType = css({
  color: "#542CF2", // färben des textes
});

export function Home() {
  useEffect(() => {
    var typed = new Typed('#auto-type', {
      strings: ["Server-Owner", "Bot-Developer", "Designer", "Moderator"],
      typeSpeed: 80,
      backSpeed: 80,
      loop: true
    });
  }, []);

  return (
    <>
      <Title>Home - Max1385</Title>
      <img
        src={BlobLumaSnow.href}
        width="128"
        height="128"
        alt="Max1385 page"
      />
      <div css={holder}>
        <a href="https://github.com/Max1385" title="GitHub" css={link}>
          <img src={GitHub.href} alt="" />
        </a>
        <a href="https://twitter.com/realsucces1385" title="Twitter" css={link}>
          <img src={Twitter.href} alt="" />
        </a>
        <a href="https://drive.google.com/drive/folders/1cqIJ08Fvtm4sjjIWxU6U0nz6ONPd9th_" title="My own Google Drive folder where I present a few of my self-made designs." css={link}>
          <img src={Drive.href} alt="" />
        </a>
        <a href="mailto:max1385@outlook.de" title="Email" css={link}>
          <img src={Mail.href} alt="" />
        </a>
        <div>
          <a href='https://discord.com/users/770636457043034112' title="Discord">
            <img src="https://discord.c99.nl/widget/theme-1/770636457043034112.png" style={{ padding: '5px' }} />
          </a>
        </div>
      </div>
      <div>
        <h2>I'm a <span id="auto-type" css={autoType}></span></h2>
      </div>
    </>
  );
}

export function NotFound() {
  return (
    <>
      <Title>Not Found - Max1385</Title>
      <div>
        Looks like you took a wrong turn! <Link to="/">Go Home.</Link>
      </div>
    </>
  );
}
