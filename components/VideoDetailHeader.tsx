"use client";


import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";




const VideoDetailHeader = ({
  title,
 
  username,
  videoId,
  ownerId,

 
}: VideoDetailHeaderProps) => {
  
  const [copied, setCopied] = useState(false);
  
 
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const userId = session?.user.id;
  const isOwner = userId === ownerId;

 

 

  const copyLink = () => {
    navigator.clipboard.writeText(`${window.location.origin}/video/${videoId}`);
    setCopied(true);
  };



  return (
    <header className="detail-header">
      <aside className="user-info">
        <h1>{title}</h1>
        <figure>
          <button onClick={() => router.push(`/profile/${ownerId}`)}>
          
            <h2>{username ?? "Guest"}</h2>
          </button>
          <figcaption>
            <span className="mt-1">・</span>
          
          </figcaption>
        </figure>
      </aside>
      <aside className="cta">
        <button onClick={copyLink}>
          <Image
            src={
              copied ? "/assets/images/checked.png" : "/assets/icons/link.svg"
            }
            alt="Copy Link"
            width={24}
            height={24}
          />
        </button>
        {isOwner && (
          <div className="user-btn">
            <button
              className="delete-btn"
             
            >
             
            </button>
            <div className="bar" />
          
          </div>
        )}
      </aside>
    </header>
  );
};

export default VideoDetailHeader;