import React, { ComponentProps } from "react";
import RenderIf from "../function/RenderIf";
import { isEmpty, isNull } from "lodash";
import { ElementObject, ObjectRecord } from "./type";

type ITableProps<T extends Record<string, ObjectRecord>> = {
  caption: string;
  head: string[];
  body: T[];
  footer: string[] | React.ReactNode;
};

const ReusableTable = <T extends Record<string, ObjectRecord>>({
  caption,
  head,
  body,
  footer,
}: ITableProps<T>) => {
  return (
    <table className="table-auto bg-white w-full border-collapse h-full">
      <RenderIf value={!isEmpty(caption)}>
        <thead>
          <tr className="h-[5vh]">
            <td
              colSpan={head.length}
              className="bg-slate-100 text-center font-bold text-2xl"
            >
              {caption}
            </td>
          </tr>
        </thead>
      </RenderIf>
      {head && (
        <thead className="border border-b border-slate-100 h-[5vh]">
          <tr>
            {head?.map((item, i) => (
              <th
                key={i}
                scope="col"
                className="px-6 py-3 font-semibold text-center"
              >
                {item.toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
      )}
      <RenderIf value={!isEmpty(body)}>
        <tbody className="text-center h-auto ">
          {body?.map((list: ObjectRecord, index) => (
            <React.Fragment key={index}>
              <RenderIf value={typeof list == "object" && !isNull(list)}>
                <tr
                  key={index}
                  className="border border-b border-slate-100 odd:bg-slate-100"
                >
                  {head?.map((th, idx) => {
                    const item = (list as unknown as ElementObject)[th];
                    return (
                      <td key={idx} className="p-2">
                        {item}
                      </td>
                    );
                  })}
                </tr>
              </RenderIf>
            </React.Fragment>
          ))}
        </tbody>
      </RenderIf>
      <RenderIf value={!isEmpty(footer)}>
        <tfoot>
          <tr className="h-[5vh]">
            <td
              colSpan={head.length}
              className="bg-slate-100 text-center font-semibold"
            >
              {footer}
            </td>
          </tr>
        </tfoot>
      </RenderIf>
    </table>
  );
};

React.memo(ReusableTable);

export default ReusableTable;
