import React, { useState } from "react";
import "./SubscriptionPlans.css";

const SubscriptionPlans = () => {
  const [activePlan, setActivePlan] = useState("Personal");

  return (
    <div className="plans-container">
      <h2 className="title">Upgrade your plan</h2>
      <div className="switcher">
        <span
          className={activePlan === "Personal" ? "active" : ""}
          onClick={() => setActivePlan("Personal")}
        >
          Personal
        </span>
        <span
          className={activePlan === "Business" ? "active" : ""}
          onClick={() => setActivePlan("Business")}
        >
          Business
        </span>
      </div>
      <div className="plans">
        {/* Free Plan */}
        <div className="plan-card">
          <h3>Free</h3>
          <p className="price">
            $0 <span>/ month</span>
          </p>
          <p>Explore how AI can help you with everyday tasks</p>
          <button className="active-button">Your current plan</button>
          <ul>
            <li>
              <i className="fas fa-check"></i> Access to GPT-4o mini
            </li>
            <li>
              <i className="fas fa-check"></i> Standard voice chats
            </li>
            <li>
              <i className="fas fa-check"></i> Limited access to GPT-4o
            </li>
            <li>
              <i className="fas fa-check"></i> Limited access to file uploads,
              advanced data analysis, web browsing, and image generation
            </li>
            <li>
              <i className="fas fa-check"></i> Use custom GPTs
            </li>
          </ul>
        </div>

        {/* Plus Plan */}
        <div className="plan-card popular">
          <h3>
            Plus <span className="badge">POPULAR</span>
          </h3>
          <p className="price">
            $20 <span>/ month</span>
          </p>
          <p>Level up productivity and creativity with expanded access</p>
          <button className="active-button">Get Plus</button>
          <ul>
            <li>
              <i className="fas fa-check"></i> Everything in Free
            </li>
            <li>
              <i className="fas fa-check"></i> Extended limits on messaging,
              file uploads, advanced data analysis, and image generation
            </li>
            <li>
              <i className="fas fa-check"></i> Access to advanced voice and
              video inputs
            </li>
            <li>
              <i className="fas fa-check"></i> Limited access to o1 and o1-mini
            </li>
            <li>
              <i className="fas fa-check"></i> Opportunities to test new
              features
            </li>
            <li>
              <i className="fas fa-check"></i> Create and use projects and
              custom GPTs
            </li>
            <li>
              <i className="fas fa-check"></i> Limited access to Sora video
              generation for supported countries and territories
            </li>
          </ul>
        </div>

        {/* Pro Plan */}
        <div className="plan-card">
          <h3>Pro</h3>
          <p className="price">
            $200 <span>/ month</span>
          </p>
          <p>Get the best of OpenAI with the highest level of access</p>
          <button className="active-button">Get Pro</button>
          <ul>
            <li>
              <i className="fas fa-check"></i> Everything in Plus
            </li>
            <li>
              <i className="fas fa-check"></i> Unlimited access to o1, o1-mini,
              and GPT-4o
            </li>
            <li>
              <i className="fas fa-check"></i> Unlimited voice chats, with
              higher limits for video inputs
            </li>
            <li>
              <i className="fas fa-check"></i> Access to o1 pro mode, which uses
              more compute for the best answers to the hardest questions
            </li>
            <li>
              <i className="fas fa-check"></i> Extended access to Sora video
              generation for supported countries and territories
            </li>
            <li>
              <i className="fas fa-check"></i> Usage must be reasonable and
              comply with our policies
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
