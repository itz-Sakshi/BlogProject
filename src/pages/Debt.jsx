import React, { useState, useEffect } from "react";
import John from "../assets/images/SadJohn.jpeg";
import Snowball from "../assets/images/Snowball.jpeg";
import Avalanche from "../assets/images/Avalanche.jpeg";
import { useForm } from "react-hook-form";
import { Select } from "../components";
import {Button} from "../components";

const Debt = () => {
  const { register, watch } = useForm();

  const INITIAL_EMERGENCY_FUNDS = 1000; // Initial emergency funds
  const MONTHLY_SURPLUS = 500; // Fixed surplus per month

  const [emergencyFunds, setEmergencyFunds] = useState(INITIAL_EMERGENCY_FUNDS);
  const [remainingSurplus, setRemainingSurplus] = useState(MONTHLY_SURPLUS);

  // Watch the fields in real-time
  const creditPayment = watch("credit", 0);
  const personalPayment = watch("personal", 0);

  useEffect(() => {
    const totalLoanPayments = Number(creditPayment) + Number(personalPayment);

    const surplusLeft = MONTHLY_SURPLUS - totalLoanPayments;
    
    if (surplusLeft < 0) {
      setEmergencyFunds(
        INITIAL_EMERGENCY_FUNDS + surplusLeft 
      );
      setRemainingSurplus(0); 
    } else {
      setEmergencyFunds(INITIAL_EMERGENCY_FUNDS); 
      setRemainingSurplus(surplusLeft); 
    }
  }, [creditPayment, personalPayment]);

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
          <div className="breakdown w-[50%] bg-slate-400 rounded-xl m-3">
            <div className="flex flex-col justify-center text-3xl p-3 gap-5">
              <p className="text-center">
                <strong className="text-green-700">Debt Breakdown:</strong>
              </p>
              <p><strong>Credit Card:</strong> $4,000 at 20% interest $100/month min. payment.</p>
              <p><strong>Personal Loan:</strong> $6,000 at 10% interest $150/month min. payment.</p>
              <p><strong>Monthly Expenses:</strong> $2,500 (fixed).</p>
              <p><strong>Income:</strong> $3,000.</p>
              <p><strong>Emergency Fund:</strong> $1,000.</p>
              <p><strong>Surplus:</strong> $3,000 - $2,500 = $500/month.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="third p-4">
        <div className="w-[70%] p-10 flex flex-col gap-8 h-[100vh] m-auto bg-slate-400 rounded-lg">
          <h1 className="text-center text-2xl font-bold">
            🚨 Challenge Alert! John is juggling his debts: Distribute his
            monthly budget wisely to keep him on track and score financial
            success points!
          </h1>
          <form>
            <div className="flex flex-col gap-4">
              <Select
                options={[0, 100, 200, 300, 400, 500]}
                label="Credit Loan Payment"
                className="mb-4"
                {...register("credit", { required: true })}
              />
              <Select
                options={[0, 100, 200, 300, 400, 500]}
                label="Personal Loan Payment"
                className="mb-4"
                {...register("personal", { required: true })}
              />
              <div>
                <label className="block font-semibold mb-2">Emergency Funds Remaining</label>
                <input
                  type="number"
                  value={emergencyFunds}
                  readOnly
                  className="px-3 py-2 rounded-lg bg-gray-200 text-black outline-none border border-gray-300 w-full"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">Remaining Surplus</label>
                <input
                  type="number"
                  value={remainingSurplus}
                  readOnly
                  className="px-3 py-2 rounded-lg bg-gray-200 text-black outline-none border border-gray-300 w-full"
                />
              </div>
            </div>
            <div className="flex justify-center p-8">
            <Button
                type="submit"
                className="w-1/5 text-center"
                >Submit</Button>
                </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Debt;
