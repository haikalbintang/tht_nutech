import React, { useEffect, useState } from "react";
import { months, transactions } from "../../constants/transactions";
import { TransactionType } from "../../types/transaction";
import { getTransactions } from "../../services/transaction";
import Button from "../1_elements/Button";

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
    <>
      <h1 className="text-2xl font-medium text-zinc-700">Semua Transaksi</h1>

      <ol className="flex gap-4 my-7">
        {months.map((month) => (
          <li
            key={month.id}
            onClick={() => setSelectedMonth(month.id)}
            className={`cursor-pointer text-2xl font-medium ${
              selectedMonth === month.id ? "text-zinc-700" : "text-zinc-300"
            }`}
          >
            {month.text}
          </li>
        ))}
      </ol>

      <ol className="flex flex-col">
        {isLoading
          ? "loading..."
          : transactionData.records.map((transaction, index) => (
              <li
                key={index}
                className="flex justify-between items-center my-4 p-7"
              >
                <p
                  className={`${
                    transaction.transaction_type === "TOPUP"
                      ? "text-[#5bb693]"
                      : "text-[#e36042]"
                  } text-3xl font-medium`}
                >
                  {transaction.transaction_type === "TOPUP" ? "+" : "-"}
                  {" Rp."}
                  {transaction.total_amount}
                </p>
                <p className="text-zinc-500">{transaction.description}</p>
              </li>
            ))}
      </ol>

      <Button
        border={"border border-[#f42619] mb-10"}
        bgColor={"bg-white"}
        textColor={"text-[#f42619]"}
      >
        Show More
      </Button>
    </>
  );
}
