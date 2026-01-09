import Image from "next/image";
import { useEffect, useState } from "react";


export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 900px)");

    const handleResize = () => setIsMobile(mediaQuery.matches);

    handleResize(); // set initial value
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <main style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.6 }}>
      {/* content */}
    </main>
  );
}
>

{/* TOP BRAND IMAGE */}
<section style={{ width: "100%" }}>
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
      order: isMobile ? 0 : 0, // stays first (top on mobile, left on desktop)
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
  <div style={{ order: isMobile ? 1 : 1 }}>
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




     {/* TESTIMONIALS */}
<section style={{ background: "#f4f4f4", padding: "80px 20px" }}>
  <h2 style={{ textAlign: "center" }}>Client Testimonials</h2>

  <div style={{ maxWidth: "900px", margin: "40px auto" }}>
    <p><strong>Bill Mann USNA 1990</strong>: “When my wife and I began the house hunting process, we were looking for a property with Airbnb potential and wanted a realtor with experience in that area. Archie's extensive knowledge of the Pensacola Airbnb market made him the obvious choice. He was extremely professional throughout the buying process and we'd absolutely recommend him to anyone looking to buy or invest in the area!”</p>

    <p><strong>Bob Moore USNA 2023</strong>: “For four years, mids learn about integrity and looking out for others. Those lessons resonate on an especially deep level when a quarter to half a million dollars are at stake. Paul and Archie practice those steadfast values and will keep your wellbeing first. I wouldn’t have trusted anyone more than the Warrens to teach me about real estate and guide me through the process of buying my first home.”</p>

    <p><strong>Jessica LaPlante USNA 2023</strong>: “Archie and his father Paul made purchasing a house effortless. They dedicated time to scope out multiple homes, providing ample videos for me to view. The transition to the home was stress free thanks to their diligent effort to ensure all documents and paperwork were completed and signed. Archie was always available and responded almost instantly! I had a great experience working with both Archie and his father!”</p>

    <p><strong>Jared Bouloy USNA 2023</strong>: “I had an automatic degree of trust with both Paul and Archie not only because of their connection to the military, but to the Naval Academy, specifically. Being the father of four old goats and Naval Aviators himself, Paul looked after me like I was one of his own sons. I didn’t have to worry about him chasing a commission because I knew he wouldn’t allow me to get into a deal that he wouldn’t approve of for one of his own boys. Furthermore, when we found a deal, Archie mentored me by offering experience and helping me navigate the right loan, downpayment, and market to target for my situation as an SNA.”</p>

    <p><strong>Javier Mejia</strong>: “Archie went above and beyond all expectations I had. His communication is very fast and he makes sure all questions are answered thoroughly.”</p>
  </div>
</section>


      {/* CONTACT */}
      <section
        id="contact"
        style={{ padding: "80px 20px", maxWidth: "700px", margin: "auto" }}
      >
        <h2>Start Your Home Search</h2>

<form
  action="https://formspree.io/f/xvzgeebk"
  method="POST"
>
  <input
    name="name"
    placeholder="Full Name"
    required
    style={inputStyle}
  />

  <input
    type="email"
    name="email"
    placeholder="Email"
    required
    style={inputStyle}
  />

  <input
    name="phone"
    placeholder="Phone Number"
    style={inputStyle}
  />

  <textarea
    name="message"
    placeholder="Tell us what you're looking for"
    style={inputStyle}
  />

  <button type="submit" style={buttonStyle}>
    Submit
  </button>
</form>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "30px",
          textAlign: "center",
          fontSize: "14px",
          background: "#111",
          color: "white",
        }}
      >
        © {new Date().getFullYear()} Pensacola Property Network · Southern Realty Gulf Coast LLC
      </footer>

    </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  padding: "14px",
  width: "100%",
  background: "black",
  color: "white",
  border: "none",
  borderRadius: "6px",
  fontSize: "16px",
};
