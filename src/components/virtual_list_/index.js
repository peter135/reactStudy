import Vlist from "./VList";
import faker from "faker";
import { css } from "@emotion/css";
import React from 'react';

const data = [];
const dataLength = 10000;
for (let id = 0; id < dataLength; ++id) {
  data.push({
    id,
    value: faker.lorem.sentences()
  });
}

const userVisibleHeight = 800;
const estimateRowHeight = 94;
const bufferSize = 5;

export default function dummyComp() {
  return (
    <Vlist
      height={userVisibleHeight}
      total={dataLength}
      estimateRowHeight={estimateRowHeight}
      bufferSize={bufferSize}
      rowRenderer={(index, styleData) => {
        const item = index;
        return (
          <div
            key={item}
            className={css`
              width: 100%;
              padding: 20px;
              border-bottom: 1px solid #000;
            `}
            style={styleData}
            onClick={() => {
              console.log("item-", index);
            }}
            id={`item-${index}`}
          >
            <span
              className={css`
                display: block;
                color: rgba(0, 0, 0, 0, 85);
                font-weight: 500;
                font-size: 14px;
              `}
            >
              Item - {data[index].id} Data:
            </span>
            <span
              className={css`
                width: 100%;
                color: rgba(0, 0, 0, 0.5);
                font-size: 16px;
              `}
            >
              {data[index].value}
            </span>
          </div>
        );
      }}
    />
  );
}
