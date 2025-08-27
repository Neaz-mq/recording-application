"use client";
import Image from "next/image";
import Link from "next/link";
import { useState} from "react";
import { useSearchParams, } from "next/navigation";


import DropdownList from "./DropdownList";


const SharedHeader = ({ subHeader, title,  }: SharedHeaderProps) => {

  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("query") || ""
  );
  

  

  

  return (
    <header className="header">
      <section className="header-container">
        <figure className="details">
        
          <article>
            <p>{subHeader}</p>
            <h1>{title}</h1>
          </article>
        </figure>
        <aside>
          <Link href="/upload">
            <Image
              src="/assets/icons/upload.svg"
              alt="upload"
              width={16}
              height={16}
            />
            <span>Upload a video</span>
          </Link>
         
        </aside>
      </section>
      <section className="search-filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search for videos, tags, folders..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Image
            src="/assets/icons/search.svg"
            alt="search"
            width={16}
            height={16}
          />
        </div>
        <DropdownList
         
        />
      </section>
    </header>
  );
};

export default SharedHeader;