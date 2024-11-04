import React, { useState } from "react";
import { months, transactions } from "../../constants/transactions";

export default function Transaction() {
  const [selectedMonth, setSelectedMonth] = useState(9);

  return (
    <div>
      <h1 className="text-2xl font-medium text-zinc-700">Semua Transaksi</h1>
      <ol className="flex gap-4 my-7">
        {months.map((month) => (
          <li
            key={month.id}
            className={`text-2xl font-medium ${
              selectedMonth === month.id ? "text-zinc-700" : "text-zinc-300"
            }`}
          >
            {month.text}
          </li>
        ))}
      </ol>
      <div className="flex flex-col">
        <ol>
          {transactions.map((transaction, index) => (
            <li
              key={index}
              className="flex justify-between items-center my-4 p-7"
            >
              <p
                className={`${
                  transaction.value === "positive"
                    ? "text-[#5bb693]"
                    : "text-[#e36042]"
                } text-3xl font-medium`}
              >
                {transaction.value === "positive" ? "+" : "-"}{" "}
                {transaction.nominal}
              </p>
              <p className="text-zinc-500">{transaction.purpose}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
