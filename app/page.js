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
          <p><strong>Client Name</strong>: “Archie and Paul were incredible from start to finish.”</p>
          <p><strong>Client Name</strong>: “Best home buying experience we’ve had in Pensacola.”</p>
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
