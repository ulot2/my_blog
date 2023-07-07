"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "../Header";
import Footer from "../Footer";

export default function Page() {
  const router = useRouter();
  return (
    <>
      <Header />
      <main className="post-container">
        <div className="main-post">
          <button
            type="button"
            className="backBtn"
            onClick={() => router.back()}
          >
            &lt;Back
          </button>
          <div>
            <div className="title">
              <h1>Lorem ipsum dolor sit</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatum, eius.
              </p>
            </div>
            <div className="author">
              <Image
                className="author-img"
                src="/images/mee.jpg"
                width={50}
                height={50}
                alt="okay"
              />
              <h4>Toluwalope E.</h4>
              <p>03 July, 2023</p>
            </div>
          </div>
          <div className="post-text">
            <Image
              src="/images/sunset.jpg"
              alt="post-image"
              width={400}
              height={100}
              className="post-image"
            />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
              repellat corrupti, nihil, minima eveniet ipsam amet ratione eos
              accusamus tempora doloribus, in magni! Ex dolor quae, esse impedit
              dolorum vitae reiciendis quisquam quas blanditiis eius dolore
              facilis adipisci sunt maxime!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias illo, laudantium provident placeat consequuntur
              perferendis omnis sit odit iusto et minus quam in vero, maxime
              fugiat tempore, ab magnam voluptas?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
              debitis reprehenderit voluptatem provident maxime laborum veniam
              esse dolore hic neque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
              ducimus minus fuga vero iusto, velit commodi! Magnam reprehenderit
              dolor veritatis qui eligendi ipsum ullam nihil repudiandae veniam.
              Dolorum, cupiditate nesciunt!
            </p>
            <Image
              src="/images/code.png"
              alt="code"
              width={400}
              height={100}
              className="post-image"
            />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias illo, laudantium provident placeat consequuntur
              perferendis omnis sit odit iusto et minus quam in vero, maxime
              fugiat tempore, ab magnam voluptas?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
              debitis reprehenderit voluptatem provident maxime laborum veniam
              esse dolore hic neque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
              ducimus minus fuga vero iusto, velit commodi! Magnam reprehenderit
              dolor veritatis qui eligendi ipsum ullam nihil repudiandae veniam.
              Dolorum, cupiditate nesciunt!
            </p>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
