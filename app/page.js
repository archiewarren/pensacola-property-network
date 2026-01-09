import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 900px)");
    const handleResize = () => setIsMobile(mediaQuery.matches);

    handleResize(); // initial value
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <main style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.6 }}>
      {/* TOP BRAND IMAGE */}
      <section style={{ width: "100%", background: "#000" }}>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "420px",
            overflow: "hidden",
          }}
        >
          <Image
            src="/top.png"
            alt="Southern Realty Gulf Coast LLC - Archie and Paul Warren"
            fill
            priority
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </div>
      </section>

      {/* ABOUT */}
      <section
        style={{
          padding: "80px 20px",
          maxWidth: "1100px",
          margin: "auto",
          display: "grid",
          gap: "40px",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          alignItems: "center",
        }}
      >
        {/* TEAM PHOTO */}
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "520px",
            aspectRatio: "4 / 3",
            borderRadius: "12px",
            overflow: "hidden",
            justifySelf: "center",
          }}
        >
          <Image
            src="/team.jpg"
            alt="Archie and Paul Warren"
            fill
            sizes="(max-width: 900px) 100vw, 520px"
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
        </div>

        {/* BIOS */}
        <div>
          <h2>Meet Archie & Paul Warren</h2>

          <p>
            Paul Warren is a former Blue and Gold Officer and the father of 6 children including 4 USNA Grads – Arny (’12, P-8 pilot), Archie (’13, P-8 NFO), Carpenter (’16, EP-3 Pilot), and Shepherd (’18, P-8 Pilot).
            Archie Warren is a 2013 USNA graduate and he holds a Master’s degree in Data Science from Northwestern University. At Navy, he studied applied mathematics and played varsity water polo before commissioning as a Naval Flight Officer.
          </p>

          <p>
            Paul and Archie have both been active in the Pensacola real estate market for several years.
            They each own Airbnb investment properties and co-host additional Airbnbs. Combined they have over 1000 reviews with an average rating of 4.96.
            They are both licensed realtors with Levin Rinke Realty and have a passion for helping buyers, specifically Navy buyers, find their dream home or investment property.
            Collectively, the Warren boys have bought properties in Pensacola, Jacksonville, Corpus Christi, Whidbey Island, and Virginia Beach and can connect you with a Realtor anywhere in the country.
          </p>
        </div>
      </section>
    </main>
  );
}
