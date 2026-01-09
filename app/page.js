import Image from "next/image";

export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.6 }}>

      {/* HERO */}
      <section
        style={{
          padding: "100px 20px",
          background:
            "linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url('/pensacola.jpg') center / cover no-repeat",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "48px" }}>Pensacola Property Network</h1>
        <p style={{ fontSize: "20px", marginTop: "10px" }}>
          Archie & Paul Warren · Southern Realty Gulf Coast LLC
        </p>

        <a
          href="#contact"
          style={{
            display: "inline-block",
            marginTop: "30px",
            padding: "15px 30px",
            background: "white",
            color: "black",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Find Your Pensacola Home
        </a>
      </section>

{/* ABOUT */}
<section
  style={{
    padding: "80px 20px",
    maxWidth: "1100px",
    margin: "auto",
    display: "grid",
    gap: "40px",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
  }}
>
  {/* LARGE PPN LOGO */}
  <Image
    src="/ppn-logo.png"
    alt="Pensacola Property Network"
    width={600}
    height={400}
    style={{ borderRadius: "12px" }}
  />

  <div>
    {/* SMALLER TEAM PHOTO */}
    <Image
      src="/team.jpg"
      alt="Archie and Paul Warren"
      width={400}
      height={300}
      style={{ borderRadius: "12px", marginBottom: "20px" }}
    />

    <h2>Meet Archie & Paul Warren</h2>

    <p>
      Paul Warren is a former Blue and Gold Officer and the father of 6 children
      including 4 USNA Grads – Arny (’12, P-8 pilot), Archie (’13, P-8 NFO),
      Carpenter (’16, EP-3 Pilot), and Shepherd (’18, P-8 Pilot).
    </p>

    <p>
      Paul and Archie have both been active in the Pensacola real estate market
      for several years. They each own Airbnb investment properties and co-host
      additional Airbnbs. Combined they have over 1000 reviews with an average
      rating of 4.96. They are licensed realtors passionate about helping Navy
      buyers find homes and investments.
    </p>

    <Image
      src="/southern-realty-logo.png"
      alt="Southern Realty Gulf Coast LLC"
      width={180}
      height={90}
      style={{ marginTop: "20px" }}
    />
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
          action="mailto:Archiewarren13@gmail.com"
          method="post"
          encType="text/plain"
        >
          <input placeholder="Full Name" required style={inputStyle} />
          <input placeholder="Email" required style={inputStyle} />
          <input placeholder="Phone Number" required style={inputStyle} />
          <textarea
            placeholder="Tell us what you're looking for"
            style={inputStyle}
          />
          <button style={buttonStyle}>Submit</button>
        </form>

        <p style={{ marginTop: "30px" }}>
          📞 <a href="tel:4102991538">410-299-1538</a><br />
          📧 Archiewarren13@gmail.com
        </p>
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
