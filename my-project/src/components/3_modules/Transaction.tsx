import React, { useEffect, useState } from "react";
import { months, transactions } from "../../constants/transactions";
import { TransactionType } from "../../types/transaction";
import { getTransactions } from "../../services/transaction";

export default function Transaction() {
  const [selectedMonth, setSelectedMonth] = useState(9);

  const [transactionData, setTransactionData] = useState<TransactionType>({
    offset: "",
    limit: "",
    records: [
      {
        invoice_number: "",
        transaction_type: "",
        description: "",
        total_amount: 0,
        created_on: "",
      },
    ],
  });
  const [transactionError, setTransactionError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getTransactions(setTransactionData, setTransactionError, setIsLoading);
  }, []);

  if (transactionError) {
    console.error(transactionError);
  }

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
          {transactionData.records.map((transaction, index) => (
            <li
              key={index}
              className="flex justify-between items-center my-4 p-7"
            >
              {/* <p
                className={`${
                  transactions.value === "positive"
                    ? "text-[#5bb693]"
                    : "text-[#e36042]"
                } text-3xl font-medium`}
              >
                {transactions.value === "positive" ? "+" : "-"}{" "}
                {transactions.nominal}
              </p> */}
              <p className={`text-[#5bb693] text-3xl font-medium`}>
                {"+ Rp."}
                {transaction.total_amount}
              </p>
              <p className="text-zinc-500">{transaction.description}</p>
            </li>
          ))}
        </ol>
      </div>
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
