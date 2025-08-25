"use client";

import Link from 'next/link'
import React from 'react'
import Image from "next/image";

const VideoCard = ({id, title, thumbnail, createdAt}: VideoCardProps) => {
  return (
    <Link href={`/video/${id}`} className="video-card">
 <Image
        src={thumbnail}
        width={290}
        height={160}
        alt="thumbnail"
        className="thumbnail"
      />
       <article>
        <div>
          <figure>
            <Image
              src=''
              width={34}
              height={34}
              alt="avatar"
              className="rounded-full aspect-square"
            />
            <figcaption>
              <h3>gfg</h3>
              <p>fd</p>
            </figcaption>
          </figure>
          <aside>
            <Image
              src="/assets/icons/eye.svg"
              alt="views"
              width={16}
              height={16}
            />
            <span>20</span>
          </aside>
        </div>
        <h2>
          {title} -{" "}
         
        </h2>
      </article>
        <button  className="copy-btn">
       
      </button>
        </Link>
  )
}

export default VideoCard