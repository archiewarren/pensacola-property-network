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
        <Image
          src="/team.jpg"
          alt="Archie and Paul Warren"
          width={800}
          height={600}
          style={{ borderRadius: "12px" }}
        />

        <div>
          <Image
            src="/ppn-logo.png"
            alt="Pensacola Property Network"
            width={220}
            height={120}
            style={{ marginBottom: "20px" }}
          />

          <h2>Meet Archie & Paul Warren</h2>

          <p>
            Paul Warren is a former Blue and Gold Officer and the father of 6
            children including 4 USNA Grads – Arny (’12), Archie (’13),
            Carpenter (’16), and Shepherd (’18).
          </p>

          <p>
            Paul and Archie have been active in the Pensacola real estate market
            for several years. They own and manage Airbnb investment properties
            with over 1,000 reviews averaging 4.96 stars and specialize in
            helping Navy buyers find homes and investment properties.
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
          <p><strong>Bill Mann (USNA ’90)</strong>: Archie’s Airbnb expertise made all the difference.</p>
          <p><strong>Bob Moore (USNA ’23)</strong>: Integrity, mentorship, and trust every step.</p>
          <p><strong>Jessica LaPlante (USNA ’23)</strong>: Effortless, organized, and responsive.</p>
          <p><strong>Jared Bouloy (USNA ’23)</strong>: Having both Paul and Archie was invaluable.</p>
          <p><strong>Javier Mejia</strong>: Above and beyond communication.</p>
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
