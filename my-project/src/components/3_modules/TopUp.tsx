import React, { useState } from "react";
import Input from "../1_elements/Input";
import Button from "../1_elements/Button";
import HeadingWelcome from "../1_elements/HeadingWelcome";
import HeadingName from "../1_elements/HeadingName";
import ButtonNominal from "../1_elements/ButtonNominal";

export default function TopUp() {
  const [topUpNominal, setTopUpNominal] = useState("");

  return (
    <>
      <HeadingWelcome>Silahkan masukan</HeadingWelcome>
      <HeadingName>Nominal Top Up</HeadingName>
      <div className="flex my-16 gap-6 h-[120px]">
        <div className="w-3/5 flex flex-col justify-between">
          <Input
            type={"number"}
            icon={"W"}
            placeholder={"masukan nominal Top Up"}
            value={topUpNominal}
            onChange={(e) => setTopUpNominal(e.target.value)}
          />
          <Button bgColor={"[#f42619]"} textColor={"[#fff]"}>
            Top Up
          </Button>
        </div>
        <div className="w-2/5 grid grid-cols-3 gap-x-3">
          <div className="grid gap-y-6">
            <ButtonNominal onClick={() => setTopUpNominal("10000")}>
              Rp10.000
            </ButtonNominal>
            <ButtonNominal onClick={() => setTopUpNominal("100000")}>
              Rp100.000
            </ButtonNominal>
          </div>
          <div className="grid gap-y-6">
            <ButtonNominal onClick={() => setTopUpNominal("20000")}>
              Rp20.000
            </ButtonNominal>
            <ButtonNominal onClick={() => setTopUpNominal("250000")}>
              Rp250.000
            </ButtonNominal>
          </div>
          <div className="grid gap-y-6">
            <ButtonNominal onClick={() => setTopUpNominal("50000")}>
              Rp50.000
            </ButtonNominal>
            <ButtonNominal onClick={() => setTopUpNominal("500000")}>
              Rp500.000
            </ButtonNominal>
          </div>
        </div>
      </div>
    </>
  );
}
