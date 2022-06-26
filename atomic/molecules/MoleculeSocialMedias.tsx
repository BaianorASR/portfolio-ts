import { At, GithubLogo, LinkedinLogo } from 'phosphor-react';
import React from 'react';

export const MoleculeSocialMedias = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 my-10">
      <h1>Social medias</h1>
      <hr className="w-32" />
      <div className="flex items-center justify-center gap-3">
        <a
          href="https://www.linkedin.com/in/baianorasr/"
          target={'_blank'}
          rel="noreferrer"
        >
          <LinkedinLogo size={32} href="" />
        </a>
        <a href="https://github.com/BaianorASR" target={'_blank'} rel="noreferrer">
          <GithubLogo size={32} />
        </a>
        <a
          href="mailto:reis.adson2@outlook.com?subject=Me&body=Hello!"
          target={'_blank'}
          rel="noreferrer"
        >
          <At size={32} />
        </a>
      </div>
    </div>
  );
};
