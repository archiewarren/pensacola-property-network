export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.6 }}>
      
      {/* HERO */}
      <section style={{
        padding: "100px 20px",
        background: "linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url('/pensacola.jpg') center/cover",
        color: "white",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "48px" }}>Pensacola Property Network</h1>
        <p style={{ fontSize: "20px", marginTop: "10px" }}>
          Archie & Paul Warren · Southern Realty Gulf Coast LLC
        </p>
        <a href="#contact" style={{
          display: "inline-block",
          marginTop: "30px",
          padding: "15px 30px",
          background: "white",
          color: "black",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold"
        }}>
          Find Your Pensacola Home
        </a>
      </section>

   {/* ABOUT */}
<section style={{ padding: "80px 20px", maxWidth: "1100px", margin: "auto", display: "grid", gap: "40px", gridTemplateColumns: "1fr 1fr", alignItems: "center" }}>
  
import Image from "next/image";

<Image
  src="/team.jpg"
  alt="Archie and Paul Warren"
  width={800}
  height={600}
/>


  <div>
    <img
      src="/ppn-logo.png"
      alt="Pensacola Property Network"
      style={{ maxWidth: "220px", marginBottom: "20px" }}
    />

    <h2>Meet Archie & Paul Warren</h2>

    <p>
      Archie and Paul Warren are Pensacola-based residential real estate professionals with
      <strong> Southern Realty Gulf Coast LLC</strong>. As founders of the Pensacola Property Network,
      they specialize in helping buyers confidently navigate the local market with clarity,
      integrity, and a modern approach to real estate.
    </p>

    <p>
      With deep knowledge of Pensacola, Gulf Breeze, Navarre, and Perdido Key, Archie and Paul
      focus on building long-term relationships, not just closing transactions. Their goal is
      simple: help clients make smart real estate decisions while enjoying a smooth, stress-free
      experience.
    </p>

    <img
      src="/southern-realty-logo.png"
      alt="Southern Realty Gulf Coast LLC"
      style={{ maxWidth: "180px", marginTop: "20px" }}
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
         <p><strong>Jared Bouloy USNA 2023</strong>: “ I had an automatic degree of trust with both Paul and Archie not only because of their connection to the military, but to the Naval Academy, specifically. Being the father of four old goats and Naval Aviators himself, Paul looked after me like I was one of his own sons. I didn’t have to worry about him chasing a commission because I knew he wouldn’t allow me to get into a deal that he wouldn’t approve of for one of his own boys. Furthermore, when we found a deal, Archie mentored me by offering experience and helping me navigate the right loan, downpayment, and market to target for my situation as an SNA. Having both of them on my team was a tremendous asset, especially coming from an upbringing with no real estate background or connection to the Pensacola area. I know I would have eventually gotten involved in real estate but I would not have done it as soon or with as much confidence had it not been for the Warrens!!”</p>
          <p><strong>Javier Mejia</strong>: “Archie went above and beyond all expectations I had. His communication is very fast and he makes sure all questions are answered thoroughly.”</p>
          <p style={{ fontSize: "14px", marginTop: "20px" }}>
           
          </p>
        </div>
      </section>

      {/* CONTACT / BUYER FORM */}
      <section id="contact" style={{ padding: "80px 20px", maxWidth: "700px", margin: "auto" }}>
        <h2>Start Your Home Search</h2>

        <form action="mailto:Archiewarren13@gmail.com" method="post" encType="text/plain">
          <input placeholder="Full Name" required style={inputStyle} />
          <input placeholder="Email" required style={inputStyle} />
          <input placeholder="Phone Number" required style={inputStyle} />
          <textarea placeholder="Tell us what you're looking for" style={inputStyle}></textarea>
          <button style={buttonStyle}>Submit</button>
        </form>

        <p style={{ marginTop: "30px" }}>
          📞 <a href="tel:4102991538">410-299-1538</a><br />
          📧 Archiewarren13@gmail.com
        </p>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "30px", textAlign: "center", fontSize: "14px", background: "#111", color: "white" }}>
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
  border: "1px solid #ccc"
};

const buttonStyle = {
  padding: "14px",
  width: "100%",
  background: "black",
  color: "white",
  border: "none",
  borderRadius: "6px",
  fontSize: "16px"
};
