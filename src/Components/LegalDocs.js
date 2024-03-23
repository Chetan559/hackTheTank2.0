import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Health <span className="legal-siteSign">+</span>
        </Link>
      </h1>

      <div class="content-0-2-872 content-d51-0-2-944">
        Welcome to Raja Rani Coaching! Please carefully review these terms and
        conditions before enrolling in our classes. By enrolling, you agree to
        comply with the following:
        <br />
        <br />
        1. Registration and Enrollment:
        <br />
        - Register online for our coaching classes.
        <br />
        - Enrollment is first-come, first-served.
        <br />
        - Provide accurate, complete registration information.
        <br />
        <br />
        2. Payment:
        <br />
        - Full tuition or agreed payment plan due before classes start.
        <br />
        - Payment methods, due dates, and late fees detailed at registration.
        <br />
        <br />
        3. Refunds and Cancellations:
        <br />
        - Refunds are not applicable.
        <br />
        <br />
        4. Class Attendance:
        <br />
        - Regular attendance is key.
        <br />
        - Missed classes are your responsibility to make up.
        <br />
        - Excessive absences may lead to dismissal without refund.
        <br />
        <p></p>
        <p>
          5. Conduct:
          <br />
          - Respectful, appropriate behavior required.
          <br />
          - Disruptive behavior may result in expulsion without refund.
          <br />
          <br />
          6. Materials and Intellectual Property:
          <br />
          - Course materials for personal use only.
          <br />
          - Raja Rani Coaching retains all rights to materials and content.
          <br />
          <br />
          7. Privacy and Data Usage:
          <br />
          - Personal information kept confidential and used for administrative
          purposes.
          <br />
          - You may receive program-related communications.
          <br />
          <br />
          8. Changes to Schedule or Curriculum:
          <br />
          - We reserve the right to make necessary changes.
          <br />
          - Advance notice will be given for any changes.
          <br />
          <br />
          9. Liability:
          <br />
          - Not liable for personal injury or loss of property.
          <br />
          - You are responsible for your safety during activities.
          <br />
          <br />
          10. Termination of Enrollment:
          <br />
          - Enrollment may be terminated for non-compliance with terms or other
          necessary reasons.
          <br />
          <br />
          11. Governing Law:
          <br />
          - Governed by law of india.
          <br />
          - All the disputes are subject to Gujarat (Surat) jusrisdiction only.
          <br />
          <br />
          By enrolling, you acknowledge understanding and agreement to these
          terms. Non-compliance may lead to disciplinary actions, including
          termination. Contact us for any queries or concerns about these terms.
        </p>
      </div>

      <div className="legal-footer">
        <p>© 2013-2023 Health+. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
