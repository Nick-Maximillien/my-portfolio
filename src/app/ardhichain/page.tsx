'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ArdhiChainPage() {
  return (
    <>
      <main className="projectPage">
        <div className="header">
          <h1>SmartLands (ArdhiChain)</h1>
          <p>Blockchain Land Registry – Mint and Manage Property NFTs on Ethereum</p>
        </div>

        <section>
          <h2>Overview</h2>
          <p>
            ArdhiChain is a decentralized land registry system deployed on Ethereum. Admins can mint NFTs with title metadata such as location, title ID, and parcel size. NFTs can be securely transferred via smart contracts.
          </p>
        </section>

        <section>
          <h2>Tech Stack</h2>
          <ul>
            <li><strong>Smart Contract:</strong> Solidity using OpenZeppelin (ERC721)</li>
            <li><strong>Frontend:</strong> Next.js & Ethers.js</li>
            <li><strong>Wallet Integration:</strong> MetaMask</li>
            <li><strong>Deployment:</strong> Infura + Sepolia</li>
            <li><strong>Storage:</strong> IPFS</li>
          </ul>
        </section>

        <section>
          <h2>Core Features</h2>
          <ul>
            <li>Admin-only minting of unique land NFTs</li>
            <li>Title metadata includes titleID, location, and parcel size</li>
            <li>Transfer restricted to admin</li>
            <li>Public read access via <code>getLandDetails()</code></li>
            <li>Metadata stored on IPFS</li>
          </ul>
        </section>

        <section>
          <h2>UI Preview</h2>
          <div className="screenshots">
            <Image src="/images/ardhichain1.png" alt="UI 1" width={600} height={400} className="screenshot-img"/>
            <Image src="/images/ardhichain2.png" alt="UI 2" width={600} height={400} className="screenshot-img"/>
          </div>
        </section>

        <section>
          <h2>Video Walkthrough</h2>
          <div className="video-wrapper">
            <iframe src="https://www.youtube.com/embed/zbSPnmzQzT8" title="Video" allowFullScreen></iframe>
          </div>
        </section>

        <section className="links">
          <h2>Live Links</h2>
          <Link href="https://ardhi-chain.netlify.app" target="_blank">🌐 Live DApp</Link>
          <Link href="https://sepolia.etherscan.io/address/0x859fa91b61d4723dd6f9d27e990b99dc479fdc7d" target="_blank">🔍 Etherscan</Link>
          <Link href="https://github.com/Nick-Maximillien/ardhiChain" target="_blank">📦 GitHub</Link>
        </section>

        <section>
          <h2>My Role</h2>
          <p>I designed the smart contract, developed the frontend UI, integrated MetaMask, deployed on Netlify/Sepolia, and tested admin functions.</p>
        </section>

        <style jsx>{`
          :root {
            --background: #000;
            --foreground: #fff;
            --accent: #0074d9;
            --card-bg: rgba(255,255,255,0.05);
            --card-shadow: rgba(255,255,255,0.1);
          }
          body { margin:0; font-family:'Segoe UI', Roboto, sans-serif; background:var(--background); color:var(--foreground);}
          a {color:inherit; text-decoration:none;}
          .projectPage {max-width:960px; margin:auto; padding:2rem 1rem;}
          .header {text-align:center; margin-bottom:2rem;}
          section {background:var(--card-bg); padding:1.5rem; margin-bottom:2rem; border-radius:12px; box-shadow:0 6px 14px var(--card-shadow); backdrop-filter:blur(6px);}
          section:hover {transform:translateY(-3px); box-shadow:0 8px 20px var(--card-shadow);}
          h2 {color:var(--accent); border-left:4px solid var(--accent); padding-left:10px; margin-top:0; margin-bottom:1rem;}
          p, li {line-height:1.6; color:var(--foreground);}
          ul {padding-left:1.5rem;}
          .screenshot-img {border-radius:8px; width:100%; max-width:600px; margin:1rem auto; display:block; box-shadow:0 4px 12px rgba(255,255,255,0.1);}
          .screenshots {display:flex; flex-wrap:wrap; gap:1rem; justify-content:center;}
          .video-wrapper iframe {width:100%; height:360px; border:none; border-radius:8px; box-shadow:0 4px 12px rgba(255,255,255,0.1);}
          .links a {display:inline-block; margin:0.3rem 1rem 1rem 0; background:#003366; color:white; padding:10px 18px; border-radius:6px; font-size:0.95rem; transition:background 0.2s;}
          .links a:hover {background:#0052cc;}

          @media (max-width:768px) {
            .video-wrapper iframe {height:240px;}
            .screenshot-img {max-width:100%;}
          }
          @media (orientation: landscape) and (min-width:768px) {
            .header {display:flex; align-items:center; justify-content:space-between; text-align:left; gap:2rem;}
            .header p {max-width:50%;}
            .screenshot-img {max-width:45%;}
            .video-wrapper iframe {height:400px;}
            section {padding:2rem;}
          }
        `}</style>
      </main>
    </>
  )
}
