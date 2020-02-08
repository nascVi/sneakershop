import React from "react"
import Title from "../Globals/Title"

export default function Contact() {
  return (
    <section className="contact py-5">
      <Title title="Nous Contacter" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form action="https://formspree.io/pnpeedj@gmail.com" method="POST">
            {/* name */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Your name"
              />
            </div>
            {/* mail */}
            <div className="form-group">
              <label htmlFor="email">Email</label>

              {/* Case study for no-response to customers mail */}
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="youre-@email.com"
              />
              {/* description */}
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  rows="5"
                  className="form-control"
                  name="description"
                  id="description"
                  placeholder="your comments..."
                />
              </div>
              {/* Submit */}
              <button
                type="submit"
                className="btn btn-yellow btn-block text-capitalize mt-5 font-weight-bold"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
