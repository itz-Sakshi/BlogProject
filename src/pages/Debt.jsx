import React from "react";
import John from "../assets/images/SadJohn.jpeg";
import Snowball from "../assets/images/Snowball.jpeg";
import Avalanche from "../assets/images/Avalanche.jpeg";

const Debt = () => {
  return (
    <>
      <section className="first">
        <div className="w-full p-10">
          <h1 className="text-white font-bold text-xl text-center">
            Think you’ve got what it takes to master debt repayment? Step into
            the game and improve your skills!
          </h1>
          <div className="w-[60vw] flex mx-auto rounded-xl h-[60vh] bg-gray-300 m-10">
            <img className="rounded-l-xl w-[50%]" src={John} alt="Sad John" />
            <div className="p-4">
              <p className="text-[26px]">
                <strong>Meet John,</strong> a recent university graduate
                stepping into the real world with a hefty student loan and a
                brand-new entry-level job. With a decent salary and big
                financial dreams, are you ready to help John conquer his debt
                and level up his financial game?
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="second ">
        <div className="w-full p-10 flex gap-8 h-[100vh]">
          <div className="images w-[50%] p-2">
            <h1 className="text-white font-bold text-2xl text-center">
              Key Strategies for tackling debt:{" "}
              <strong className="text-green-700">Snowball</strong> and{" "}
              <strong className="text-green-700">Avalanche</strong>. Let’s
              explore both and see which works best for John!
            </h1>

            <div
              id="snowball"
              className="text-white flex justify-center items-center p-4 gap-3"
            >
              <img
                src={Snowball}
                alt="Snowball Method"
                style={{ width: "200px", height: "auto" }}
              />
              <p className="text-[20px]">
                <p className="inline-block text-green-700">Snowball Method</p>{" "}
                focuses on paying off the smallest debt first, regardless of
                interest rate. Once the smallest debt is cleared, its payment is
                rolled into the next smallest debt, creating a snowball effect.
              </p>
            </div>

            <div
              id="avalanche"
              className="text-white flex justify-center items-center p-4 gap-3"
            >
              <img
                src={Avalanche}
                alt="Avalanche Method"
                style={{ width: "200px", height: "auto" }}
              />
              <p className="text-[20px]">
                <p className="inline-block text-green-700">Avalanche Method</p>{" "}
                targets the debt with the highest interest rate first. After
                paying it off, the next highest interest debt is targeted,
                minimizing the total interest paid.
              </p>
            </div>
          </div>
          <div className="breakdown w-[50%] bg-slate-600 rounded-xl m-3">
            <div>
              <p>
                <strong>Debt Breakdown:</strong>
              </p>
              <p>Credit Card: $4,000 at 20% APR → $66.67/month interest.</p>
              <p>Personal Loan: $6,000 at 10% APR → $50/month interest.</p>
              <p>Monthly Expenses: $2,500 (fixed).</p>
              <p>Income: $3,000.</p>
              <p>Emergency Fund: $1,000.</p>
              <p>Surplus: $3,000 - $2,500 = $500/month.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Debt;
