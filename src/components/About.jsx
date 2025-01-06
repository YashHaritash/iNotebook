import React, { useState } from "react";

export default function About() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <section className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-3 text-center">
          <img
            src="../../icon.svg"
            alt="iNotebook Illustration"
            className="img-fluid rounded mb-3"
          />
        </div>
        <div className="col-md-9">
          <h1 className="display-4 mb-3">About iNotebook</h1>
          <p className="lead">
            iNotebook is a secure and user-friendly online notebook designed to
            help you organize your thoughts, tasks, and important notes
            efficiently. Built with the MERN stack, iNotebook offers seamless
            authentication and a smooth note-taking experience, making it the
            perfect tool for both personal and professional use.
          </p>
          <button
            className="btn btn-outline-primary mt-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#moreInfo"
            aria-expanded={showMore}
            aria-controls="moreInfo"
            onClick={toggleShowMore}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
          <div className="collapse mt-4" id="moreInfo">
            <p>With iNotebook, you can:</p>
            <ul className="list-unstyled">
              <li>
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                Create and manage notes securely.
              </li>
              <li>
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                Access your notes anytime, anywhere.
              </li>
              <li>
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                Experience a responsive and intuitive interface.
              </li>
            </ul>
            <p>
              Start using iNotebook today and take control of your notes like
              never before!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
